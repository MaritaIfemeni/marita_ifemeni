from teht5_1 import Account

def main():
    acc_manip = Account()
    while True:
        curr_bal = "{:.2f}".format(acc_manip.get_balance())
        print(f"Your current balance: {curr_bal}")
        print("Type (1) and press enter to make deposit.")
        print("Type (2) and press enter to do withdrawal.")
        print("Type (3) and press enter to check the balance.")
        print("Type (4) and press enter to close the program")
        goTo = input("\nWhat do you want to do: ")
        if goTo == "1":
            dep_amount = float(input("Enter the amount you wish to deposit: "))
            acc_manip.deposit(dep_amount)
        elif goTo == "2":
            wit_amount = float(input("Enter the amount you wish to withdraw: "))
            acc_manip.withdraw(wit_amount)
        elif goTo == "3":
            print("{:.2f}".format(acc_manip.get_balance()))
        elif goTo == "4":
            break
        else:
            print("Invalid input, try again!")

if __name__ == '__main__':
    main()