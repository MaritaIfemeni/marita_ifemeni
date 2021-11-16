using System;
using System.Linq;

namespace Testing_Area
{
    class Program
    {
/*KT1
Esittele 3 alkioinen double taulukko ja lue siihen käyttäjältä arvot. Tulosta lopuksi syötettyjen lukujen summa ja keskiarvo */

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            double[] dTable = new double[3];
            double dAverage;
            int iNumber;

            for (iNumber = 0; iNumber < dTable.Length; iNumber++)
            {
                Console.Write("Anna {0} luku: ", iNumber + 1);
                dTable[iNumber] = double.Parse(Console.ReadLine());
            }

            dAverage = dTable.Sum() / dTable.Length;

            Console.WriteLine("\nLukujen summa ja keskiarvo\nSumma: {0} \nKeskiarvo: {1}", dTable.Sum(), dAverage);
        }
    }
}