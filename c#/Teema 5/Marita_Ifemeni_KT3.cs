using System;


namespace Testing_Area
{
    class Program
    {
        /*KT3
        Tee ohjelma, joka laskee mäkihyppääjän yhden kierroksen suorituspisteet.
        Ohjelma kysyy hypyn pituuden (liukuluku 0.5 metrin välein) sekä
        viiden arvostelutuomarin tyylipisteet (0-20 välillä 0.5 välein eli esim. 16.5 tai 17.0 tai 18.5).
        Hyppääjän pisteet muodostuvat kaavasta.
        pisteet = (hypyn pituus - kriittinen piste) * 1.8 + kolmen keskimmäisen tuomarin tyylipisteet + 60. 
        Tyylipisteissä siis parhain ja huonoin pistemäärä tipahtaa pois.
        Ohjelman hyppyrimäen kriittinen piste on 90 metrin kohdalla.
        Laita kriittinen piste vakioon KR_PISTE. Tulosta lopuksi hypyn pituus ja hypyn pisteet.
        Käytä ohjelmassa funktioita (funktiot eivät saa palauttaa mitään):


        KysyHypynPituus
        KysyTuomareidenPisteet
        LaskeHypynPisteet
        Tulosta*/


        static void KysyHypynPituus(out float aPituus)
        {
            Console.Write("Mikä oli hypyn pituus: ");
            aPituus = float.Parse(Console.ReadLine());
        }

        static void KysyTuomareidenPisteet(out float aPisteet)
        {
            float[] taulukko = new float[5];

            for (int iLaskuri = 0; iLaskuri < 5; iLaskuri++)
            {
                Console.Write("Anna tyyli pisteet 0-20 välillä 0.5 pisteen välein. " + iLaskuri + " Tuomarin pisteet: ");
                taulukko[iLaskuri] = float.Parse(Console.ReadLine());
           
            }
            Array.Sort(taulukko);
            taulukko[0] = 0;
            taulukko[4] = 0;

            aPisteet = taulukko[1] + taulukko[2] + taulukko[3];
        }

        static void LaskeHypynPisteet(ref float aPituus, ref float aPisteet, out float aTulos)
        {
            const int KR_PISTE = 90;

            aTulos = (float)((aPituus - KR_PISTE) * 1.8) + aPisteet + 60;
        }

        static void Tulosta(ref float aPituus, ref float aTulos)
        {
            Console.Write("Hypyn pituus: " + aPituus + "m ja pisteet: " + aTulos);
        }

        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            float fPituus;
            float fPisteet;
            float fTulos;

            KysyHypynPituus(out fPituus);
            KysyTuomareidenPisteet(out fPisteet);
            LaskeHypynPisteet(ref fPituus, ref fPisteet, out fTulos);
            Tulosta(ref fPituus, ref fTulos);


        }
    }
}
