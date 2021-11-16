a = float(input("Enter length of side A: "))
b = float(input("Enter length of side B: "))
c = float(input("Enter length of side C: "))
CHECKLIST = {
    "Right": False,
    "Equilateral": False,
    "Isosceles": False,
    "Scalene": False,
}
def solveTriangle(a, b, c):
    if a*a + b*b == c*c or b*b + c*c == a*a or a*a + c*c == b*b:
        CHECKLIST["Right"] = True
    elif a == b == c:
        CHECKLIST["Equilateral"] = True
    elif a == b or b == c or c == a:
        CHECKLIST["Isosceles"] = True
    else:
        CHECKLIST["Scalene"] = True
solveTriangle(a, b, c)
print(f"\n\nYour triangle:\n\nis Equilateral: {CHECKLIST['Equilateral']}\nis Isosceles: {CHECKLIST['Isosceles']}\nis Scalene: {CHECKLIST['Scalene']}\nis Right: {CHECKLIST['Right']}\n\n")
