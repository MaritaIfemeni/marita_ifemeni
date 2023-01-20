

def main():
    while True:
        givenstring = input("Write something(quit ends): ")
        tester(givenstring) 


def tester(givenstring):
    string = givenstring
    if string == "quit":
        quit()
    elif len(string) < 10:
        print("Too short")    
    elif len(string) > 10:
        print(string)


if __name__ == "__main__":
    main()