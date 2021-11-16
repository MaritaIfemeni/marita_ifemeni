#include <iostream>
using namespace std;

int main () {

    int iLuku;

	cout << "Anna kokonaisluku:";
    cin >> iLuku; 
	if (iLuku > 0) 
	{
  		for (int i = 1; i <= iLuku; i++)
    	{
        	cout << i << endl;
    	}
	}
}	