#include<iostream>
using namespace std;

class Piste
{
    public:
        Piste(int x, int y);
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

Piste::Piste(int x, int y) : x_(x), y_(y)
{
    
}

int main ()
{
    int x, y;

    cout << "Anna muodotettavan olion x-koordinaatti: ";
    cin >> x;
    cout << "Anna muodostetavan olion y-koordinaatti: ";
    cin >> y;
    Piste pisteolio(x, y);
    pisteolio.TulostaPiste();
    return 0;
}