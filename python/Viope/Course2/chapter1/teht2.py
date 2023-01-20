
items = []
def main():
    while True:
        
        giveoption = int(input("Would you like to\n" \
                           "(1)Add or\n" \
                           "(2)Remove items or\n" \
                           "(3)Quit?: "))
        tester(giveoption) 


def tester(givenoption):
    option = givenoption
    if option == 1:
        add()
    elif option == 2:
        remove()
    elif option == 3:
        stop()
    else: 
        print("Incorrect selection.")

def add():
    item = input("What will be added?:")
    items.append(item)

def remove():
    print(f"There are {len(items)} items in the list.")
    removeitem = int(input("Which item is deleted?: "))
    if removeitem >= len(items):
        print("Incorrect selection.")
    else:
        del items[removeitem]

def stop():
    print("The following items remain in the list:")
    for i in range(len(items)):
        print(items[i])
        quit()


if __name__ == "__main__":
    main()