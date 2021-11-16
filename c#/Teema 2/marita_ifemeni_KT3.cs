using System;

namespace Teema2
{
    class MainClass
    {
        /* KT2
        Tee ohjelma, joka pyytää käyttäjää syöttämään lampotila -nimiseen muuttujaan
        jonkin mielivaltainen lämpötilan arvon (mieti tyyppi tarkasti kun ensin katsot alla olevaa...).

        Ohjelma tulostaa sitten seuraavasti, kun lämpötila on:
        > 39 tulostuu : Liian kuuma
        11..39 tulostuu : Lämmintä
        0..10 tulostuu : Haaleaa
        -30..-1 tulostuu : Pakkasta
        < -30 tulostuu : Liian kylmää
        */

        public static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            sbyte sLampotila;
            Console.Write("Syötä lämpötila: ");
            sLampotila = sbyte.Parse(Console.ReadLine());

            if (sLampotila >= 40)
            {
                Console.WriteLine("Liian kuuma.");
            }

            else if (sLampotila >= 12)
            {
                Console.WriteLine("Lämmintä.");
            }

            else if (sLampotila >= 0)
            {
                Console.WriteLine("Haaleaa.");

            }
            else if (sLampotila >= -30)
            {
                Console.WriteLine("Pakkasta.");
            }

            else if (sLampotila <= -31)
            {
                Console.WriteLine("Liian kylmä");
            }
        }

    }
}
 