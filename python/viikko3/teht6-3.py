A = 11
B = 89
C = 40
VALUELIST = [A, B, C]

def highestValue(list):
    prev = 0
    for x in range(len(list)):
        if list[x] > prev:
            highestValue = list[x]
        prev = list[x]
    return highestValue
    
print(highestValue(VALUELIST))