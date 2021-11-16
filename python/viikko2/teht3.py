"""
User gives the speed of the car (km/h) and the distance (km). Program calculates amount of time.
a) in hours
b) in whole hours and minutes
"""

print("Travel time calculator")

speed = float(input("Give speed (km/h): "))
distace =float(input("Give distance (km): "))

time = distace/speed

ctime = str(time)
splittime = ctime.split('.')

print(f"Matka kestää: {time} tuntia")
print(f"Matka kestää {splittime[0]} tuntia ja {splittime[1]} minuuttia")
