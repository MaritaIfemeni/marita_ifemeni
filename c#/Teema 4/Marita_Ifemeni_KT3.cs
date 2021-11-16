using System;


namespace Testing_Area
{
    class Program
    {
        /*KT3
    Lue käyttäjältä pitkähkö teksti string muuttujaan.
    Muuta kaikki kirjaimet isoiksi kirjaimiksi ja tulosta muutettu teksti.
    Korvaa kaikki isot A kirjaimet huutomerkillä ja tulosta teksti.
    Poista kaikki välilyönnit ja tulosta teksti. Tulosta lopuksi kaikki
    merkit lopusta alkuun yhdellä välilyönnillä eroteltuna*/

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            string sText;
            int iTextLength;

            Console.Write("Kirjoita tekstiä: ");

            sText = Console.ReadLine();
            sText = sText.ToUpper();        //Muutetaan teksti isoiksi kirjaimiksi

            Console.WriteLine("\nSyöttämäsi teksti isoilla kirjaimilla näyttää tältä: " + sText);

            sText = sText.Replace("A", "!"); //Isot A kirjaimet muutetaan huutomerkeiksi

            Console.WriteLine("\n Kaikki isot A kirjaimet muutettu tekstissä huutomerkeiksi: " + sText);

            sText = sText.Replace(" ", ""); //Poistetaan välilyönnit tekstistä

            Console.WriteLine("\nVÄlilyönnit poistettuna teksti näyttää tältä: " + sText);

            iTextLength = sText.Length;

            for (int i = 1; i < iTextLength; i += 2)
            {
                sText = sText.Insert(i, " "); // Lisätään välit joka kirjaimen väliin
                iTextLength = sText.Length;  // Tekstin pituus lisääntyy välien mukaan
            }

            Console.WriteLine("\nKirjoittamasi tekstin kaikki kirjaimet eroteltuina: " + sText);
        }
    }
}
