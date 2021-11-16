using System;

namespace Teema2
{
    class MainClass
    {
        /* KT2
        Kysy käyttäjältä kuukauden numero.
        Tulosta sen jälkeen onko nyt syksy, talvi, kevät vai kesä. Käytä switch-case rakennetta
        */

        public static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;


            int iKuukausi;
            Console.WriteLine("Syötä kuukauden numero: ");
            iKuukausi = int.Parse(Console.ReadLine());

            switch (iKuukausi)
            {
                case 1:
                case 2:
                case 12:
                    Console.WriteLine("Talvi.");
                    break;
          
                case 3:
                case 4:
                case 5:
                    Console.WriteLine("Kevät.");
                break;

                case 6:
                case 7:
                case 8:
                    Console.WriteLine("Kesä.");
                    break;

                case 9:
                case 10:
                case 11:
                    Console.WriteLine("Syksy.");
                    break;
            }

        }
    }
}
 