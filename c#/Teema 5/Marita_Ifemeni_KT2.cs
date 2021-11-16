using System;


namespace Testing_Area
{
    class Program
    {
        /*KT2
        Kysy käyttäjältä kuinka iso taulukko luodaan.
        Luo taulukko ja arvo siihen arvosanoja väliltä 0-5.
        Tutki kuinka moni sai hylätyn arvosanan eli arvosanan 0.
        Tulosta määrä näytölle. Käytä ohjelmassa seuraavia funktioita:

        KysyKoko
        LuoTaulukko
        ArvoArvosanat
        TutkiHylatyt
        Tulosta*/

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            int[] iTable;                    // Taulukko
            int iSize = KysyKoko();          // Kysyy taulukon koon
            iTable = LuoTaulukko(iSize);     // Tekee pyydetyn kokoisen taulukon

            for (int i = 0; i < iSize; i++)  // Arpoo taulukkoon satunnaiset luvut
            {
                iTable[i] = ArvoArvosanat();
            }

            Tulosta(TutkiHylatut(iTable));   // Tulostaa hylättyjen arvosanojen määrän  
        }

     
        static int KysyKoko()
        {
            Console.Write("Kuinka iso taulukko luodaan? Taulukon koko: ");  //Kysytään taulukon kokoa käyttäjältä
            int iSize = int.Parse(Console.ReadLine());
            return iSize;
        }

        
        static int[] LuoTaulukko(int iSize2)             // Luo ja palauttaa talukon pyydetyssä koossa
        {
            int[] iTable = new int[iSize2];
            return iTable;
        }

      
        static int ArvoArvosanat()                          // Arpoo arvosanoja 0-5 välillä
        {
            Random rng = new Random();
            int random = rng.Next(5);
            return random;
        }

        
        static int TutkiHylatut(int[] iTable)               //Etsii hylätyty arvosanat taulukosta
        {
            int i, j = 0;

            for (i = 0; i < iTable.Length; i++)
            {
                if (iTable[i] == 0)
                {
                    j++;
                }
                else
                {
                }
            }

            return j;
        }

        
        static void Tulosta(int aFails)                     //Tulostetaan hylätyt arvosanat
        {
            Console.Write(Environment.NewLine);
            Console.WriteLine("Hylättyjä arvosanoja oli " + aFails + " kappaletta.");
            Console.Write(Environment.NewLine);
        }
    }
}
