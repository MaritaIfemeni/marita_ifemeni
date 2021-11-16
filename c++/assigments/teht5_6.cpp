#include <iostream>
using namespace std;

class Piste
{
public:
	void AsetaX(int x);
	void AsetaY(int y);
	void Siirra(int x, int y);
	void KerroPaikka();

private:
	int x_;
	int y_;
};

void Piste::AsetaX(int x)
{
	x_ = x;
}

void Piste::AsetaY(int y)
{
	y_ = y;
}

void Piste::Siirra(int x, int y)
{
	x_ += x;
	y_ += y;
}

void Piste::KerroPaikka()
{
	cout << "Pisteen x-koordinaatti: " << x_ << endl;
	cout << "Pisteen y-koordinaatti: " << y_ << endl;
}

int main()
{
	Piste pikseli;
	int x;
	int y;

	cout << "Syötä x-koordinaatti: ";
	cin >> x;

	cout << "Syötä y-koordinaatti: ";
	cin >> y;

	pikseli.AsetaX(x);
	pikseli.AsetaY(y);

	cout << "Pisteolio muodostettu ja koordinaatit asetettu.\n";
	
	pikseli.KerroPaikka();

	return 0;
}