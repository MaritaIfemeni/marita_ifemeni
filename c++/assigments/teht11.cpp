#include<iostream>
using namespace std;

class Esimerkki
{
public:
  Esimerkki();
  ~Esimerkki();

private:
  int jasen_;
};

Esimerkki::Esimerkki() : jasen_(100)
{
  cout << "Olion jäsenmuuttuja alustettu arvolla 100." << endl;
}

Esimerkki::~Esimerkki()
{
  cout << "Olio hävitetty ja jäsenmuuttujan tila vapautettu." << endl;
}

int main()
{
  Esimerkki* olio = new Esimerkki;
  delete olio;
  return 0;
}