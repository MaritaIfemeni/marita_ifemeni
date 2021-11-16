height = float(input("Enter your height in cm: "))
weight = float(input("Enter your weight in kg: "))

BMI = weight / (height/100)**2

print(f"You are {height} cm tall and your weight is {weight} kg.")
print("This means your BMI is: " "{:.2f}".format(BMI))

if ( BMI < 16):
   print("You are severely underweight.")

elif ( BMI >= 16 and BMI < 18.5):
   print("You are underweight.")

elif ( BMI >= 18.5 and BMI < 25):
   print("You are healthy.")

elif ( BMI >= 25 and BMI < 30):
   print("You are overweight.")

elif ( BMI >=30):
   print("You are severely overweight.")