using System;

namespace Teema2
{
    class MainClass
    {
        /* KT1
        Lue käyttäjältä koenumero 4-10 väliltä. Jos käyttäjä syötti arvosanan väärin,
        niin tulosta "et antanut arvosanaa annetulta väliltä". Muussa tapauksessa tulosta:
        hyvä, jos arvosana oli 9 tai 10
        kelpo, jos 7-8
        tyydyttävä 5-6
        heikko 4
        Totetuta ohjelma if-rakenteella.
        */

        public static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            int iKoenumero;
            Console.Write("Anna koenumerosi välillä 4-10: ");
            iKoenumero = int.Parse(Console.ReadLine());

          
            if (iKoenumero == 9 || iKoenumero == 10)
            {
                Console.WriteLine("Hyvä!");
            }

            else if (iKoenumero == 7 || iKoenumero == 8)
            {
                Console.WriteLine("Kelpo!");
            }

            else if (iKoenumero == 5 || iKoenumero == 6)
            {
                Console.WriteLine("Tyydyttävä!");
            }

            else if (iKoenumero == 4)
            {
                Console.WriteLine("Heikko!");
            }

            else
            {
                Console.WriteLine("Et antanut arvosanaa väliltä 4-10!");
            }
        }
    }
}
 