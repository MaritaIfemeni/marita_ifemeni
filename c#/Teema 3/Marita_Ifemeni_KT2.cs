using System;

namespace Teema3uusi
{
    class MainClass
    {
        public static void Main(string[] args)

        /* KT2
        Esittele kaksi laskurimuuttujaa ja tulosta niiden avulla for-silmukassa:
        11       10
        12        9
        13        8...
        19        2
        20        1
        Eli toinen arvo toisesta muuttujasta ja toinen toisesta*/
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            int iEka;
            int iToka;

            for (iEka = 11, iToka = 10; iEka < 21 && iToka > 0; iEka++, iToka--)
            {
                Console.WriteLine("{0}\t{1}", iEka, iToka);
            }
        }
    }
}