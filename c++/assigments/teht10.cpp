#include<iostream>
using namespace std;

class Piste
{
    public:
        void TuolostaPiste();
        void AsetaPiste(int x, int y);
    private:
        int x_;
        int y_;
};

void Piste::TuolostaPiste()
{
    cout << "Pisteen x-koordinaatti: " << x_ << endl;
    cout << "Pisteen y-koordinaatti: " << y_ << endl;
}

void Piste::AsetaPiste(int x, int y)
{
    x_ = x;
    y_ = y;
}

Piste* uusi_piste();

int main ()
{
    Piste* pisteolio;
    pisteolio = uusi_piste();
    pisteolio->TuolostaPiste();
    delete pisteolio;

    return 0;
}

Piste* uusi_piste()
{
    int x, y;
    Piste* uusi_pisteOlio = new Piste;
    cout << "Anna uuden pisteen x: ";
    cin >> x;
    cout << "Anna uuden pisteen y: ";
    cin >> y;

    uusi_pisteOlio->AsetaPiste(x, y);
    return uusi_pisteOlio;
}