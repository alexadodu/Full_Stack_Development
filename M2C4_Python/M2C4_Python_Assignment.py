## M2C4 Python Assignment
## M. Alexandra Dodu

# Exercise 1: Create a list, tuple, float, integer, decimal, and dictionary.
series = ['Los Simpsons', 'Juego de Tronos', 'Los Serrano']
curso_programacion = ('M2C4 Python Assignment', 'Dev Camp', 'Alexandra')
num_flotante = float(120.3)
num_entero = int(120.3)
bases_nitrogenadas_adn = {
    'A' : 'adenina',
    'C' : 'citosina',
    'G' : 'guanina',
    'T' : 'timina',
    }

from decimal import Decimal
num_decimal = Decimal(120.3)

print(series)
print(curso_programacion)
print(num_flotante)
print(num_entero)
print(num_decimal)
print(bases_nitrogenadas_adn)

# Exercise 2: Round your float up.
import math

print(math.ceil(num_decimal))

# Exercise 3: Get the square root of your float.
print(math.sqrt(num_decimal))

# Exercise 4: Select the first element from your dictionary.
print( list(bases_nitrogenadas_adn.values()) [0])

# Exercise 5: Select the second element from your tuple.
print(curso_programacion[1])

# Exercise 6: Add an element to the end of your list.
print(series)
series.extend(['Sweet Tooth'])
print(series)

# Exercise 7: Replace the first element in your list.
print(series)
series[0] = 'Stranger Things'
print(series)

# Exercise 8: Sort your list alphabetically.
print(series)
series.sort()
print(series)

# Exercise 9: Use reassignment to add an element to your tuple.
curso_programacion += ('completado',)

titulo, curso, autora, estado = curso_programacion

print(titulo)
print(curso)
print(autora)
print(estado)