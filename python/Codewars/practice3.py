# create simble calculator  that can add, subtract, multiply, and divide using functions


def calculator():
    operation = input("Enter operation: ")
    num1 = int(input("Enter first number: "))
    num2 = int(input("Enter second number: "))
    if operation == "+":
        print(num1 + num2)
    elif operation == "-":
        print(num1 - num2)
    elif operation == "*":
        print(num1 * num2)
    elif operation == "/":
        print(num1 / num2)
    else:
        print("Invalid input")

def main():
    calculator()

main()


