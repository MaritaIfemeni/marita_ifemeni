from os import path
import json

# Creating base dictionary and saving it in to .json file.
def dictionary():
    wordlist = [{'amme': 'vanna','mitä':'mittee','leipäpala':'kaakku'}]
    try:
        with open('wordlist.json', 'w') as json_file:
            json.dump(wordlist, json_file, indent = 4)
    except PermissionError:
        print("Virhe - Ee onnistunu tallentaminen")
        stop()

# Checks if "wordlist.json" file already exist, if not, creating newone.
def new_dictionary():
    if path.exists('wordlist.json') is True:
        print("Sanakirja löövetty ja uploadattu!")
    else:
        print("Valmista sanakirjoo ei löötynnä, luodaanpa uusi!")
        dictionary()

# Searching the user input from "wordlist.json" file, if not found, 
# definition can be added or user can skip.  
def translate():
    with open('wordlist.json') as json_file:
        wordlist = json.load(json_file)

    word = input("Annappa kirjakiellä sana: ")
    if word is not "":
        try:
            for x in wordlist:
                print("\nTämä sana löötyy sankirjasta, alla merkitys:\nSuomi: {0}  -->  " \
                     "Savo: {1}\n".format(word.capitalize(), x[word].capitalize()))
        except KeyError:
            print("\nTätä sannoo ei löötynnä sankirjasta!")
            add_word = input("Jos haluvat lisätä käännöksen sanalle \"{0}\" Kirjoota se alle" \
                    "tai paina Entter ohittaaksesi.\nAnna käännös: ".format(word))
            if add_word is not "":
                add_new_word(word, add_word)
            else:
                pass
    else:
        stop() # If user input is empty, program will quit.

# Adds the definition user inputs for the word that wasn't found.             
def add_new_word(word, add_word):
    try:    
        with open('wordlist.json') as json_file:
            wordlist = json.load(json_file)
        wordlist[0].update({word: add_word})
        
        with open('wordlist.json', 'w') as json_file:
            json.dump(wordlist, json_file, indent = 4)

        print("\nKäännös \"{0}\" sanalle \"{1}\" lisätty.".format(add_word.capitalize(), word.capitalize()))
    except PermissionError:
        print("Tässä ol nyt onglema, Ee tallenna")

# Quitting program
def stop():
    print("Lopetettaan.")
    quit()

def main():
    new_dictionary()
    while True:
       translate()

if __name__=="__main__":
    print("*** Suomi - Savo - Sanakirja ***") 
    print("Voet lopettoo ohojelman jättämällä kirjootus kentän" \
         "tyhjäksi ja paenamalla Entter näppäentä!")
    main()