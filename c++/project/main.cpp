
#include "HYGROI2C.h"
#include "ThisThread.h"
#include "mbed.h"
#include "ESP8266Interface.h"
// Library to use https://github.com/ARMmbed/mbed-mqtt
#include <MQTTClientMbedOs.h>

AnalogIn pot(A3);
int potScaled = 0;
int sampleCount = 0;
char buffer[128];

SPI spi(D11, D12, D13); // mosi, miso, sck
DigitalOut alsCS(D3);        // chip select for sensor SPI communication
HYGROI2C tempSensor(D0, D1);   // sda, clk    // L432

int alsScaledI = 0;         // 32 bit integer
int getALS();

int main()
{

    ESP8266Interface esp(MBED_CONF_APP_ESP_TX_PIN, MBED_CONF_APP_ESP_RX_PIN);
    
    SocketAddress deviceIP;     //Store device IP
    SocketAddress MQTTBroker;   //Store broker IP
    TCPSocket socket;
    MQTTClient client(&socket);
    
    ThisThread::sleep_for(3s);    // Waiting for the user to open serial terminal
    
    printf("\nConnecting wifi..\n");

    int ret = esp.connect(MBED_CONF_APP_WIFI_SSID, MBED_CONF_APP_WIFI_PASSWORD, NSAPI_SECURITY_WPA_WPA2);

    if(ret != 0)
    {
        printf("\nConnection error\n");
    }
    else
    {
        printf("\nConnection success\n");
    }
        
    esp.get_ip_address(&deviceIP);
    printf("IP via DHCP: %s\n", deviceIP.get_ip_address());

    esp.gethostbyname(MBED_CONF_APP_MQTT_BROKER_HOSTNAME, &MQTTBroker, NSAPI_IPv4, "esp");

    MQTTBroker.set_port(MBED_CONF_APP_MQTT_BROKER_PORT);
    MQTTPacket_connectData data = MQTTPacket_connectData_initializer;       
    data.MQTTVersion = 3;
    
    data.clientID.cstring = MBED_CONF_APP_MQTT_CLIENT_ID;
    data.username.cstring = MBED_CONF_APP_MQTT_AUTH_METHOD;
    data.password.cstring = MBED_CONF_APP_MQTT_AUTH_TOKEN;

    sprintf(buffer, "Hello from Mbed OS %d.%d", MBED_MAJOR_VERSION, MBED_MINOR_VERSION);
 
    MQTT::Message msg;
    msg.qos = MQTT::QOS0;
    msg.retained = false;
    msg.dup = false;
    msg.payload = (void*)buffer;
    msg.payloadlen = strlen(buffer);
    
    ThisThread::sleep_for(5s);

    // Connecting mqtt broker
    printf("Connecting %s ...\n", MBED_CONF_APP_MQTT_BROKER_HOSTNAME);
    socket.open(&esp);
    socket.connect(MQTTBroker);
    client.connect(data);

    //Publish                    
    printf("Publishing with payload length %d\n", strlen(buffer));
    client.publish(MBED_CONF_APP_MQTT_TOPIC, msg);

//******
    // SPI for the ALS        
    spi.format(8,0);            // Setup the spi for 8 bit data, high steady state clock,  
    spi.frequency(12000000);     // second edge capture, with a 12MHz clock rate
    alsCS.write(1);             // ready to wait the conversion start
    
    tempSensor.begin();
    //while(1) {      // for ever....
    while(sampleCount < 100)  { // A hundred publishing messages and disconnect  

      int temperature = tempSensor.getTemperature();
      int humidity = tempSensor.getHumidity();
      //printf("Temp: %d\n", temperature);
      //printf("Humi: %d\n", humidity);
      //ThisThread::sleep_for(5s);

        potScaled = pot.read_u16() >> 4;//MbedOS fills 16 bits starting on MSB
        potScaled = (potScaled / 50);
        alsScaledI = getALS();                                 // L432KC ADCs are 12bit.
        //printf("Temp: %d\n", potScaled);
        //printf("Humi: %d\n", alsScaledI);

        sampleCount += 1;                                     

        sprintf(buffer, "{\"d\":{\"Sensor\":\"ALS&POT&HYGROMarita \",\"km/h\":%d,\"Lux\":%d,\"Temp\":%d,\"Humitidy\":%d}}", potScaled, alsScaledI, temperature, humidity); 
        msg.payload = (void*)buffer;
        msg.payloadlen = strlen(buffer);

        //Publish                    
        printf("Publishing with payload length %d\n", strlen(buffer));
        printf("Wind m/s: %d\n", potScaled);
        printf("Lux: %d\n", alsScaledI);
        printf("Temp Celcius: %d\n", temperature);
        printf("Humi percent: %d\n", humidity);

        client.publish("iot-2/evt/Sensor/fmt/json", msg);
        ThisThread::sleep_for(30s);  // Publishing every 30 second
        
    }
    // Disconnect this device client on the IBM Cloud Watson IoT 
    printf("Disconnecting from MQTT broker");
    client.disconnect();
    ThisThread::sleep_for(2s);
    //Close the socket to free its memory and bring down the network interface
    socket.close();
    printf("Entering deepsleep (press RESET button to resume)\n"); 
    ThisThread::sleep_for(300s);
}

int getALS()
{
    char alsByte0 = 0;          //8bit data from sensor board, char is the unsigned 8bit
    char alsByte1 = 0;          // 8bit data from sensor board
    char alsByteSh0 = 0;
    char alsByteSh1 = 0;
    char als8bit = 0;
    unsigned short alsRaw = 0;   // unsigned 16 bit
    float alsScaledF = 0;       // 32 bit floating point
    
    alsCS.write(0);             // Begin the conversion process and serial data output
    alsByte0 = spi.write(0x00); // Reading two 8bit bytes by writing two dymmy 8bit bytes
    alsByte1 = spi.write(0x00);
    alsCS.write(1);             // End of serial data output and back to tracking mode
    // Check the http://www.ti.com/lit/ds/symlink/adc081s021.pdf
    
    alsByteSh0 = alsByte0 << 4; // shifting bits to get the number out
    alsByteSh1 = alsByte1 >> 4;
    
    als8bit =( alsByteSh0 | alsByteSh1 );
    
    alsRaw = als8bit; 
    alsScaledF = (float(alsRaw))*(float(6.68)); // The value 6.68 is 64 bit double precision floating point of type double.
                                                // Conversions to 32 bit floating point of type float.
    printf("Ambient light raw 8 bit 0...255 =  '%d' \r\n",alsRaw);
    return (int)alsScaledF; 
}

