#include<iostream>
using namespace

class Kortti
{
    public:
        int KerroMaa();
        int KerroArvo();
        void AlustaKortti(int maa, int arvo);
        Kortti();
    Private:
        int maa_;
        int arvo_;
};

Kortti::Kortti() : maa_(0), arvo_(0)
{
}

int Kortti::KerroMaa()
{
    return maa_;
}

int Kortti::KerroArvo()
{
    return arvo_;
}

void Kortti::AlustaKortti(int maa, int arvo)
{
    maa_ = maa;
    arvo_ = arvo;
}

class KorttiPakka
{
    public:
        void TulostaKortti(int jnro);
        KorttiPakka();
    private:
        Kortti kortit_[52];
};

KorttiPakka::KorttiPakka()
{
    int k = 0;
    for (int i = 1; i <= 4; i++)
    {
        for (int j = 1; j <= 13; j++)
        {
            kortit_[k].AlustaKortti(i, j);
            k++;
        }
    }
}

void KorttiPakka::TulostaKortti(int jnro)
{
    if (kortit_[jnro].KerroMaa() == 1)
    {
        cout << "Hertta ";
    }
    else if (kortit_[jnro].KerroMaa() == 2)
    {
        cout << "Ruutu ";
    }
     else if (kortit_[jnro].KerroMaa() == 3)
    {
        cout << "Pata ";
    }
     else if (kortit_[jnro].KerroMaa() == 4)
    {
        cout << "Risti ";
    }
    cout << kortit_[jnro].KerroArvo() << endl;
}

int main ()
{
    int jnro;
    KorttiPakka pakka;
    pakka.TulostaKortti(0);
    pakka.TulostaKortti(20);
    pakka.TulostaKortti(27);
    pakka.TulostaKortti(40);
    pakka.TulostaKortti(51);
    return 0;
}
