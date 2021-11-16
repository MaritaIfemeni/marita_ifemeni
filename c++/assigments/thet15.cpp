#include<iostream>
using namespace std;

class Pelaaja 
{
    public:
    void AsetaNimi(string nimi);
    string KerroNimi();
    void AsetaRooli(string rooli);
    string KerroRooli();
    void AsetaNro(int pelinro);
    int KerroNro();

private:
    string rooli_;
    string nimi_;
    int pelinro_;
};

void Pelaaja::AsetaNimi(string nimi)
{
    nimi_ = nimi;
}

string Pelaaja::KerroNimi()
{
    return nimi_;
}

void Pelaaja::AsetaRooli(string rooli)
{
    rooli_ = rooli;
}

string Pelaaja::KerroRooli()
{
    return rooli_;
}

void Pelaaja::AsetaNro(int pelinro)
{
    pelinro_ = pelinro;
}

int pelaaja::KerroNro()
{
    return pelinro_;
}