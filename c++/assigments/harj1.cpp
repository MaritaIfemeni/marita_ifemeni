   #include<iostream>
   using namespace std;

   class Esimerkki
   {
   public:
     void TulostaLuvut();
     Esimerkki();
     Esimerkki(int eka, int toka);
  private:
    int luku1_;
    int luku2_;
  };

  Esimerkki::Esimerkki() : luku1_(100), luku2_(200)
  {
    cout << endl << "Olio alustettu oletusmuodostimella." << endl;
  }

   Esimerkki::Esimerkki(int eka, int toka) : luku1_(eka), luku2_(toka)
  {
    cout << endl << "Olio alustettu saaduilla parametreilla." << endl;
  }

   void Esimerkki::TulostaLuvut()
  {
   cout << "1. jäsenmuuttujan arvo: " << luku1_ << endl;
    cout << "2. jäsenmuuttujan arvo: " << luku2_ << endl;
  }

    int main()
  {
    int ensimmainen, toinen, valinta;

    cout << "Ohjelma muodostaa olioita, joista osa saa antamasi arvot." << endl;
    cout << "Anna ensimmäinen kokonaislukuarvo: " << endl;
    cin >> ensimmainen;
    cout << "Anna toinen kokonaislukuarvo: " << endl;
    cin >> toinen;
    cout << "Muodostetaanko dynaamisen olio? (kyllä>0, ei<=0): " << endl;
    cin >> valinta;



    Esimerkki olio1;

    olio1.TulostaLuvut();

  

    Esimerkki olio2(ensimmainen, toinen);

    olio2.TulostaLuvut();



    if(valinta>0){

      Esimerkki *olio3 = new Esimerkki(ensimmainen, toinen);
      olio3->TulostaLuvut();
      delete olio3;
   }
    return 0;
  }