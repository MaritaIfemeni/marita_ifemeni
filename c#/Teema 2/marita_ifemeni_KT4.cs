using System;

namespace Teema2
{
    class MainClass
    {
        /* KT4
        Lue käyttäjältä kaksi kokonaislukua
        sekä operaatio joka lukujen välillä suoritetaan
        (voi olla +, -, * tai / eli kyseessä siis nelilaskin).
        Käytä operaation tallentamiseen string-tyyppistä muuttujaa.
        Tutki switch-case rakenteessa minkä operaation käyttäjä syötti ja
        tulosta sen perusteella lukujen laskutoimitus vastauksineen.
        Jos operaatio oli annettu väärin,
        niin tulosta virheilmoitus. Nollalla jakoa ei saa ohjelmassa tapahtua!
        */

        public static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            int iLuku1, iLuku2;
            char cMerkki;
            int iTulos;

            Console.Write("Syötä ensimmäinen luku: ");
            iLuku1 = int.Parse(Console.ReadLine());

            Console.Write("Syötä toinen luku: ");
            iLuku2 = int.Parse(Console.ReadLine());

            Console.Write("Syötä mitä haluat laskea +, -, / tai *: ");
            cMerkki = char.Parse(Console.ReadLine());


            switch (cMerkki)
            { case '-':
                    iTulos = iLuku1 - iLuku2;
                    Console.WriteLine(iTulos);
                    break;
              case '+':
                    iTulos = iLuku1 + iLuku2;
                    Console.WriteLine(iTulos);
                    break;
              case '*':
                    iTulos = iLuku1 * iLuku2;
                    Console.WriteLine(iTulos);
                    break;
               case '/':
                    if (iLuku1 == 0)
                    {
                        Console.WriteLine("Nollalla jakaminen ei mahdollista!");
                    }
                    else if (iLuku2 == 0)
                    {
                        Console.WriteLine("Nollalla jakaminen ei mahdollista!");
                    }
                    else
                    {
                        iTulos = iLuku1 / iLuku2;
                        Console.WriteLine(iTulos);
                    }
                    break;
                default:
                    Console.WriteLine("Virhe, annoit väärän arvon käyt vain +, -, / tai * merkkejä!");
                    break;
            }

        }

    }
}
 