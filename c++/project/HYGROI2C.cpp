/************************************************************************/
/*																		*/
/*	HYGROI2C.cpp		--		Definition for HYGROI2C library 	    */
/*																		*/
/************************************************************************/
/*	Author:		Arthur Brown											*/
/*	Copyright 2017, Digilent Inc.										*/
/************************************************************************/
/*  File Description:													*/
/*		This file defines functions for HYGROI2C						*/
/*																		*/
/************************************************************************/
/*  Revision History:													*/
/*																		*/
/*	01/30/2017(ArtVVB): created											*/
/* Orginal code modiefied 4/2021 by Marita Ifemeni for a school project */
/************************************************************************/


/* ------------------------------------------------------------ */
/*				Include File Definitions						*/
/* ------------------------------------------------------------ */
#include "HYGROI2C.h"
#include "ThisThread.h"
#include "mbed.h"
#include <cstdint>
#include <cstdio>
#include <cstring>


/* ------------------------------------------------------------ */
/*				Procedure Definitions							*/
/* ------------------------------------------------------------ */

HYGROI2C::HYGROI2C(PinName sda, PinName scl) : i2c(sda, scl)
{
    //i2c.frequency(HYGROI2C_FREQUENZY);
}

/* ------------------------------------------------------------ */
/*        HYGROI2C::writeRegI2C
**
**        Synopsis:
**				writeRegI2C(bConfig);
**
**        Parameters:
**				uint8_t bReg - the register address to be written to
**				uint16_t bVal - the bytes to be written
**
**        Return Values:
**                void 
**
**        Errors:
**			none
**
**        Description:
**			This function writes to a register over I2C. 
**
*/

void HYGROI2C::writeRegI2C(uint8_t bReg, uint16_t bVal)
{
    char i2cWrites[3];
    i2cWrites[0] = bReg;
    i2cWrites[1] = (bVal >> 8) & 0xff;  // 0b[1010 1010]  1111 1111 
                                        //     >> 8    0b[1010 1010] 1111 1111 
    i2cWrites[2] = bVal & 0xff; 
 
    int result = i2c.write(HYGROI2C_I2C_ADDR, i2cWrites, sizeof(i2cWrites));

    //printf("I2C write result: %d\n", result);

/*
	Wire.beginTransmission(HYGROI2C_I2C_ADDR); // start transmission to device 
	Wire.write(bReg);		        // send register address
	Wire.write((bVal>>8)&0xff); // send upper byte
	Wire.write((bVal)&0xff);    // send lower byte
	Wire.endTransmission(); 	  // end transmission	
*/
}

/* ------------------------------------------------------------ */
/*        HYGROI2C::readRegI2C
**
**        Synopsis:
**				readRegI2C(bReg, rVal, delay_ms);
**
**        Parameters:
**				uint8_t bReg - the register address to be written to
**				uint16_t* rVal - the return location for the read bytes
**				unsigned int delay_ms - the number of milliseconds required for the HYGRO to convert the desired data
**
**        Return Values:
**                bool success - whether valid data has been successfully captured
**
**        Errors:
**			failure on bad rVal pointer
**
**        Description:
**			This function reads a register over I2C. 
**
*/
 bool HYGROI2C::readRegI2C(uint8_t bReg, uint16_t &rVal, unsigned long delay_ms)
 {
	int n, i;
    char i2cWrites[1] = {bReg};

    int result = i2c.write(HYGROI2C_I2C_ADDR, i2cWrites, sizeof(i2cWrites));
    //printf("I2C read write result: %d\n", result);
//	Wire.beginTransmission(HYGROI2C_I2C_ADDR);
//	Wire.write(bReg); // send register address
	if (delay_ms > 0) 
    {
		ThisThread::sleep_for((std::chrono::milliseconds)delay_ms); // wait for conversion to complete
    } 
    //ThisThread::sleep_for(10ms);

    char i2cReads[2] = {0, 0};

    n = i2c.read(HYGROI2C_I2C_ADDR, i2cReads, sizeof(i2cReads));
    // printf("read byte 0: 0x%x, byte 1: 0x%x\n", i2cReads[0], i2cReads[1]);
          
	//n = Wire.requestFrom(HYGROI2C_I2C_ADDR, 2);
	if (n != 0)
    {
        return false;
    }

    rVal = i2cReads[0] << 8;
    rVal = rVal | i2cReads[1];
    // printf("Siftailu:     %d\n", rVal);

    return true;

/*    
    if (n != 2) 
    {
		for (i=0; i<n; i++) 
        {
			Wire.read();  // ensure any bad bytes aren't left in the buffer
        }
		return false;
	}
	while (Wire.available()) 
    {
		rVal <<= 8;
		rVal |= (uint16_t)Wire.read(); // shift and set in received bytes, most significant first
	}
	return true;
*/
}


