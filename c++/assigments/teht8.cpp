[10:19] Toni Heinänen
    
#include <iostream>
using namespace std;


class Asiakastili
{
public:
    void LisaaAsiakas(int tilinro, int saldo, string nimi);
    void NaytaTiedot(void);
    void MuutaSaldoa(int saldo);
    int VertaaTiliNro(int tilinro);



private:
    int tilinro_;
    int saldo_;
    string nimi_;
};


void Asiakastili::LisaaAsiakas(int tilinro, int saldo, string nimi)
{
    tilinro_ = tilinro;
    saldo_ = saldo;
    nimi_ = nimi;
}


void Asiakastili::NaytaTiedot(void)
{
    cout << "Tilinumero: " << tilinro_ << endl;
    cout << "Asiakkaan nimi: " << nimi_ << endl;
    cout << "Tilin saldo: " << saldo_ << endl;
}


void Asiakastili::MuutaSaldoa(int saldo)
{
    saldo_ = saldo;
}


int Asiakastili::VertaaTiliNro(int tilinro)
{
    if (tilinro == tilinro_)
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
    int valinta, tilin_nro, uusi_saldo, i = 0;
    bool loytyi;
    
    Asiakastili asiakasrekisteri[5];


    asiakasrekisteri[0].LisaaAsiakas(12345, 312, "Mikko Möttönen");
    asiakasrekisteri[1].LisaaAsiakas(23456, 23, "Anni Manninen");
    asiakasrekisteri[2].LisaaAsiakas(34567, 112, "Simo Siili");
    asiakasrekisteri[3].LisaaAsiakas(45678, 99834, "Riku Rikas");
    asiakasrekisteri[4].LisaaAsiakas(56789, 7500, "Marja Mallikas");


    do
    {
        cout << endl << "1. Näytä asiakkaan tiedot." << endl;
        cout << "2. Muuta asiakkaan saldoa." << endl;
        cout << "Lopetus negatiivisella luvulla." << endl;
        cout << "Valitse toiminto: ";
        cin >> valinta;


        if (valinta == 1)
        {
            cout << "Anna tilinumero: " << endl;
            cin >> tilin_nro;


            for (i = 0; i < 5; i++)
            {
                if (asiakasrekisteri[i].VertaaTiliNro(tilin_nro) == 1)
                {
                    loytyi = 1;
                    asiakasrekisteri[i].NaytaTiedot();
                }
            }


            if (loytyi == 0)
            {
                cout << "Antamaasi tilinumeroa ei löytynyt." << endl;
            }


            loytyi = false;
        }
        else if (valinta == 2)
        {
            cout << "Anna tilinumero: ";
            cin >> tilin_nro;
            cout << "Anna uusi saldo: ";
            cin >> uusi_saldo;


            for (i = 0; i < 5; i++)
            {
                if (asiakasrekisteri[i].VertaaTiliNro(tilin_nro) == 1)
                {
                    loytyi = 1;
                    asiakasrekisteri[i].MuutaSaldoa(uusi_saldo);
                    cout << endl << "Saldo muutettu." << endl;
                }
            }


            if (loytyi == 0)
            {
                cout << endl << "Antamaasi tilinumeroa ei löytynyt." << endl;
            }


            loytyi = 0;
        }
        else
        {
            cout << endl << "Ohjelma lopetetaan.";
        }
    } while (valinta > 0);
}


















