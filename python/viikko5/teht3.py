import numpy as np

arr1 = np.array([3, 7, 9 , 12 , 244 , 5])
arr2 = np.array([4, 5, 7, 11, 111, 1456, 77])

arr2.pop(3)
sumarr1 = np.sum(arr1)
sumarr2 = np.sum(arr2)

print(f"Sum of {arr1} and {arr2} is {sumarr1 + sumarr2}")