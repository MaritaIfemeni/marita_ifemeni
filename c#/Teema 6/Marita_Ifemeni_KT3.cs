using System;
using System.IO;
using System.Linq;

namespace Testing_Area
{
    class Program
    {

                /*KT3

                    Jos Main-funktioon ei tullut yhtään parameteriä(0 kpl),niin silloin ohjelma päättyy
                    ja tulostuu joku virheilmoitus.Jos Main-funktioon tuli parametreja niin kirjoita tulleet
                    parametrit ”parametrit.txt” tiedostoon allekkain. Sen jälkeen lue tiedostosta sinne
                    kirjoitetut tiedot rivi kerrallaan ja tulosta näytölle. Käytä funktioita:

                    Tallenna

                    LueJaTulosta */

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            if (args.Length == 0)           //Tarkistetaan onko argumenttejä
            {
                Console.WriteLine("Ei yhtään argumenttia, suljetaan ohjelma,");
                return;
            }
            else                            //Jos argumenttejä on, suorittaa eteenpäin
            {
                Tallenna(args);
                LueJaTulosta();
            }
        }

        static void Tallenna(string[] args)   //Tallentaa argumentit tekstitiedostoon riveittäin
        {
            DirectoryInfo drInfo = new DirectoryInfo("/Users/maritaifemeni/temp");
            if (drInfo.Exists != true)
            {
                drInfo.Create();
            }

            StreamWriter sw1 = new StreamWriter("/Users/maritaifemeni/temp/parametrit.txt");

            for (int i = 0; i < args.Length; i++)
            {
                sw1.WriteLine(args[i]);
            }

            sw1.Close();
        }

        static void LueJaTulosta()         //Lukee tekstitiedoston rivit ja tulostaa ne
        {
            StreamReader sr1 = new StreamReader("/Users/maritaifemeni/temp/parametrit.txt");

            while (sr1.EndOfStream != true)
            {
                Console.WriteLine(sr1.ReadLine());
            }

            sr1.Close();
        }
    }
}