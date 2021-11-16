using System;
using System.Linq;

namespace testarea
{
    class Program
    {
        /* KT4
         Lotossa arvotaan seitsemän(7) varsinaista numeroa ja yksi(1) lisänumero.Numerot ovat väliltä 1-40.
         Esittele kahdeksan(8) alkioinen lotto-taulukko ja
         arvo siihen lottonumerot(7 ensimmäistä on siis varsinaisia
         lottonumeroita ja viimeinen on lisänumero). Muista, että samaa
         numeroa ei saa tulla lottoriviin eli mieti miten voisit tarkistaa onko
         arvottu numero jo lottorivissä entuudestaan ja silloin sen tilalle pitää arpoa uusi numero.
         Tulosta lopuksi lottorivi seuraavasti:
         1  4  12  16  19  25  31  +  13
         HUOM!! seitsemän varsinaista numeroa on lajiteltu
         suuruusjärjestykseen! Mutta lisänumeroa ei tietenkään saa ottaa lajitteluun mukaan!
         Löytysköhän Array.Sort:sta sellainen ominaisuus, jolla tämän saisi ratkaistua?*/

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            int[] iTable = new int[8];
            Random rng = new Random();
            int iNumber;
            int iExtraNumber;
            int iFirst, iSecond;

            for (iFirst = 0; iFirst < iTable.Length - 1;)   //Varsinaisten numeroiden arvonta
            {
                do
                {
                    iNumber = rng.Next(1, 41);
                }
                while (iTable.Contains(iNumber));

                iTable[iFirst] = iNumber;
                iFirst++;
            }

            do
            {
                iExtraNumber= rng.Next(1, 41);       //Lisänumeron arvonta
            }
            while (iTable.Contains(iExtraNumber));

            iTable[7] = iExtraNumber;

            Array.Sort(iTable, 0, 7);       // Laitetaan varsinaiset numerot suuruusjärjestykseen

            Console.Write("Arvotut lotto numerot ja lisänumero:");
            Console.WriteLine(Environment.NewLine);

            for (iSecond = 0; iSecond < iTable.Length - 1; iSecond++)   // Tulostetaan varsinaiset numerot
            {
                Console.Write(iTable[iSecond] + " ");
            }

            Console.Write("+ " + iTable[7]);    // Tulostetaan lisänumero


            Console.Write(Environment.NewLine);
        }
    }
}