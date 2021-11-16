seconds = float(input("Give seconds: "))

hours = seconds/3600.00
minutes = seconds/60.00
print(f"{seconds} sekunttia on {hours} tuntia tai {minutes} minuuttia")

minutes2 = float(input("Give minutes: "))
seconds2 = minutes*60
hours2 = minutes2/60
print(f"{minutes2} minuuttia on {seconds2} sekunttia tai {hours2} tuntia")
