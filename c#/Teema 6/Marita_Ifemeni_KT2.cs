using System;
using System.IO;
using System.Linq;

namespace Testing_Area
{
    class Program
    {


/*KT2
Arvo 40 kpl liukulukuja väliltä 1.4 – 5.8 ja kirjoita ne datat.txt tiedostoon allekkain.
Älä käytä taulukkoa tässä vaiheessa. Sen jälkeen luo 40 alkioinen double-taulukko ja lue arvot tiedostosta taulukkoon.
Tämän jälkeen tulosta taulukon lukujen summa, keskiarvo, minimiarvo ja maksimiarvo. Käytä funktioita:
ArvoJaTallennaTiedostoon
LueTiedostosta
TulostaTiedot*/

        static void Main(string[] args)
        {
            double[] argTaulu;

            ArvoJaTallennaTiedostoon();
            LueTiedostosta(out argTaulu);
            TulostaTiedot(argTaulu);
        }

        static void ArvoJaTallennaTiedostoon()  //Arvotaan arvot ja tallennetaan tiedostoon
        {
            Random rng = new Random();

            DirectoryInfo drInfo = new DirectoryInfo("/Users/maritaifemeni/temp"); //Luodaan temp kansio (jos ei jo olemassa)

            if (drInfo.Exists != true)
            {
                drInfo.Create();
            }


            StreamWriter sw1 = new StreamWriter("/Users/maritaifemeni/temp/datat.txt"); //Luodaan txt tiedosto

            for (int i = 0; i < 40; i++)  //Määritellään arvojen ehdot
            {
                float luku = Convert.ToSingle(rng.NextDouble() * 4.4);
                float calcLuku = luku + 1.4f;
                float rCalcLuku = (float)Math.Round(calcLuku, 1);

                sw1.WriteLine(rCalcLuku); //Kirjoittaa rivit
            }

            sw1.Close();  //Suljetaan tiedosto
        }

        static void LueTiedostosta(out double[] taulu)  //Tuodaan taulukko muokattavaksi
        {
            taulu = new double[40];

            StreamReader sr1 = new StreamReader("/Users/maritaifemeni/temp/datat.txt"); //Käynnistää tiedoston lukemisen

            for (int i = 0; i < taulu.Length; i++)                  //TÄyttää taulukon
            {
                double luku = Convert.ToDouble(sr1.ReadLine());
                taulu[i] = luku;
            }

            sr1.Close();   //Sulkee tiedoston
        }

        static void TulostaTiedot(double[] taulu)  //Tulostaa taulukon tiedot
        {
            Array.Sort(taulu);

            float tauluSum = Convert.ToSingle(taulu.Sum());
            float rTauluSum = (float)Math.Round(tauluSum, 1);

            float aRTauluSum = rTauluSum / 40;
            float rARTauluSum = (float)Math.Round(aRTauluSum, 1);

            float minValue = (float)taulu[0];
            float maxValue = (float)taulu[39];

            Console.WriteLine("Taulukon lukujen summa: " + rTauluSum);
            Console.WriteLine("Taulukon lukunjen keskiarvo: " + rARTauluSum);
            Console.WriteLine("Taulukon pienin luku: " + minValue);
            Console.WriteLine("Taulukon suurin luku: " + maxValue);
        }
    }
}