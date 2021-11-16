using System;

namespace Savonia
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            string sNimi, sSukunimi;

            Console.Write("Anna etunimi: "); //Ohjeistus käyttäjälle mitä tehdä
            sNimi = Console.ReadLine();

            Console.Write("Anna sukunimi: "); // Ohjeistus käyttäjälle mitä tehdä
            sSukunimi = Console.ReadLine();

            string sKokonimi = sNimi + " " + sSukunimi; // Yhdistetään etunimi ja sukunimi yhdeksi muuttujaksi

            Console.Clear(); // Tyhjennetään näyttö

            Console.WriteLine("Nimesi on {0} ", sKokonimi); // Ohjelma tulostaa syötetyn nimen.



        }
    }
}