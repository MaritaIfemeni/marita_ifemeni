
try:
    number = int(input("Give a number: "))
except ValueError:
    print("Only numbers allowed")
       
if number > 100:
    print("The number you entered is higher than 100")
elif number == 100:
    print("The number you entered is equal to 100")
else:
    print("Number you entered is less than 100")

