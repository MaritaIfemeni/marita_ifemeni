
# -*- coding: cp1252 -*-

import tarkastaja
while True:
    testattava = input("Anna testattava sana: ")
    tulos = tarkastaja.testaa(testattava)
    if tulos == True:
        print("Antamasi sana kelpaa salasanaksi!")
        break
    else:
        print("Sana ei kelpaa.")