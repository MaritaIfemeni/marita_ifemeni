class kilpailija:
    vari = ""

    def maali(self):
        pisteet = 0
        for i in range(pisteet +1):
            return self.maali
            
    def tilanne(self):
        self.kilpailija_olio = kilpailija()
        vari = self.kilpailija_olio.vari
        piste = self.kilpailija_olio.maali()

        return f"Olen {vari} ja minulla on {piste} pistettä!"


def main():
    eka = kilpailija()
    eka.vari = "sininen"
    eka.maali()
    print(eka.tilanne())

if __name__ == "__main__":
    main()