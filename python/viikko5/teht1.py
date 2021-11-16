#Array contains 30 random values. Calculate the sum and average.
import numpy as np

result = np.random.randint(500, size=(30))
average = np.mean(result)
summa = np.sum(result)
print(f"Random int array: {result}")
print(f"Average of the above arroy: {average}")
print(f"Sum of the above arroy: {summa}")
