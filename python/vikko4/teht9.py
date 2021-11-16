"""Program calculates the exponential value (base and exponent are given invariable). 
Base can be a real number, exponent is a whole number. Use a loop."""


base = float(input("Give a real number: "))
ex = int(input("Give a whole number: "))
pow = 1

for x in range(1, ex +1):
    pow = pow * base
    
print(pow)

