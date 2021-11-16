total = 0

for number in range(5, 100+1):
    if(number % 5 == 0):
        #print("{0}".format(number))
        total = total + number

print("The Sum of Even Numbers from 2 to {0} = {1}".format(number, total))