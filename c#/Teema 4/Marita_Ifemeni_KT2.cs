using System;

namespace Teema3uusi
{
    class MainClass
    {
        public static void Main(string[] args)
        /*KT2
        Esittele 10 alkioinen int taulukko ja arvo siihen lukuja väliltä 0-10.
        Vain parilliset luvut sallitaan. Jos arvottiin pariton luku niin sen
        tilalle on arvottava uusi luku. Tulosta luvut lopuksi tabulaattorilla eroteltuna */

        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            int[] iTable = new int[10];
            int iFirst, iSecond;
            int random;

            Random rnd = new Random();

            for (iFirst = 0; iFirst < iTable.Length;)
            {
                random = rnd.Next(11);

                if (random % 2 == 0)
                {
                    iTable[iFirst] = random;
                    iFirst ++;
                }
            }
            Console.WriteLine();
            for (iSecond = 0; iSecond < iTable.Length; iSecond++)

            {
                Console.Write("{0}\t", iTable[iSecond]);
            }

            Console.WriteLine();
        }
    }
}
       