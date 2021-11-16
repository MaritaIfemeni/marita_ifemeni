"""3. Bird has features name and amount of eggs.  
Amount of eggs has to be between 1 and 10.
Migratory has special features: there is attribute 
named country that is the destination country and month when the migration 
mainly occurs.

Country name has to begin with a cap and its length has to be between
5 to 20. Month has to be between 1 and 12.
"""


class Bird:
    def __init__(self, name , egg) -> None:
        self.name = name
        if (egg > 0 and egg < 11):
            self.egg = egg
        else:
            print("Eggs can only be between 1 and 10!")

    def set_egg(self, egg):
        if (egg > 0 and egg < 11):
            self.egg = egg
        else:
            print("Eggs can only be between 1 and 10!")

    def get_eggs(self):
        return self.egg

class Migratory(Bird):
    def __init__(self, name, egg, country, month) -> None:
        super().__init__(name, egg)
        if (country[0].isupper() and len(country) > 4 and len(country) < 21):
            self.country = country
        elif (country[0].lower() and len(country) > 4 and len(country) < 21):
            self.country = country.capitalize()
        else: 
            print("Invalid country input")
        
        if month > 0 and  month < 13:
            self.month = month
        else:
            print("Write walid month number between 1-12!")

    def set_country(self, country):
        if (country[0].isupper() and len(country) > 4 and len(country) < 21):
            self.country = country
        elif (country[0].lower() and len(country) > 4 and len(country) < 21):
            self.country = country.capitalize()
        else: 
            print("Invalid countryset_country input")

    def get_country(self):
        return self.country

    def __str__(self) -> str:
        return f"{self.name} with {self.egg} eggs migrates to {self.country} in month {self.month}."


def main():

    bird1 = Bird("Punatulkku", 4)
    try:
        print(f"{bird1.name} has {bird1.egg} eggs.")
    except AttributeError:
        pass

    bird1.set_egg(6)
    bird1.set_egg(40)
    bird1.set_egg(1)
    print(bird1.get_eggs())

    bird2 =Bird("Talitiainen", 9)
    print(bird2.name, bird2.egg)
    bird2.egg = 4
    print(bird2.egg)

    bird3 = Migratory("Tilhi", 4, "norway", 10)
    print(bird3)

    bird4 = Migratory("Palokärki", 5, "germany", 1)
    print(bird4)

    bird4.set_country("Estonia")
    bird3.set_country("löö")
    print(bird4, bird3)
    bird3.set_country("spain")
    print(bird3)
    print(bird3.get_country())


if __name__ == '__main__':
    main()
    
    
