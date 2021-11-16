value1 = int(input("Give first value: "))
value2 = int(input("Give second value: "))
value3 = int(input("Give third value: "))

if value1 > value2 and value1 > value3:
    print(f"First value, number {value1} was biggest!")
elif value2 > value1 and value2 > value3:
    print(f"Second value, number {value2} was biggest!")
elif value3 > value1 and value3 > value2:
    print(f"Third value, number {value3} was biggest!")




