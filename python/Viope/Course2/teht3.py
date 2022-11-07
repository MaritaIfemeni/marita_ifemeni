def bubble_sort(a):

    for i in range(0,len(a)-1):  
        for j in range(len(a)-1):  
            if(a[j]>a[j+1]):  
                temp = a[j]  
                a[j] = a[j+1]  
                a[j+1] = temp  
    return a  

    
a = []
number = int(input("Please Enter the Total Number of Elements :"))
for i in range (number):
    value = int(input("Please enter the %d Element : " %i))
    a.append(value)
print("The Sorted List in Ascending Order : ", bubble_sort(a))

