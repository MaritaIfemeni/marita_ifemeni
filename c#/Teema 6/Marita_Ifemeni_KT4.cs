using System;
using System.IO;

namespace Testing_Area
{
    class Program
    {
        /*KT4

            Kirjoita C#-kielinen ohjelma,
            joka kysyy käyttäjän nimeä, kuitenkin enintään 18
            merkkiä ja sitten tulostaa sen alla kuvatusti nousevana ja pituudesta riippumatta sivusuunnassa keskelle kuvaruutua. Jotta teksti hahmottuisi riviksi, lisää kaksi välilyöntiä perättäisten merkkien väliin. Kirjoita tämä myös nimi.txt-tiedostoon
            */
 

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            char[] taulu = KysyNimi();

            if (taulu.Length > 18)        //Tarkistetaan taulukon koko
            {
                Console.WriteLine("Liian monta kirjainta, vain 18 merkkiä hyväksytään.");
                return;
            }

            Tulosta(taulu);
        }

        static char[] KysyNimi()        //Kysy nimen ja luo char tyyppisen taulun nimestä
        {
            Console.Write("Mikä on nimesi? (max. 18 merkkiä): ");
            string nimi = Console.ReadLine();
            char[] taulu = nimi.ToCharArray();

            Console.Clear();
            return taulu;
        }

        static void Tulosta(char[] arr)   //Luo kansion ja tekstitiedoston sekä tulostaa konsoliin tekstin määrätyllä tavalla
        {
            Array.Reverse(arr);

            int i;
            int j;

            DirectoryInfo drInfo = new DirectoryInfo("/Users/maritaifemeni/temp");

            if (drInfo.Exists != true)
            {
                drInfo.Create();
            }

            StreamWriter sw1 = new StreamWriter("/Users/maritaifemeni/temp/nimi.txt");

            for (i = 0; i < arr.Length; i++)
            {
                for (j = 0; j < (Console.WindowWidth / 2) + arr.Length - (2 * i); j++)
                {
                    Console.Write(" ");
                    sw1.Write(" ");
                }

                Console.WriteLine(arr[i]);
                sw1.WriteLine(arr[i]);
            }

            sw1.Close();
        }
    }
}