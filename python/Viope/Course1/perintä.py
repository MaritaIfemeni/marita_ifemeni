class Emo:
    arvo = 0
    tila = "Toiminnassa"

    def nimi(self):
        return f"Minä olen emoluokka"

class Lapsi(Emo):

    def nimi(self):
        return f"Minä olen lapsiluokka"

def main():
    emo = Emo()
    lapsi = Lapsi()
    print(emo.tila)
    print(emo.nimi())
    print(lapsi.tila)
    print(lapsi.nimi())


if __name__ == "__main__":
    main()

