#include <iostream>
#include <cmath>
using namespace std;

double dCalculator(int eka, int toka) 
{
    double dHyp = sqrt(pow(eka, 2) + pow(toka, 2));
    return dHyp;
}

int main()
{

    int iKateettiYksi, iKateettiKaksi;
    double dHypotenuusa;

    cout << "Anna ensimmäinen kateetti:";
    cin >> iKateettiYksi;

    cout << "Anna toinen kateetti:";
    cin >> iKateettiKaksi;

    dHypotenuusa = dCalculator(iKateettiYksi, iKateettiKaksi);

    cout <<"Hypotenuusan pituus: " << dHypotenuusa;

}

    
