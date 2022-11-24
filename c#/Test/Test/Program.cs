using System;

namespace Test
{
    class Program
    {
        static void TestMethod() {
            Console.OutputEncoding = System.Text.UTF8Encoding.UTF8;
            Console.InputEncoding = System.Text.UTF8Encoding.UTF8;

            int iKoenumero;
            Console.WriteLine("Trying to remember dow do you write C#?");
            Console.Write("Anna koenumerosi välillä 4-10: ");
            iKoenumero = int.Parse(Console.ReadLine());

          
            if (iKoenumero == 9 || iKoenumero == 10)
            {
                Console.WriteLine("Hyvä!");
            }

            else if (iKoenumero == 7 || iKoenumero == 8)
            {
                Console.WriteLine("Kelpo!");
            }

            else if (iKoenumero == 5 || iKoenumero == 6)
            {
                Console.WriteLine("Tyydyttävä!");
            }

            else if (iKoenumero == 4)
            {
                Console.WriteLine("Heikko!");
            }

            else
            {
                Console.WriteLine("Et antanut arvosanaa väliltä 4-10!");
            }

            

        }
        static void Main(string[] args)
        {
            
            TestMethod();
        }
    }
}
