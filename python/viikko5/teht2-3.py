import numpy as np

result = np.array([5, 4, 7, 1, 3, 5, 6, 88, 54])
print(f"Array: {result}")
biggest = np.max(result)
smallest = np.min(result)
print(f"Max value from the array: {biggest}")
print(f"Max value from the array: {smallest}")

searchvalue = int(input("Enter value: "))
if searchvalue in result:
    print("Found")
else:
    print("Not found")

x = np.where(result == searchvalue)
print(result[x])
#np.searchsorted(result)