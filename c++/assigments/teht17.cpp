#include<iostream>
#include<string>
using namespace std;

class Auto
{
    public:
        void Liikku(int km);
        void KerroAjetutKm();
        Auto(string merkki, int ajatetut_km);
    private:
        string merkki_;
        int ajetut_km_;
};

Auto::Auto(string merkki, int ajatetut_km) : merkki_(merkki), ajetut_km_(ajetut_km)
{

}
void Auto::Liiku(int km)
{
    ajetut_km_ = ajetut_km_ + km;
    cout << "Wrooom..." << km << " kilometriä ajettu." << endl;
}

void Auto::KerroAjetutKm()
{
    cout << merkki_ << " merkkisellä autolla on ajettu " << ajetut_km_ << " km" << endl;
}

class Henkilo
{
    public:
        void AjaAutoa(int ajetut_km);
        void VaihdaAuto(Auto* henk_auto);
        Henkilo(string nimi, Auto* henk_auto);
    private:
        string nimi_;
        Auto* henk_auto_;
};

Henkilo::Henkilo (string nimi, Auto* henk_auto) : nimi_(nimi), henk_auto_(henk_auto)
{

}

void Henkilo::AjaAutoa(int ajetut_km)
{
    henk_auto_->Liiku(ajetut_km);
}

void Henkilo::VaihdaAuto(Auto* henkiloauto)
{
    henk_auto_ = henk_auto;
}

int main ()
{
    Auto* deksteri = new Auto("Toyota Corolla DX", 25000);
    Auto* ferrari = Auto("Ferrari F50", 1500);

    Henkilo* autoilija = new Henkilo("James", deksteri);

    deksteri->KerroAjetutKm();
    autoilija->AjaAutoa(1000);
    deksteri->KerroAjetutKm();

    ferrari->KerroAjetutKm();
    autoilija->VaihdaAuto(ferrari);
    autoilija->AjaAutoa(20000);
    ferrari->KerroAjetutKm();
    return 0;
}