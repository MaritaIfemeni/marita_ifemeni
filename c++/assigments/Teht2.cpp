#include <iostream>

using namespace std;

int suurin(int eka, int toka, int kolmas){

    int luku;

    if (eka >= toka) {
        luku = eka;
    }
    else { 
        luku = toka; 
    }

    if  (luku >= kolmas) {
        return luku;
    }
    else {
        return kolmas;
    }
}

int pienin(int eka, int toka, int kolmas){

    int luku;

    if (eka <= toka) {
        luku = eka;
    }
    else {
        luku = toka;
    }

    if (luku <=kolmas) {
        return luku;
    }
    else {
        return kolmas;
    }
}

int main()
{
  int luku1, luku2, luku3, suurinLuku, pieninLuku;
  cout << "Syötä ensimmäinen kokonaisluku:";
  cin >> luku1;
  cout << "Syötä toinen kokonaisluku:";
  cin >> luku2;
  cout << "Syötä kolmas kokonaisluku:";
  cin >> luku3;
  suurinLuku = suurin(luku1, luku2, luku3);
  pieninLuku = pienin(luku1, luku2, luku3);
  cout << "Syöttämistäsi luvuista suurin oli " << suurinLuku;
  cout << " ja pienin " << pieninLuku << "." << endl;
}

