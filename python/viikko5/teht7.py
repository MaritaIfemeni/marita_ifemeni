
"""Bonus tasks (1 points/task)
There are 20 values in an array:
calculate the standard deviation
"""

""">>> def variance(data):
...     # Number of observations
...     n = len(data)
...     # Mean of the data
...     mean = sum(data) / n
...     # Square deviations
...     deviations = [(x - mean) ** 2 for x in data]
...     # Variance
...     variance = sum(deviations) / n
...     return variance
...

>>> variance([4, 8, 6, 5, 3, 2, 8, 9, 2, 5])
5.76"""
import numpy as np
import math
data = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
                11, 12, 13, 14, 15, 16, 17, 18, 19, 20])

n = len(data)
mean = sum(data)/ n
deviation = [(x - mean) ** 2 for x in data]
variation = sum(deviation) / n
standard_deviation = math.sqrt(variation)

print("Standard deviation is:", standard_deviation)
"""def stdev(data):
...     var = variance(data)
...     std_dev = math.sqrt(var)
...     return std_dev"""
