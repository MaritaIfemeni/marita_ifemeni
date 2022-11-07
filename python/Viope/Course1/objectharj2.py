class kilpailija:

    vari: str
    pisteet: 0 

    def maali(self):
        for i in self.pisteet +1:
            return self.pisteet   
        
    
    def tilanne(self):
            print(f"Olen {self.vari} ja minulla on {self.pisteet} pistettä!")

def main ():

    eka = kilpailija("sininen")
    eka.maali()
    eka.tilanne()


if __name__ == "__main__":
    main()