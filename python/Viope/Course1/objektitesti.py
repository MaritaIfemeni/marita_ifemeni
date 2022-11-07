from dataclasses import dataclass
@dataclass
class Person:
    name: str
    address: str
    birth_year: int

def main ():
    a = Person("minä", "Katu", "liisa")
    print(a.birth_year)
    

if __name__ == "__main__":
    main()

