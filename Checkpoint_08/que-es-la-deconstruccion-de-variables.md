---
description: 'Autora: M. Alexandra Dodu'
cover: >-
  https://images.unsplash.com/photo-1592609931095-54a2168ae893?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHw0fHxqYXZhc2NyaXB0fGVufDB8fHx8MTcxNTU4NTE4NHww&ixlib=rb-4.0.3&q=85
coverY: 0
---

# 👩‍💻 ¿Qué es la deconstrucción de variables?

## <mark style="color:yellow;">1. Definición</mark>

La deconstrucción de variables en JavaScript es una característica que permite extraer valores de arrays o propiedades de objetos y asignarlos a variables individuales de manera rápida y concisa. Esto simplifica el proceso de acceder a elementos específicos de estructuras de datos complejas.

## <mark style="color:yellow;">2. Formas de deconstruir variables</mark>

Hay dos formas principales de deconstruir variables en JavaScript:

1. **Deconstrucción de arrays**: Permite extraer elementos de un arrays y asignarlos a variables individuales.

```javascript
const numeros = [1, 2, 3];

const [a, b, c] = numeros;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3

```

2. **Deconstrucción de objetos**: Permite extraer propiedades de un objeto y asignarlas a variables con el mismo nombre.

```javascript
const objeto = { nombre: "Alexa", edad: 30 };

const { nombre, edad } = objeto;

console.log(nombre); // "Alexa"
console.log(edad);   // 30
```

## <mark style="color:yellow;">3. Intercambiar valores de variables empleando la decontrucción de variables</mark>

La deconstrucción de variables facilita el intercambio de valores entre variables de una manera más simple y directa, sin necesidad de variables temporales adicionales. Un ejemplo real donde sería útil intercambiar valores empleando deconstrucción de variables es en una aplicación de lista de tareas. Imagina que tienes una lista de tareas y quieres implementar una funcionalidad para reordenar dos tareas arrastrando y soltando. En este caso, necesitarías intercambiar las posiciones de las tareas en la lista.

Aquí un ejemplo simplificado:

Supongamos que tienes un array de objetos que representan tareas:

```javascript
let tareas = [
    { id: 1, nombre: "Hacer la compra" },
    { id: 2, nombre: "Lavar los platos" },
    { id: 3, nombre: "Sacar la basura" }
];
```

Digamos que el usuario decide arrastrar y soltar la tarea "Lavar los platos" para colocarla en primer lugar. Para hacer esto, necesitarías intercambiar las posiciones de la tarea "Lavar los platos" con la tarea que está actualmente en primer lugar.

Usando la deconstrucción de variables, podrías hacer esto de manera muy sencilla y legible:

```javascript
// Índices de las tareas que se intercambiarán
let index1 = 1; // El índice de "Lavar los platos" en el array original
let index2 = 0; // El índice de la tarea en primer lugar en el array original

// Intercambio de posiciones de las tareas usando deconstrucción de variables
[tareas[index1], tareas[index2]] = [tareas[index2], tareas[index1]];

console.log(tareas);
```

Con este código, las tareas "Hacer la compra" y "Lavar los platos" intercambiarían sus posiciones en el arreglo `tareas`:&#x20;

<figure><img src=".gitbook/assets/image (13).png" alt=""><figcaption></figcaption></figure>

## <mark style="color:yellow;">4. Bibliografía para profundizar</mark>

* [Enlace 1](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/Destructuring\_assignment)
* [Enlace 2](https://www.freecodecamp.org/espanol/news/desestructuracion-de-arreglos-y-objetos-en-javascript/)
