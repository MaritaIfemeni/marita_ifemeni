using System;


namespace Testing_Area
{
    class Program
    {
        /* KT5
        Luo 7 alkioinen float-taulukko ja lue siihen käyttäjältä arvoja.
        Kun käyttäjä syöttää arvoa taulukkoon, niin ohjelma ei saa kaatua vaan väärä arvo on kysyttävä uudestaan.
        Lajittele taulukko ja tulosta taulukon minimi- ja maksimiarvot. Käytä funktioita:

        LuoTaulukko
        KysyArvotTaulukkoon
        LajitteleTaulukko
        TulostaTiedot*/


        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            float[] taulukko = LuoTaulukko();

            for (int i = 0; i < 7; i++)
            {
                taulukko[i] = KysyArvotTaulukkoon();
            }

            LajitteleTaulukko(taulukko);
            TulostaTiedot(taulukko);
        }

        static float[] LuoTaulukko()
        {
            float[] taulukko = new float[7];
            return taulukko;
        }

        static float KysyArvotTaulukkoon()
        {
            float arvo;
            bool onnistui;

            Console.Write("Anna arvo: ");
            onnistui = float.TryParse(Console.ReadLine(), out arvo);

            while (onnistui == false)   // Antaa virheilmoituksen jos käyttäjä syöttää väärän arvon
            {
                Console.Write("Annoit väärän arvon, anna arvo uudelleen: ");
                onnistui = float.TryParse(Console.ReadLine(), out arvo);
            }
            return arvo;                // Palaa takaisin arvoon
        }


        static void LajitteleTaulukko(float[] aTaulukko)
        {
            Array.Sort(aTaulukko);                  //Järjestää taulukon suuruusjärjestykseen
        }

        static void TulostaTiedot(float[] aTaulukko)
        {
            Console.WriteLine(Environment.NewLine);
            Console.WriteLine("Taulukon minimiarvo: {0}", aTaulukko[0]);    //Tulostaa pienimmän arvon
            Console.WriteLine("Taulukon maksimiarvo: {0}", aTaulukko[6]);   //Tulostaa suurimman arvon
            
        }
    }
}