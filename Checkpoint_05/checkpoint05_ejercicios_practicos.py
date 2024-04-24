# CHECKPOINT 5 - FULL STACK DEVELOPMENT COURSE
# Author: M. Alexandra Dodu



# P1. Cree un bucle For de Python.
sequence = input("Introduce aquí una cadena de texto para contaje de caracteres: ")
sequence = sequence.upper().replace(" ", "") 

characters = {}

for i in sequence:
    characters[i] = sequence.count(i)

print(characters)

# P2. Cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3.
def suma(num1, num2, num3):
  return num1 + num2 + num3

suma(1, 40, 3)

# P3. Cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear.
suma = lambda num1, num2, num3 : num1 + num2 + num3
print(suma(1, 40, 3))

# P4. Utilizando la siguiente lista y variable, determine si el valor de la variable coincide o 
# no con un valor de la lista. *Sugerencia, si es necesario, utilice un bucle for in y el operador in.
nombre = 'Enrique'
lista_nombre = ['Jessica', 'Paul', 'George', 'Henry', 'Adán']

nombre_encontrado = False
for name in lista_nombre:
    if name == nombre:
        nombre_encontrado = True
        break

if nombre_encontrado:
    print(f"Se ha encontrado el nombre {nombre} en la lista.")
else:
    print(f"No se ha encontrado el nombre {nombre} en la lista.")