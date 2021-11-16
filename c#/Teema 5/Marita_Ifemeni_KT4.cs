using System;


namespace Testing_Area
{
    class Program
    {
        /*KT4
        tee ohjelma, joka tulostaa ensin tiedon siitä, kuinka monta parametria Main-funktioon tuli.
        Lisäksi jos ensimmäisen parametri oli "opettaja" niin tulosta "Koita saada oppilaat oppimaan",
        jos se taas oli "opiskelija",
        niin tulosta "koita opiskella ahkerasti". Jos se oli jotain muuta, niin tulosta "en ymmärrä"*/


        static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            Console.WriteLine("Parametrejä tuli {0} kpl", args.Length);

            for (int i = 0; i < args.Length; i++)
            {
                Console.WriteLine(args[i]);
            }

            if (args[0] == "opettaja")
            { 
                Console.WriteLine("Koita saada oppilaat oppimaan!");
                
            }
            else if (args[0] == "opiskelija")
            {
                Console.WriteLine("Koita opiskella ahkerasti!");
            }
            else
            {
                Console.WriteLine("En ymmärrä?");
            }
        }
    }
}