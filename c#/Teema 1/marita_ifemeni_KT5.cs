using System;

namespace Savonia
{
    class MainClass
    {
        public static void Main(string[] args)
        {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            double dPii = 3.141592;
            double dHalkaisia, dPintaa, dPiiri, dSade;

            Console.Write("Anna ympyrän halkaisija: ");
            dHalkaisia = double.Parse(Console.ReadLine());


            dSade = dHalkaisia / 2;
            dPintaa = dPii * (dSade*dSade);
            dPiiri = dPii * dHalkaisia;

            Console.WriteLine("Ympyrän pinta-ala on: " + dPintaa);
            Console.WriteLine("Ympyrän piiri on :" + dPiiri);

        }
        
    }
}