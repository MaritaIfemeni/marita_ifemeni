using System;

namespace Savonia
{
    class MainClass
    {
        public static void Main(string[] args)
        {

            double dPii = 3.14; //dPii niminen douple muuttuja, joka kertoo Piin likiarvon.
            string sAddress = "Vantaan parhaustie 64, 00001 Vantaa"; //sAddress niminen string muuttuja, joka kertoo osoitteen.  
            string sIdnumber = "171717-098A"; //sIsnumber niminen string muuttuja, joka kertoo henilötunnuksen.
            char sLetter = 'M'; // sLetter niminen char muuttuja, joka kertoo etunimen ensimmäisen kirjaimen. 
            float fTempature = 13.5F; // fTempature niminen float muuttuja, joka kertoo tämän hetkisen lämpötilan. 

            Console.Write("\n"); //Tulosta tyhjän rivin.
            Console.WriteLine("{0}\n{1}\n{2}", dPii, sAddress, sIdnumber); // Tulostaa muuttujat annetun järjestyksen mukaan omille riveille. 
            Console.WriteLine(sLetter); //Tulostaa muuttujan omalle riville.
            Console.WriteLine(fTempature); //Tulostaa muuttujan omalle riville. 

        }
    }
}