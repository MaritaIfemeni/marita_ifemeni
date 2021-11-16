#include<iostream>
using namespace std;

class Piste
{
    public:
        Piste();
        void TulostaPiste();
        void AsetaPiste(int x, int y);
    private:
        int x_;
        int y_;
};

void Piste::TulostaPiste()
{
    cout << "Pisteen x-koordinaatti: " << x_ << endl;
    cout << "Pisteen y-koordinaatti: " << y_ << endl;

}

void Piste::AsetaPiste(int x, int y)
{
    x_ = x;
    y_ = y;
}

Piste::Piste() : (x_(1), y_(1)
{

}

int main ()
{
    Piste pisteolio;
    pisteolio.TulostaPiste();
    return 0;
}