# For loop
total = 0

for number in range(2, 40+1):
    if(number % 2 == 0):
        #print("{0}".format(number))
        total = total + number

print("The Sum of Even Numbers from 2 to {0} = {1}".format(number, total))
