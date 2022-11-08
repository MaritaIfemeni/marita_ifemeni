loop_str= input("Give number:")

def digital_root(n):
    sum_digits = [int(x) for x in loop_str]
    if int(loop_str) < 9:
        pass
           
    else:
        total = sum(sum_digits)
        return total

print(digital_root(loop_str))