using System;
using System.IO;

namespace Testing_Area
{
    class Program
    {
/*
        KT1

    Luo C:\temp hakemiston alle for-silmukassa hakemistot
    hakemisto1
    hakemisto2
    ....
    hakemisto10
    sen jälkeen hae string-taulukkoon kaikki c:\temp:ssä olevat
    hakemistot ja jossakin silmukassa tuhoa ne.*/



        static void Main(string[] args)
        {
            // Annetaan DirectoryInfolle polku
            DirectoryInfo drInfo = new DirectoryInfo("/Users/maritaifemeni/temp");

            // Luodaan temp kansio (ellei jo ole olemassa)
            if (drInfo.Exists != true)
            {
                drInfo.Create();
            }

            // Luodaan "hakemisto0-10" -kansiot
            for (int i = 1; i < 11; i++)
            {
                string j = "hakemisto";
                j += Convert.ToString(i);
                drInfo.CreateSubdirectory(j);
            }

            // Haetaan luodut hakemistot taulukkoon
            string[] hakemistot = Directory.GetDirectories("/Users/maritaifemeni/temp");

            // Tulostaa temp -kansion sisältö taulukosta
            foreach (string hakemisto in hakemistot)
            {
                Console.WriteLine(hakemisto);
            }
            
            // Poistaa kaikki kansiot tempin alta
            foreach (DirectoryInfo dir in drInfo.GetDirectories())
            {
                dir.Delete(true);
            }
        }
    }
}