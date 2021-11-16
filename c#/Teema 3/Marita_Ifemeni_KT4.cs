using System;

namespace Teema3uusi
{
    class MainClass
    {
        public static void Main(string[] args)
        /*KT4
        Kysy käyttäjältä mistä luvusta tulostetaan ja mihin asti
        ja millaisella askelluksella. HUOM! Mistä on oltava pienempi kuin
        mihin ja askelluksen oltava suurempi kuin 0. Muuten kysyttävä tiedot uudestaan.
        Tulosta lukusarjat sekä while-, do-while- että for-silmukoilla. 
        Esimerkki:
        Jos mistä on 5, mihin on 11 ja askellus on 2, niin ohjelma
        tulosta kaikilla 3 silmukalla lukusarjan (voi tulostaa myös allekkain...)
        5   7   9   11 */

        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            int iFrom = 0;
            int iWhere = 0;
            int iSteps = 0;

            Console.WriteLine("Tämä ohjelma tulostaa askeleet vaitsemastasi luvusta toiseen valitsemaasi lukuun valitsemallasi välityksellä");
            Console.Write("Mistä luvusta laskeminen aloitetaan: ");
            iFrom = int.Parse(Console.ReadLine());  //Luetaan aloitus luku

            Console.Write("Mihin lukuun laskeminen lopetetaan: ");
            iWhere = int.Parse(Console.ReadLine());  //Luetaan lopetus luku

            Console.Write("Millä askelluksella lasketaan: ");
            iSteps = int.Parse(Console.ReadLine());  //Luetaan välitys

            while (iFrom <= iWhere)         
            {
                Console.WriteLine("{0}", iFrom);
                iFrom += iSteps;
            }

            Console.WriteLine();

            iFrom = 0;

            do
            {
                Console.WriteLine("{0}", iFrom);
                iFrom += iSteps;
            }
            while (iFrom <= iWhere);

            Console.WriteLine();

            for (iFrom = 0; iFrom <= iWhere; iFrom += iSteps)
            {
                Console.WriteLine("{0}", iFrom);
            }
        }
    }
}