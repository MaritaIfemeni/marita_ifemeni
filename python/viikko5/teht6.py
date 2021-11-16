
dict = {
    "treaty" : "patto",
    "truck" : "camion",
    "trust" : "trust",
    "value" : "valore",
    "volunteer" : "volontario",
    "wage" : "paga",
    "wages" : "ricompensa",
    "wholesale" : "ingrosso",
    "work" : "posto di lavoro",
    "work" : "opera",
    "work" : "force manodopera",
    "worker" : "operaio",
    "workman" : "operaio",
    "workplace" : "posto di lavoro",
    "worth" : "valore"

}

#print(dict.items())

wordlist = [
    ["worth" , "valore"], 
    ["workplace" , "posto di lavoro"],
    ["workman" , "operaio"], 
    ["work" , "force manodopera"], 
    ["wage" , "paga"],
    ["volunteer" , "volontario"], 
    ["truck" , "camion"], 
    ["trust" , "trust"], 
    ["treaty" , "valore"], 
    ["work" , "force manodopera"], 
    ["wages" , "ricompensa"], 

]

word = input("Enter word: ")

for x in range(len(wordlist)):
    for y in range(len(wordlist[x])):
        if word == wordlist[x][y]:
            print("In italian:", wordlist[x][y+1])

if dict.get(word) != None:
    print("In italian:", dict.get(word))