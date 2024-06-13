---
description: 'Autora: M. Alexandra Dodu'
cover: >-
  https://www.raulprietofernandez.net/media/k2/items/cache/0e055015385980da4e111a90c5284edc_XL.webp
coverY: -17
layout:
  cover:
    visible: true
    size: full
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# 👩‍💻 ¿Qué tipo de bucles hay en JS?

Los tres tipos más comunes de bucles son: `for`, `while` y `do ... while`. Vamos a ir viendo cada uno de ellos a continuación.

## <mark style="color:yellow;">1. Bucle</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">`for`</mark>

Este bucle se utiliza para iterar sobre una secuencia de elementos o realizar una tarea repetitiva un **número específico de veces**.&#x20;

<figure><img src="https://www.elvisualista.com/wp-content/uploads/2016/05/g-9.1-bucle-for.png" alt="" width="375"><figcaption><p>Diagrama del bucle for</p></figcaption></figure>

### <mark style="background-color:orange;">1.1. Sintaxis</mark>

El bucle `for` se declara con la palabra `for` seguido de tres expresiones separadas por `;` entre paréntesis `()`.

<pre class="language-javascript"><code class="lang-javascript"><strong>for (&#x3C;inicio>; &#x3C;condición>; &#x3C;actualización>) {
</strong>    // Cuerpo del bucle
}
</code></pre>

En cuanto a las expresiones:

1. Expresión de **inicio**: Se ejecuta una sola vez antes de que comience la iteración. Se utiliza para inicializar variables o establecer el estado inicial del bucle.
2. Expresión de **condición**: Se evalúa antes de cada iteración. Si la condición es verdadera, se ejecuta el cuerpo del bucle; de lo contrario, el bucle termina.
3. Expresión de **actualización**: Se ejecuta al final de cada iteración, generalmente se utiliza para actualizar el valor de las variables de control. Aquí incrementamos o decrementamos el valor de la variable declarada en la expresión de inicio. Así, se consigue que en alguna iteración la condición no se cumpla y el bucle termine.

### <mark style="background-color:orange;">1.2. Ejemplo básico de iteración sobre un array</mark>

```javascript
// Declaración de un array
var libros = [
    "Medio Rey",
    "Canción de hielo y fuego",
    "Ciudad de Jade",
    "Las mentiras de Locke Lamora",
    "Príncipe Cruel"
]

// Bucle for
for (var i = 0; i < libros.length; i++) {
    console.log(libros[i]); // Imprime cada nombre de libro en la consola
}
```

Este bucle se ejecutará tantas veces números de libros haya (`libros.length`), ya que hemos declarado que `i` comienza en 0 y se incrementa en cada iteración (`i++`), hasta `libros.length -1`.  En cada iteración, se accede al elemento de la lista en la posición `i` usando `libros[i]`, y se imprime en la consola.

### <mark style="background-color:orange;">1.3. Ejemplos bucle</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">`for ... in`</mark>

Otra forma de iterar sobre un array es empleando `for ... in`.

```javascript
// Declaración de un array
var libros = [
    "Medio Rey",
    "Canción de hielo y fuego",
    "Ciudad de Jade",
    "Las mentiras de Locke Lamora",
    "Príncipe Cruel"
];

// Bucle for...in
for (var index in libros) {
    console.log(libros[index]); // Imprime cada nombre de libro en la consola
}
```

En este bucle, `index` es una variable que recorre los índices de la lista `libros`, y en cada iteración, accedemos al elemento correspondiente usando `libros[index]`.

Para iterar sobre un objeto:

<pre class="language-javascript"><code class="lang-javascript"><strong>// Delcaración de objeto
</strong>var libro = {
    titulo: "Medio Rey",
    autor: "Joe Abercombrie"
};

// Bucle for ... in
for (var key in libro) {
  console.log(key + " => " + libro[key]);
}

// titulo => Medio Rey
// autor => Joe Abercombrie
</code></pre>

En este bucle, `key` es una variable que recorre todas las propiedades enumerables del objeto `libro`. En cada iteración, `key` contendrá el nombre de la propiedad actual, y `libro[key]` accederá al valor asociado a esa propiedad. Dentro del bucle, se imprime en la consola el nombre de la propiedad seguido de su valor.

### <mark style="background-color:orange;">1.4. Ejemplo usando el método</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">`forEach()`</mark>

```javascript
// Declaración de un array
var libros = [
    "Medio Rey",
    "Canción de hielo y fuego",
    "Ciudad de Jade",
    "Las mentiras de Locke Lamora",
    "Príncipe Cruel"
];

// Método forEach()
libros.forEach(function(libro) {
    console.log(libro); // Imprime cada nombre de libro en la consola
});
```

