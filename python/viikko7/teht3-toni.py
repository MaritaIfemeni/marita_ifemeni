"""
3. Bird has features name and amount of eggs.
Amount of eggs has to be between 1 and 10.
Migratory has special features: there is attribute
named country that is the destination country and month when the migration
mainly occurs.
Country name has to begin with a cap and its length has to be between
5 to 20. Month has to be between 1 and 12.
"""
class Bird:
    def __init__(self, name, egg) -> None:
        self.name = name
        if (egg > 1 and egg < 10):
            self.egg = egg
        else:
            print("Can't init! There should be between 1 and 10 eggs!")
    def set_eggs(self, eggs):
        if (eggs > 1 and eggs < 11):
            self.egg = eggs
        else:
            print("Can't set! There should be between 1 and 10 eggs!")
    def get_eggs(self):
        return self.egg

class Migratory(Bird):
    def __init__(self, name, egg, country, month) -> None:
        super().__init__(name, egg)
        if (country[0].isupper() and len(country) > 4 and len(country) < 21):
            self.country = country
        else:
            self.country = country[0].upper() and len(country) > 4 and len(country) < 21
        self.month = month

    def set_country(self, country):
        self.country = country

    def __str__(self) -> str:
        return f"{self.name} with {self.egg} eggs migrates from {self.country} in {self.month}."

def main():
    bird_one = Bird('Punamulkku', 8)
    try:
        print(f"{bird_one.name} has {bird_one.egg} eggs.")
    except AttributeError:
        pass
    bird_one.set_eggs(5)
    print(bird_one.get_eggs())
    bird_two = Migratory('Talitiainen', 5, 'Finland', 3)
    try:
        print(f"{bird_two.name} with {bird_two.egg} eggs migrates from {bird_two.country} in {bird_two.month}.")
    except AttributeError:
        pass
    bird_two.set_eggs(10)
    print(bird_two.egg)
    bird_two.set_country('Sweden')
    print(bird_two.country)
    bird_one = Migratory('Punamulkku', 8, 'Norway', 5)
    print(bird_one)

if __name__ == '__main__':
    main()