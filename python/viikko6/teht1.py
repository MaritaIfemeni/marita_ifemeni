#All functions below in same order as given in the task
import numpy as np
from itertools import combinations 
import statistics
import math

def main():
    arr1 = np.array([3, 7, 9 , 12 , 244 , 5, 1, 8, 9])
    list1 = arr1.tolist()
    print("Average from two ints: ", average(2,4))
    print("Average from 4 floats: ", average2(2.0,2.0,2.0,2.0))
    print("Array sum: ", array_sum(arr1))
    print("Factorial: ", factorial(4))
    print("Maximun of 3 inst: ", biggest(3, 7, 29))
    print("BMI: ", bmi(158.0, 52.0))
    print("Maximun of 5 inst: ", biggest2(3, 30, 29, 2, 10))
    print("Amount of compinations: ", combine(arr1, 2))
    print("StrDeviation:", standard_deviation(arr1))
    print("Value in an array: ", search(3, arr1))
    print("Root from number 2: ", root(2))
    print("Neper apprx: ", neper(10))
    print("Sin: ", cal_sin(50))
    print("Cos: ", cal_cos(30))
    print("Selction sort: ", selection_sort(list1, len(list1) ))

#1
def average(x, y):
    return (x + y)/ 2

#2
def average2(a, b, c, d,):
    return(a + b + c + d) / 4.0

#3
def array_sum(arg):
    sumarr1 = np.sum(arg)
    return sumarr1

#4
def factorial(n):
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

#5
def biggest(q, r, t):
    list = [q, r, t]
    return max(list)

#6
def bmi(height, weight):
    BMI = weight / (height/100)**2
    return round(BMI, 1)

#7
def biggest2(q, r, t, l, k):
    list = [q, r, t, l, k]
    return max(list)

#8 
def combine(arr, s): 
    comp = list(combinations(arr, s))
    calc = list((int(j) for i in comp for j in i))
    return len(calc)

#9    
def standard_deviation(arg):
    return round(statistics.stdev(arg),2)

#10
def search(value, arg):
    if value in arg:
        return "Found"
    else:
        return "Not found"

#11
def root(f):
    return round(f**(1/2), 2)

#12
def neper(e):
    return round((1 + 1/e)**e, 5)

#13
def cal_sin(n):
 
    accuracy = 0.0001
    n = n * (3.142 / 180.0)
    x1 = n
    sinx = n;   
    sinval = math.sin(n)
    i = 1
    while(True):
        denominator = 2 * i * (2 * i + 1)
        x1 = -x1 * n * n / denominator
        sinx = sinx + x1
        i = i + 1
        if(accuracy <= abs(sinval - sinx)):
            break

    return round(sinx,2)

def cal_cos(n):
    accuracy = 0.0001
    n = n * (3.142 / 180.0)
    x1 = 1
    cosx = x1
    cosval = math.cos(n)
    i = 1
 
    denominator = 2 * i * (2 * i - 1)
    x1 = -x1 * n * n / denominator
    cosx = cosx + x1
    i = i + 1
    while (accuracy <= math.fabs(cosval - cosx)):
        denominator = 2 * i * (2 * i - 1)
        x1 = -x1 * n * n / denominator
        cosx = cosx + x1
        i = i + 1
 
    return round(cosx, 2)

#Bonus 1
def selection_sort(array, size):
   
    for step in range(size):
        min_idx = step

        for i in range(step + 1, size):
         
            if array[i] < array[min_idx]:
                min_idx = i

        (array[step], array[min_idx]) = (array[min_idx], array[step])

    return array


if __name__ == "__main__":
    main()