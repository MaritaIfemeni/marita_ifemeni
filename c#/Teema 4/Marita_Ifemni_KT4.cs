using System;
using System.Linq;

namespace testarea
{
    class Program
    {

        static void Main(string[] args)
        {
            int[] lottoTaulu = new int[8];
            Random rng = new Random();
            int numero;
            int lisaNumero;
            int i, j;

            for (i = 0; i < lottoTaulu.Length - 1;)   //Varsinaisten numeroiden arvonta
            {
                do
                {
                    numero = rng.Next(1, 41);
                }
                while (lottoTaulu.Contains(numero));

                lottoTaulu[i] = numero;
                i++;
            }

            do
            {
                lisaNumero = rng.Next(1, 41);       //Lisänumeron arvonta
            }
            while (lottoTaulu.Contains(lisaNumero));

            lottoTaulu[7] = lisaNumero;

            Array.Sort(lottoTaulu, 0, 7);       // Laitetaan varsinaiset numerot suuruusjärjestykseen

            Console.Write("Numerot ja lisänumero:");
            Console.WriteLine(Environment.NewLine);

            for (j = 0; j < lottoTaulu.Length - 1; j++)   // Tulostetaan varsinaiset numerot
            {
                Console.Write(lottoTaulu[j] + " ");
            }

            Console.Write("+ " + lottoTaulu[7]);    // Tulostetaan lisänumero


            Console.Write(Environment.NewLine);
        }
    }
}