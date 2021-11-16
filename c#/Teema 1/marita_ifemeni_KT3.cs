using System;

namespace Savonia
{
    class MainClass
    {
        public static void Main(string[] args)
        {

            string sSyote;
            int iSumma, iErotus, iTulo, iEkaluku, iTokaluku;

            Console.Write("Anna luku: ");
            sSyote = Console.ReadLine();
            iEkaluku = int.Parse(sSyote);

            Console.Write("Anna toinen luku: ");
            sSyote = Console.ReadLine();
            iTokaluku = int.Parse(sSyote);

            iSumma = iEkaluku + iTokaluku;
            iErotus = iEkaluku - iTokaluku;
            iTulo = iEkaluku * iTokaluku;

            Console.WriteLine("Summa:  "+ iEkaluku + "+" + iTokaluku + "=" + iSumma); // Ohjelma laskee summan
            Console.WriteLine("Erotus: " + iEkaluku + "-" + iTokaluku + "=" + iErotus); // Ohjelma laskee erotuksen
            Console.WriteLine("Tulo:   " + iEkaluku + "*" + iTokaluku + "=" + iTulo); // Ohjelma laskee tulon

        }
    }
}