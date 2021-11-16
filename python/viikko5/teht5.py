import array as arr
import numpy as np
"""Method	Description  (
Python does not have built-in support for Arrays, but Python Lists can be used instead.)
append()	Adds an element at the end of the list
clear()	Removes all the elements from the list
copy()	Returns a copy of the list
count()	Returns the number of elements with the specified value
extend()	Add the elements of a list (or any iterable), to the end of the current list
index()	Returns the index of the first element with the specified value
insert()	Adds an element at the specified position
pop()	Removes the element at the specified position
remove()	Removes the first item with the specified value
reverse()	Reverses the order of the list
sort()	Sorts the list"""



methods_list = [3, 6, 4, 22, 78, 4, 2]
methods_array = arr.array("i", methods_list)
print("Orginal list: ", methods_list)
print("Orginal array: ", methods_array)
print("First element:", methods_array[0])
print("Second element:", methods_array[1])
print("Last element:", methods_array[-1])

print("Remove index 2:", methods_array.pop(2))
methods_array.reverse()
methods_array.append(4)
methods_array.extend([3, 6, 88])
methods_array.remove(22)
methods_array.insert(4, 6)
print("Reversed, appended, extended, popped, removed, inserted array:", methods_array)
print("How many number 4:", methods_array.count(4))

new_array = np.array(methods_array)
print("Create nympy array:", new_array)
z = np.copy(new_array)
print("Copy of nympy array:", z)
s = np.sort(z)
print("SORTED: ", s)
new_list = [methods_array]
print("Create list from array arr:", new_list)
new_list.sort()
print("Sorted new list:", new_list)

new_list.clear()
print("CLEARED:", new_list)






