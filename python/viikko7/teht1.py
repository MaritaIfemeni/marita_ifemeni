"""1. A complex number is a number 
that can be expressed in the form a + bi, 
where a and b are real numbers and i is 
the imaginary unit.

Create class Complex with attributes, 
constructors and getters/setters."""

class Complex:
    test = "teststring"

    def __init__(self, a, b, i):
        self.a = a
        self.b = b
        self.i = i

    def setA(self, a):
        self.a = a
    
    def setB(self, b):
        self.b = b

    def setI(self, i):
        self.i = i

    def getA(self):
        return self.a
    
    def getB(self):
        return self.b

    def getI(self):
        return self.i

number1 = Complex("1", "4", "3")
number2 = Complex("0", "0", "0")

print(number1.a)
number2.setA("3")
number2.setB("5")
number2.setI("7")
print(number2.i)
number2.a = "2" # WHY DO I NEED SETTER IF I CAN DO THIS?
number2.test = "changedteststring" # AND THIS?
print(number2.a)
print(number2.test)
print(number2.getA())