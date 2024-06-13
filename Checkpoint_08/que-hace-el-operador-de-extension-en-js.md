---
description: 'Autora: M. Alexandra Dodu'
cover: https://xpertlab.com/wp-content/uploads/2022/10/featured.jpg
coverY: -36
---

# 👩‍💻 ¿Qué hace el operador de extensión en JS?

## <mark style="color:yellow;">1. Definición</mark>

El operador de extensión en JavaScript, denotado por tres puntos consecutivos (`...`), se utiliza para expandir elementos iterables (como arrays o cadenas) en lugares donde se esperan múltiples elementos, como argumentos de funciones o elementos de un nuevo array. Este operador permite trabajar con estructuras de datos de manera más flexible y concisa, especialmente cuando se trata de manipular arrays o combinando múltiples elementos.

<figure><img src=".gitbook/assets/image (14).png" alt="" width="563"><figcaption></figcaption></figure>

## <mark style="color:yellow;">2. Ejemplos de uso</mark>

### <mark style="background-color:orange;">2.1. Copiar un array</mark>

El operador de extensión permite hacer una copia de un array de manera rápida y sencilla, sin modificar el arreglo original. Por ejemplo:

```javascript
let animales = ['perro', 'caballo', 'gato', 'oso', 'jirafa'];
console.log(animales); // ['perro', 'caballo', 'gato', 'oso', 'jirafa']

let copiaDeAnimales = [...animales];
console.log(copiaDeAnimales); // ['perro', 'caballo', 'gato', 'oso', 'jirafa']
```

Podemos hacer copias de arrays y además añadir elementos al array, tanto al principio como al final de éste.

```javascript
let poblaciones = ['Benicasim', 'Castellón', 'Alcocebre'];
console.log(poblaciones); // ["Benicasim", "Castellón", "Alcocebre"]

let nuevasPoblaciones = ['Oropesa', ...poblaciones];
console.log(nuevasPoblaciones); // ["Oropesa", "Benicasim", "Castellón", "Alcocebre"]

let masPoblacionesNuevas = [...poblaciones, 'Madrid'];
console.log(masPoblacionesNuevas); // ["Benicasim", "Castellón", "Alcocebre", "Madrid"]
```

### <mark style="background-color:orange;">2.2. Concatenar arrays</mark>

Permite concatenar o combinar múltiples arrays en uno solo de forma rápida y sencilla. Por ejemplo:

```javascript
let peces = ['emperador', 'salmón'];
let insectos = ['hormiga', 'mosquito'];
console.log([...peces, ...insectos]); // ["emperador", "salmón", "hormiga", "mosquito"]
```

Otro ejemplo mucho más visual sería:

<figure><img src=".gitbook/assets/image (15).png" alt="" width="563"><figcaption></figcaption></figure>

### <mark style="background-color:orange;">2.3. Copiar, concatenar y añadir nuevas propiedades a un objeto</mark>

Tal como se puede hacer con los arrays, pasa con los objetos:

<pre class="language-javascript"><code class="lang-javascript"><strong>// Copia de un array
</strong><strong>const usuario = {
</strong>    nombre: 'Alexa',
    apellido: 'Dodu',
    edad: 28
}

const copiaDeUsuario = {...usuario};
console.log(copiaDeUsuario); // {nombre: 'Alexa', apellido: 'Dodu', edad: 28}


// Concatenación de arrays
const coche = {
    marca: 'Peugeot',
    modelo: '207',
}
const caracteristicas = {
    color: 'Azul',
    cv: '115',
}

const automovil = {...coche, ...caracteristicas};
console.log(automovil); // {marca: 'Peugeot', modelo: '207', color: 'Azul', cv: '115'}


// Adición de nuevas propiedades a un array
const extras = {...automovil, 'aacc': true };
console.log(extras); // {marca: 'Peugeot', modelo: '207', color: 'Azul', cv: '115', aacc: true}
</code></pre>

### <mark style="background-color:orange;">2.4. Argumentos de funciones</mark>

Permite pasar un número variable de argumentos a una función de manera más dinámica. Por ejemplo:

```javascript
function sumar(...numeros) {
  return numeros.reduce((total, num) => total + num, 0);
}

console.log(sumar(1, 2, 3)); // 6
console.log(sumar(1, 2, 32, 234)); // 269
```

Este código define una función llamada `sumar` que acepta un número variable de argumentos. La función utiliza el operador de extensión `...numeros` en su declaración de parámetros, lo que le permite recibir cualquier cantidad de argumentos y los agrupa en un arreglo llamado `numeros`.

Dentro de la función, se utiliza el método `reduce` en el arreglo `numeros`. El método `reduce` ejecuta una función reductora sobre cada elemento del arreglo para reducirlo a un solo valor. En este caso, la función reductora suma todos los elementos del arreglo.

Finalmente, la función devuelve el resultado de la suma.

## <mark style="color:yellow;">3. Bibliografía para profundizar</mark>

* [Enlace 1](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread\_syntax)
* [Enlace 2](https://dev.to/alextomas80/el-operador-spread-en-javascript-12hc)