En este caso, `forEach()` itera sobre cada elemento de la lista `libros` y, en cada iteración, ejecuta una función que toma como argumento el elemento actual, que en este caso es `libro`. Dentro de la función, simplemente imprimimos el nombre del libro.

### <mark style="background-color:orange;">1.5. Consideraciones de las maneras de iterar</mark>&#x20;

Cada una de las tres formas de iterar sobre un array en JavaScript tiene sus propias ventajas y situaciones en las que se adapta mejor:

1. **Bucle `for` clásico**: Es útil cuando necesitas acceder tanto al índice como al elemento del array. Por ejemplo, si necesitas realizar alguna manipulación en el array basada en su índice, esta forma puede ser la más adecuada. Es la opción más básica y versátil, pero puede resultar un poco más verbosa en comparación con los otros métodos.
2. **Bucle `for...in`**: Es útil cuando solo necesitas acceder al índice del array y no te importa el orden de iteración. Este bucle itera sobre todas las propiedades enumerables del objeto, por lo que es importante tener cuidado al usarlo con arrays, ya que también podría iterar sobre propiedades agregadas al prototipo del array. Sin embargo, en la práctica, suele ser más común usar `for...in` con objetos, no con arrays.
3. **Método `forEach()`**: Es útil cuando solo necesitas acceder al valor de cada elemento del array y no te importa el índice. Es una forma más expresiva y legible de iterar sobre un array, especialmente cuando solo necesitas realizar una operación en cada elemento. Además, `forEach()` proporciona una forma más sencilla de manejar el contexto de `this` dentro de la función de iteración.

En resumen, la mejor opción depende de tus necesidades específicas. Si necesitas acceder tanto al índice como al elemento, usa un bucle `for` clásico. Si solo necesitas el índice y no te importa el orden de iteración, puedes usar un bucle `for...in`. Y si solo necesitas acceder al valor de cada elemento, `forEach()` es una opción elegante y fácil de usar.

### <mark style="background-color:orange;">1.6. ¡Practica lo aprendido!</mark>

* **Reto 1.** Crea un bucle `for` que imprima en la consola los números del 1 al 10.
* **Reto 2.** Dado el sigueinte array de nombres de colores, crea un bucle `for` que imprima en la consola cada color de la lista.

```javascript
var colores = ["rojo", "verde", "azul", "amarillo", "naranja"];
```

#### **Soluciones**

```javascript
// Solución Reto 1
for (var i = 0; i <= 10; i++) {
    console.log(i);
}

// Posible solución Reto 2
colores.forEach(function(color) {
    console.log(color); 
});
```

### <mark style="background-color:orange;">1.7. Bibliografía para profundizar en bucles</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">`for`</mark>

