
#Summing all the values until the sum has only one value.

n = "145677"

def digital_root(n):
    x = str(n)
    r = 0
    if int(x) <= 9:
        return int(x)
    else:
        while len(x) > 1:
            r = 0
            for i in range(len(x)):
                r = r + int(x[i])
            x = str(r)
        return r
    return r

print(digital_root(n))