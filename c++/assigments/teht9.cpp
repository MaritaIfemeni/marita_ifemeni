#include<iostream>
using namespace std;

void muuta_lukua(int&);

void muuta_lukua(int& osoite)
{
    int uusiLuku;
    cout << "Anna korvaava luku: ";
    cin >> uusiLuku;
    osoite = uusiLuku;
}

int main ()
{
    int luku = 2;
    cout << "Luku ohjelman alussa: " <<luku << endl;
    muuta_lukua(luku);
    cout << "Luku ohjelman lopussa: " << luku << endl;
    return 0;
}