using System;

namespace Teema3uusi
{
    class MainClass
    {
        public static void Main(string[] args)
        /*KT5
        Lue käyttäjältä merkkejä, kunnes käyttäjä painaa
        enteriä. Isot kirjaimet tulostuvat pienenä ja pienet kirjaimet
        tulostuvat isona. Muut merkit eivät tulostu. Riittää, että toimii
        kirjaimilla väliltä a-z ja A-Z.
        1 TAPA: merkillä on ASCII arvo, johon lisäämällä tai josta
        vähentämällä saadaan näppärästi isosta kirjaimesta pieni ja pienestä iso
        2 TAPA: Tutki materiaalista sivulta 123, miten char-funktioita käytetään ja
        tee tehtävä niiden avulla*/

        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            char cMerkki;
            string sMerkit = null;


            Console.Write("Syötä merkkejä: ");
            cMerkki = Console.ReadKey(true).KeyChar;

            //Tapa 2

            while (cMerkki != '\n')
            {
                if (char.IsNumber(cMerkki) == true)
                { }
                
                else if (char.IsUpper(cMerkki) == true)
                {
                    cMerkki = char.ToLower(cMerkki);
                    sMerkit += cMerkki;
                }
                else if (char.IsLower(cMerkki)== true)
                {
                    cMerkki = char.ToUpper(cMerkki);
                    sMerkit += cMerkki;
                }

                cMerkki = Console.ReadKey(true).KeyChar;
            }
            Console.Write("\nSyötit seuraavat merkit: {0}\n", sMerkit);

            //Tapa 1

            cMerkki= '0';
            sMerkit = null;


            Console.Write("Syötä merkkejä: ");
            cMerkki = Console.ReadKey(true).KeyChar;


            while (cMerkki != '\n')
            {
                if (char.IsNumber(cMerkki) == true)
                { }

                else if (char.IsUpper(cMerkki) == true)
                {
                    cMerkki = cMerkki += (char)32;
                    sMerkit += cMerkki;
                }
                else if (char.IsLower(cMerkki) == true)
                {
                    cMerkki = cMerkki -= (char)32;
                    sMerkit += cMerkki;
                }

                cMerkki = Console.ReadKey(true).KeyChar;
            }
            Console.Write("\nSyötit seuraavat merkit: {0}", sMerkit);
        }
    }
}
