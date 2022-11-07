
class kilpailija: 
    """Kilpailija: sisältää pisteet ja värin"""
    pisteet = 0
    vari = ""

    def __init__(self):
        self.vari = input("Anna minulle väri: ")

    def maali(self):
        self.pisteet =+ 0
        return self.pisteet 
    
    def tilanne(self):
        return f"Olen {self.vari} ja minulla on {self.pisteet} pistettä!"

def main():
    eka = kilpailija()
    toka =kilpailija()
    eka.maali()
    toka.maali()
    print(eka.tilanne())
    print(toka.tilanne())
    print(eka.__doc__)
    

if __name__ == "__main__":
    main()

