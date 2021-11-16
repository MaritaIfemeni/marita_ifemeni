using System;


namespace Testing_Area
{
    class Program
    {
        /*KT5
        Esittele sellainen 2-ulottoinen taulukko, johon voit tallentaa maanantain
        ja perjantain välisenä aikana neljä mittaustulosta jokaiselta päivältä
        (mittaustulos on sademäärä milleinä). Lue käyttäjältä nämä mittaustulokset
        taulukkoon ja tulosta lopuksi jokaisen päivän mittaustulosten keskiarvo seuraavan esimerkin mukaisesti :
        Maanantai   : 12.0 mm
        Tiistai     : 0.0 mm
        Keskiviikko : 1.9 mm
        Torstai     : 22.8 mm
        Perjantai   : 0.9 mm */

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            float[,] fTable = new float[5, 5]; // Luodaan oma float taulukko, johon tallennetaan sademäärät ja keskiarvot
            string[] sDays = { "maanantai", "tiistai", "keskiviikko", "torstai", "perjantai" }; // Oma string taulukko viikonpäiville
            float fAverage; // Keskiarvomuuttuja
            int iFirst, iSecond, iTableSize; // Laskurit ja muuttuja taulukon koon tallentamiseen

            for (iFirst = 0; iFirst < fTable.GetLength(0); iFirst++)
            {
                Console.WriteLine("\n" + sDays[iFirst] + "\n");

                for (iSecond = 0; iSecond < fTable.GetLength(1) - 1; iSecond++)
                {
                    Console.Write("Syötä sademäärä milleinä: ");  //Pyydetään käyttäjältä sademäärät milleinä
                    fTable[iFirst, iSecond] = float.Parse(Console.ReadLine());
                }
            }

            iTableSize = fTable.GetLength(1) - 1; // Tallennetaan taulukon koko poislukien keskiarvo


            for (iFirst = 0; iFirst < fTable.GetLength(0); iFirst++)  // Lasketaan keskiarvot ja tallennetaan ne omiin alkioihinsa
            {
                fAverage = (fTable[iFirst, 0] + fTable[iFirst, 1] + fTable[iFirst, 2] + fTable[iFirst, 3]) / iTableSize;
                fTable[iFirst, 4] = fAverage;
            }

            Console.WriteLine();

            for (iFirst = 0; iFirst < sDays.Length; iFirst++)       // Tulostetaan tulokset
            {
                Console.WriteLine(sDays[iFirst] + "n keskiarvo: " + fTable[iFirst, 4] + "mm");
            }

            Console.Write(Environment.NewLine);
        }
    }
}