/* ------------------------------------------------------------ */
/*        HYGROI2C::begin
**
**        Synopsis:
**				myHYGROI2C.begin();
**
**        Parameters:
**
**        Return Values:
**                void 
**
**        Errors:
**
**        Description:
**				This function initializes the I2C interface #1 that is used to communicate with PmodAD2.
**
*/
void HYGROI2C::begin()
{
	//Wire.begin();
	//delay(15);
	writeRegI2C(HYGROI2C_CONFIG_REG, 0x00); // use non-sequential acquisition mode, all other config bits are default
}

/* ------------------------------------------------------------ */
/*        HYGROI2C::getTemperature
**
**        Synopsis:
**				myHYGROI2C.getTemperature();
**
**        Parameters:
**
**        Return Values:
**                float deg_c - the temperature reading in degrees celsius
**
**        Errors: - modify to manage read failures
**
**        Description:
**				This function captures a temperature reading from the Pmod HYGRO.
**
*/
float HYGROI2C::getTemperature()
{
	uint16_t raw_t;
	float deg_c;
	bool result = readRegI2C(HYGROI2C_TMP_REG, raw_t, 10); // conversion time for temperature at 14 bit resolution  6.5 isms
    //printf("Read result: %d\n", result);
	deg_c = (float)raw_t / 0x10000;
	deg_c *= 165.0;
	deg_c -= 40.0; // conversion provided in reference manual
	return deg_c;
}

/* ------------------------------------------------------------ */
/*        HYGROI2C::getHumidity
**
**        Synopsis:
**				HYGROI2C.getHumidity();
**
**        Parameters:
**
**        Return Values:
**                float per_rh - the humidity reading in percent relative humidity.
**
**        Errors: - modify to manage read failures
**
**        Description:
**				This function captures a humidity reading from the Pmod HYGRO.
**
*/
float HYGROI2C::getHumidity() {
	uint16_t raw_h;
	float per_rh;
	readRegI2C(HYGROI2C_HUM_REG, raw_h, 10); // conversion time for humidity at 14 bit resolution is 6.35 ms
	per_rh = (float)raw_h / 0x10000;
	per_rh *= 100.0; // conversion provided in reference manual
	return per_rh;
}

/* ------------------------------------------------------------ */
/*        HYGROI2C::tempF2C
**
**        Synopsis:
**				HYGROI2C.tempF2C(deg_f);
**
**        Parameters:
**				float deg_f - the temperature in degrees fahrenheit
**        Return Values:
**              float deg_c - the temperature in degrees celsius
**
**        Errors:
**
**        Description:
**				This function converts a fahrenheit temperature to celsius
**
*/
float tempF2C(float deg_f)
{
	return (deg_f - 32) / 1.8;
}

/* ------------------------------------------------------------ */
/*        HYGROI2C::tempC2F
**
**        Synopsis:
**				HYGROI2C.tempC2F(deg_c);
**
**        Parameters:
**              float deg_c - the temperature in degrees celsius
**        Return Values:
**				float deg_f - the temperature in degrees fahrenheit
**
**        Errors:
**
**        Description:
**				This function converts a celsius temperature to fahrenheit
**
*/
float tempC2F(float deg_c)
{
	return deg_c * 1.8 + 32;
}
