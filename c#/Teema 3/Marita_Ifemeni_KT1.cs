using System;

namespace Teema3uusi
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            int i = 0;
            int iLuku = 0;
            int iLaskin = 0;

            while (i != -1)
            {
                Console.Write("Syötä numeroita, niin lasketaan niiden keskiarvo. Syötä -1 kun haluat laskea: ");
                i = Convert.ToInt32(Console.ReadLine());
                iLaskin++;      // Laskee kuinka monta lukua
                iLuku += i;     // Laskee yhteen lukujen summan

            }

            iLaskin--;  //Vähentää laskurista yhden
            iLuku += 1;  //Korvaa syötetyn -1

            Console.WriteLine("Keskiarvo on: " + (iLuku/iLaskin));
        }
    }
}
