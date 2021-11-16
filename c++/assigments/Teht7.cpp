#include<iostream>
using namespace std;

class Asiakastili
{
public: 
    void LisaaAsiakas(int tilinumero, int saldo, string asiakas); 
    void NaytaTiedot(void);
    void MuutaSaldoa(int saldo);
    int VertaaTiliNro(int tilinumero);
 
private:
    int tilinumero_;
    int saldo_;
    string asiakas_;
};

void Asiakastili::LisaaAsiakas(int tilinumero, int saldo, string asiakas) 
{
    tilinumero_ = tilinumero;
    saldo_ = saldo;
    asiakas_ = asiakas;
}

void Asiakastili::NaytaTiedot(void)
{
    cout << "Tilinumero: " << tilinumero_ << endl;
    cout << "Asiakaan nimi: " <<asiakas_ << endl;
    cout << "Tilin saldo: " << saldo_ << endl;
}

void Asiakastili::MuutaSaldoa(int saldo) 
{
    saldo_ = saldo;
}

void Asiakastili::VertaaTiliNro(int tilinumero)
{
    if (tilinumero == tilinumero_) 
    {
        return 1;
    }
    else 
    {
        return 0;
    }
}

int main()
{

  int valinta, tilin_nro, uusi_saldo, i, loytyi = 0;
  Asiakastili asiakasrekisteri[5];

  asiakasrekisteri[0].LisaaAsiakas(12345, 312, "Mikko Möttönen");
  asiakasrekisteri[1].LisaaAsiakas(23456, 23, "Anni Manninen");
  asiakasrekisteri[2].LisaaAsiakas(34567, 112, "Simo Siili");
  asiakasrekisteri[3].LisaaAsiakas(45678, 99834, "Riku Rikas");
  asiakasrekisteri[4].LisaaAsiakas(56789, 7500, "Marja Mallikas");

  do
  {
  cout << endl << "1: Näytä asiakkaan tiedot." << endl;
  cout << "2: Muuta asiakkaan saldoa." << endl;
  cout << "Lopetus negatiivisella luvulla." << endl;
  cout << "Valitse toiminto: ";
      cin >> valinta;

   if(valinta == 1)
   {
      cout << "Anna tilinumero: "  << endl;
       cin >> tilin_nro;
     {
    if(asiakasrekisteri[i].VertaaTiliNro(tilin_nro)==1)
       {
            loytyi = 1;
         asiakasrekisteri[i].NaytaTiedot();
}
     }
          if(loytyi == 0)
          {

         cout << "Antamaasi tilinumeroa ei löytynyt." << endl;

          }
          loytyi = 0;

      }

      else if(valinta == 2)
      {
    cout << "Anna tilinumero: ";
    cin >> tilin_nro;
    Position: Ln 6 Ch 1