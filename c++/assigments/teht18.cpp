#include<iostream>
using namespace std;

class Ajoneuvo
{
    public:
        Ajoneuvo(int ajetut, int paino, string merkki, string malli);
    
    protected:
        void Liikuta(int km);
        int PalautaAjetut();
        int PalautaPaino();
        string PalautaMerkki();
        sting PalautaMalli();
    
    private:
        int ajetut_;
        int paino_;
        string merkki_;
        string malli_;
};

Ajoneuvo::Ajoneuvo(int ajetut, int paino, string merkki, string malli): merkki_(merkki), malli_(malli)
{
}

void Ajoneuvo::Liikuta(int km)
{ ajetut_ = ajetut_ + km;}

int Ajoneuvo::PalautaAjetut()
{ return ajetut_;}

string Ajoneuvo::PalautaMerkki()
{ return merkki_;}

string Ajoneuvo::PalautaMalli()
{return malli_;}

class Auto : public Ajoneuvo
{
    public:
        Auto(int ajetut, int paino, string merkki, string malli, string rekisteri_nro, int matkustajat_max);
        void TulostaAutonTiedot();
        void AjaAutoa(int km);
    
    private:
        string rekisteri_nro_;
        int matkustajat_max_;
};

Auto::Auto(int ajetut, int paino, string merkki, string malli, string rekisteri_nro, int matkustajat_max) : Ajoneuvo(ajetut, paino, merkki, malli), rekisteri_nro_(rekisteri_nro), matkustajat_max_(matkustajat_max)
{
    
}

void Auto::AjaAutoa(int km)
{
    Liikuta(km);
    cout << "Autolla ajettu " << km << " kilometriä." << endl << endl; 
}

void Auto::TulostaAutonTiedot()
{
    cout << "Merkki: " << PalautaMerkki() << endl;
    cout << "Malli: " << PalautaMalli() << endl;
    cout << "Paino: " << PalautaPaino() << endl;
    cout << "Ajetut kilometrit: " << PalautaAjetut() << endl;
    cout << "Rekisterinumero: " << rekisteri_nro_ << endl;
    cout << "Maksimi matkustajien määrä: " << matkustajat_max_ << endl << endl;

}

int main()
{
    Auto pirssi (250000, 1700, "Toyota", "Carina II", "TFM-257", 5);
    pirssi.TulostaAutonTiedot();
    pirssi.AjaAutoa(25000);
    pirssi.TulostaAutonTiedot();
    return 0;
}