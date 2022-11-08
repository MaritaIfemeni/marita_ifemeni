
list1 = []

print("Multibly calculator")

items = input("How many numbers you'd like to multiply:")
items =int(items)
for i in range(0, items):
    numbers = int(input())

    list1.append(numbers)

def grow(arr):
    result = 1
    for x in arr: 
        result = result * x
    return result

print(grow(list1))