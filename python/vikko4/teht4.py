from random import randint
from collections import defaultdict
 
results = defaultdict(int) 
throws = 100 
for x in range(throws): 
  results[randint(1, 6)]+=1 
print(f"In {throws} throws of dice: ") 
for i in range(1, 7): 
   print(f"{i} was {results[i]} times thrown.") 