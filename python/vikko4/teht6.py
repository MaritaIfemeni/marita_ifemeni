#6
#Try to solve this equation (try find 1 of roots)
# 3x^3 - 4x^2 + 9x +5 = 0
#Here ^ means exponent

from sympy import solve, symbols

x = symbols('x')
equation = 3*x**3-4*x**2+9*x+5

print(solve(equation.evalf()))


#
# print(solve(equation))

