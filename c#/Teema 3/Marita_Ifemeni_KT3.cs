using System;

namespace Teema3uusi
{
    class MainClass
    {
        public static void Main(string[] args)
/*KT3
Laita vakioon ARVATTAVA_LUKU joku arvo väliltä 1-500. Tee ohjelma, joka pyytää arvaamaan
lukua.Jos käyttäjä syötti isomman luvun kuin vakiossa, niin tulosta : ”Annoit liian ison luvun”.
Jos taas käyttäjän syöttämä luku oli pienempi kuin vakion luku niin tulosta :
”Annoit liian pienen luvun”.
Kun käyttäjä arvaa luvun oikein niin tulosta :
”Oikein, arvasit luvun 27 kerralla!”. Missä siis arvo 27 kertoo montako kierrosta
meni ennen kuin käyttäjä arvasi oikein*/
       
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            const int ARVATTAVA_LUKU = 500;
            int iArvaus = 0;
            int iLuku = 0;

            Console.Write("Anna luku 1-1000 välillä: ");
            iArvaus = int.Parse(Console.ReadLine());

            while (iArvaus != ARVATTAVA_LUKU)
            {
                if (iArvaus > ARVATTAVA_LUKU)
                {
                    Console.Write("Annoit liian ison luvun, yritä uudelleen: ");
                    iArvaus = int.Parse(Console.ReadLine());
                }
                else if (iArvaus < ARVATTAVA_LUKU)
                {
                    Console.Write("Annoit liian pienen luvun, yritä uudelleen: ");
                    iArvaus = int.Parse(Console.ReadLine());
                }
                iLuku++;   //Laskee arvauksien määrän

            iLuku++;
            Console.WriteLine("Arvasit oikein {0} yrityksellä", iLuku);
            
        }
    }
}