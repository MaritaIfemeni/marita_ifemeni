#While loop
d,i = 0,5
n = 100
while i <= n:
	d += i
	i += 5
print(f"The Sum of Numbers: 5, 10, 15, .. 100: {d}")


#For loop
total = 0

for number in range(5, 100+1):
    if(number % 5 == 0):
        #print("{0}".format(number))
        total = total + number

print("The Sum of Numbers: 5, 10, 15, .. {0}: {1}".format(number, total))
