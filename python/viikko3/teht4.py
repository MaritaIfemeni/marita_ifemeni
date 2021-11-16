monthInput = 0

def main():
    give_month()

def give_month():
    monthInput = int(input("Enter month number: "))
    days_in_months(monthInput)

def days_in_months(month):
    if month == 9 or month == 4 or month == 6 or month == 11:
        print('30')
    elif month == 1 or month == 3 or month == 5 or month== 7 or month == 8 or month == 10 or month == 12:
        print ('31')
    elif month == 2:
        print ('28 (or 29 in every forth year)') 

if __name__ == "__main__":
    main()