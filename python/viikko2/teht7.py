


rate = 1.16

#def printNotes (notes):
    #for i in range(len(notes)):
       #print (notes[i])
#printNotes(noteslist)

noteslist = [5, 10, 20, 50, 100, 200, 500]

def calculateNotes(calc):
    for i in range(len(calc)):
        calc[i]/=rate
        print(f"{calc[i]} dollars")

calculateNotes(noteslist)