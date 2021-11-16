balance = 0

def menu ():
    print(f"Your current balance: {balance}")
    print("Type (1) and press enter to make deposit.")
    print("Type (2) and press enter to do withdrawal.")
    print("Type (3) and press enter to check the balance.")
    print("Type (4) and press enter to close the program")
    goTo = input("\nWhat do you want to do: ")
    if goTo == "1":
        make_Deposit()
    elif goTo == "2":
        do_Withdrawal()
    elif goTo == "3":
        print(check_Balance())
    elif goTo == "4":
        end_Program()
    else:
        print("Invalid input, try again!")

def make_Deposit():
    global balance
    deposit = float(input("Enter the amount you want to deposit: "))
    balance = balance + deposit

def do_Withdrawal():
    global balance
    withdraw = float(input("Enter the amount you want to withdraw: "))
    if (withdraw > balance):
        print(f"You cannot withdraw more than you have!\nYour current balance: {balance}")
    else:
        balance = balance - withdraw
        print(f"Your current remaining balance: {balance}")

def check_Balance():
    return balance

def end_Program():
    print("Closing down the program!")
    quit()

def main():
    while True:
        print("Simple Account Manager")
        menu()

if __name__=="__main__":
    main()