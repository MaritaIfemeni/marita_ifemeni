using System;

namespace Teema2
{
    class MainClass
    {
        /* KT5
        Lue käyttäjältä ympyrän säde liukulukuna. Kysy käyttäjältä myös,
        haluaako hän tehdä kumpaa seuraavista (eli käyttäjä syöttää joko numeron 1 tai 2) :

        1 = laske ympyrän piiri
        2 = laske ympyrän pinta-ala

        Tämän vastauksen perusteella laske
        tulos-muuttujaan joko piiri tai pinta-ala ja tulosta se.
        Toteuta tämä sekä if-rakenteella että ehdollisella operaattorilla
        */

        public static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            double dPii = 3.141592;
            double dHalkaisia, dPintaa, dPiiri, dSade;
            int iValinta;
           
            Console.Write("Anna ympyrän säde: ");
            dSade = double.Parse(Console.ReadLine());

            Console.WriteLine("Kerro mitä halaut laskea:");
            Console.WriteLine("1 = laske ympyrän piiri");
            Console.WriteLine("2 = laske ympyrän pinta-ala");
            Console.WriteLine("Syötä valinta: ");
            iValinta = int.Parse(Console.ReadLine());


            dHalkaisia = dSade + dSade;
            dPintaa = dPii * (dSade * dSade);
            dPiiri = dPii * dHalkaisia;


            if (iValinta == 1)
            {
                Console.WriteLine("Ympyrän piiri on: " + dPiiri);
            }    
            else if (iValinta == 2)
            { 
                Console.WriteLine("Ympyrän pinta-ala on: " + dPintaa);
            }

        }

    }
}
 