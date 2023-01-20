

products = [10,14,22,33,44,13,22,55,66,77]
select = 1
totalsum = 0
print("Supermarket")
print("===========")
while select != "0":
    select = input("Please select product (1-10) 0 to Quit: ")
    if int(select) > 0 and int(select) < 11:
        totalsum = totalsum + products[int(select)-1]
        print("Product:", select, "Price", products[int(select)-1])
    elif int(select) == 0:
        print("Total:" + str(totalsum))
        payment = input("Payment:")
        change = int(payment) - totalsum
        print("Change:" + str(change))
