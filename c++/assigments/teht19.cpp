#include<iostream>
using namespace std;

class Kuvio
{
    public:
        Kuvio(char tekstuuri);
        char PalautaTekstuuri();
        virtual void Piirra() = 0;
    private:
        char tekstuuri_;
};

Kuvio::Kuvio(char tekstuuri) : tekstuuri_(tekstuuri)
{
}

char Kuvio::PalautaTekstuuri()
{
    return tekstuuri_;
}


class Nelio : public Kuvio
{
    public:
        Nelio(char tekstuuri, int sivun_pituus);
        void Piirra();
    private:
        int sivun_pituus_;
};

Nelio::Nelio(char tekstuuri, int sivun_pituus) : Kuvio(tekstuuri), sivun_pituus_(sivun_pituus)
{

}
void Nelio::Piirra()
{
  int i, j;
  for(i=0; i<sivun_pituus_; i++)
  {
    for(j=0; j<sivun_pituus_; j++)
    {
      if(j==sivun_pituus_ - 1){
        cout << PalautaTekstuuri() << endl;
      }
      else{
        cout << PalautaTekstuuri();
      }
    }
  }
}

int main()
{
  int sivun_pituus;
  char tekstuuri;
  cout << "Anna muodostettavan neliön sivun pituus: ";
  cin >> sivun_pituus;
  cout << "Syötä merkki, jota käytetään neliön tekstuurina: ";
  cin >> tekstuuri;
  Kuvio* nelio = new Nelio(tekstuuri, sivun_pituus);
  nelio->Piirra();
  delete nelio;
  return 0;
}
