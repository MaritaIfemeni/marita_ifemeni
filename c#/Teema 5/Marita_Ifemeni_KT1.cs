using System;


namespace Testing_Area
{
    class Program
    {
        /*KT1
        Tee ohjelma, jossa kysytään KysyJaTestaaLuku() nimisessä funktiossa  käyttäjältä kokonaisluku. 
        Funktio palauttaa kokonaislukuarvon seuraavasti:
        1, jos syötetty luku on positiivinen.
        0, jos syötetty luku on nolla.
        -1, jos syötetty luku on negatiivinen. 
        Tulosta näiden paluuarvojen perusteella Mainissa ilmoitus ruudulle.
        ”Luku oli positiivinen”, jos paluuarvo oli 1.
        ”Luku oli nolla”, jos paluuarvo oli 0
        ”Luku oli negatiivinen”, jos paluuarvo oli -1.
        Käyttäkää Mainissa switch-case-rakennetta */

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;


            switch (KysyJaTestaaLuku())
            {
                case 1:
                    Console.WriteLine("Luku oli positiivinen.");
                    break;

                case 0:
                    Console.WriteLine("Luku oli nolla.");
                    break;
                case -1:
                    Console.WriteLine("Luku oli negatiivinen.");
                    break;
            }

            static int KysyJaTestaaLuku()
            {
                Console.Write("Anna kokonaisluku: ");
                int iLuku = int.Parse(Console.ReadLine());

                if (iLuku >= 1)
                {
                    iLuku = 1;
                }
                else if (iLuku <= -1)
                {
                    iLuku = -1;
                }
                else
                {
                    iLuku = 0;
                }

                return iLuku;
            }

        }
    }
}