* [Enlace 1](https://www.elvisualista.com/2016/04/28/javascript-para-novatos-9o/)
* [Enlace 2](https://lenguajejs.com/fundamentos/bucles-e-iteraciones/bucles-for/)

## <mark style="color:yellow;">2. Bucle</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">`while`</mark>

El bucle `while` en JavaScript se utiliza para repetir una acción **mientras una condición sea verdadera**.

<figure><img src="https://www.elvisualista.com/wp-content/uploads/2016/05/g-8.1-bucle-while.png" alt="" width="375"><figcaption><p>Diagrama bucle while</p></figcaption></figure>

### <mark style="background-color:orange;">2.1. Sintaxis</mark>

La sintaxis consiste en la declaración del bucle con la palabra `while` seguido de la condición entre paréntesis `()`.  La condición es una expresión que se evalúa antes de cada iteración. Si la condición es verdadera, el cuerpo del bucle se ejecuta; de lo contrario, el bucle termina. Después, entre llaves `{}`, irá el cuerpo del bucle: primero con la instrucción y, en segundo lugar, la expresión de actualización.&#x20;

```javascript
while (<condición>) {
    // instrucción a llevar a cabo si la condición se cumple
    // actualización de la variable (expresión de actualización)
}
```

Es importante tener cuidado con los bucles `while` para evitar bucles infinitos, asegurándose de que la condición eventualmente se vuelva falsa para que el bucle pueda finalizar. Por ello, es **importante declarar la expresión de actualización**.

### <mark style="background-color:orange;">2.2. Ejemplo</mark>

<pre class="language-javascript"><code class="lang-javascript">// Declaración de un array
<strong>var libros = [
</strong>    "Medio Rey",
    "Canción de hielo y fuego",
    "Ciudad de Jade",
    "Las mentiras de Locke Lamora",
    "Príncipe Cruel"
];

// Bucle while

var i = 0; // incialización

while (i &#x3C; libros.length) {
    console.log(libros[i]); // Imprime el libro actual
    i++; // Incrementa el valor de i para avanzar al siguiente libro
}
</code></pre>

Se inicializa una variable `i` con el valor 0, que se utilizará como índice para recorrer el array. Después, se inicia un bucle `while` con la condición `i < libros.length`, lo que significa que el bucle se ejecutará mientras `i` sea menor que la longitud del array `libros`.  Dentro del bucle, se imprime en la consola el libro actual utilizando `libros[i]`, donde `i` es el índice actual del bucle. Luego, se incrementa el valor de `i` en 1 para avanzar al siguiente libro en la próxima iteración. Así, este bucle `while` recorre el array `libros` e imprime cada libro en la consola, terminando cuando se ha recorrido todo el array.

### <mark style="background-color:orange;">2.3. ¡Practica lo aprendido!</mark>

Haz bucle `while` que imprima los números del 1 al 5.

#### Solución

```javascript
var i = 1;

while (i <= 5) {
    console.log(i);
    i++;
}
```

## <mark style="color:yellow;">3. Bucle</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">`do ... while`</mark>

\
El bucle `do...while` en JavaScript es similar al bucle `while`, pero con una diferencia fundamental: la evaluación de la condición se realiza después de ejecutar el bloque de código. Esto significa que el bloque de código se ejecutará **al menos una vez**, incluso si la condición es falsa.



<figure><img src="https://www.elvisualista.com/wp-content/uploads/2016/05/g-8.3-bucle-do-while.png" alt="" width="375"><figcaption><p>Diagrama del bucle do while</p></figcaption></figure>

En primer lugar, se ejecuta la instrucción y, seguidamente, se actualiza el valor de la variable. Cuando se llega a la condición, si ésta se cumple, se volverá al comienzo para ejecutar de nuevo el bucle y, si no se cumple, se saldrá del bucle.

Los bucles `do...while` son útiles cuando necesitas ejecutar un bloque de código al menos una vez antes de evaluar una condición. Esto los hace especialmente útiles en situaciones en las que se necesita una ejecución inicial antes de verificar una condición. Por ejemplo, en la programación de interfaces de usuario, a menudo necesitas mostrar un menú al usuario y luego ejecutar diferentes acciones basadas en su selección. Un bucle `do...while` puede ser útil para garantizar que el menú se muestre al menos una vez y luego continuar solicitando la entrada del usuario hasta que elija salir.

### <mark style="background-color:orange;">3.1. Sintaxis</mark>

```javascript
do {
    // instrucción a ejecutar;
    // actualización de la variable;
} while (<condición>)
```

### <mark style="background-color:orange;">3.2. Ejemplo</mark>

```javascript
// Declaración de un array
var libros = [
    "Medio Rey",
    "Canción de hielo y fuego",
    "Ciudad de Jade",
    "Las mentiras de Locke Lamora",
    "Príncipe Cruel"
];

// Bucle while
var i = 0;

do {
    console.log(libros[i]); // Imprime el libro actual
    i++; // Incrementa el valor de i para avanzar al siguiente libro
} while (i < libros.length)
```

### <mark style="background-color:orange;">3.3. Ejemplo: diferencia entre bucle</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">`while`</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">y</mark> <mark style="background-color:orange;"></mark><mark style="background-color:orange;">`do...while`</mark>

Vamos a modificar el ejemplo empleado para que imprima en la consola el mensaje "El código se ha ejecutado." y vamos a dejar sólo dos libros. Ahora, también vamos a poner un valor incial de la variable superior al número de libros que hay en el array.&#x20;

Si ejecutamos el siguiente bucle `while`, el cuerpo del bucle no se llevaría a cabo porque no se cumple con la condición inicial. Vemos que el bucle `while` no se ejecuta:

<figure><img src=".gitbook/assets/image (2).png" alt=""><figcaption></figcaption></figure>

Sin embargo, si ahora ejecutamos un bucle `do...while`, observamos que el cuerpo del bucle se ha ejecutado la primera vez porque va a antes de la condición:

<figure><img src=".gitbook/assets/image (3).png" alt=""><figcaption></figcaption></figure>

### <mark style="background-color:orange;">3.4. ¡Practica lo aprendido!</mark>

Crea un programa que imprima todos los números pares del 1 al 10 empleando un bucle `do...while`.

#### Solución

```javascript
var numero = 1;

do {
    if (numero % 2 === 0) {
        console.log(numero);
    }
    numero++;
} while (numero <= 10);

```

## <mark style="color:yellow;">4. Bibliografía para profundizar en bucles</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">`while`</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">y</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">`do...while`</mark>

* [Enlace 1](https://lenguajejs.com/fundamentos/bucles-e-iteraciones/bucles-while/)
* [Enlace 2](https://www.elvisualista.com/2016/04/14/javascript-para-novatos-8o/)
