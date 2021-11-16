using System;

namespace Savonia
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            string sNimi;
            float fPituus;
            float fPaino;
            float fBMI;

            Console.Write("Kirjoita nimesi: ");     // Ojeistus käyttäjälle mitä tehdä.
            sNimi = Console.ReadLine();             

            Console.Write("Anna pituutesi metreinä: "); // Ojeistus käyttäjälle mitä tehdä.
            fPituus = float.Parse(Console.ReadLine());  // Muunnetaan parsella syötetty arvo floatiksi

            Console.Write("Anna painosi kilogrammoina: "); // Ojeistus käyttäjälle mitä tehdä.
            fPaino = float.Parse(Console.ReadLine());   // Muunnetaan parsella syötetty arvo floatiksi

            fBMI = fPaino / (float)Math.Pow(fPituus, 2);        // Lasketana painoindeksi.

            Console.Clear();

            Console.WriteLine(sNimi + ", pituutesi on " + fPituus + " m ja painosi " + fPaino + " kg"); // Tulostetaan syötettyt arvot
            Console.WriteLine("Painoindeksisi on siten: {0:f2}", fBMI); // Tulsotetaan henkilön painoindeksi


        }
        
    }
}