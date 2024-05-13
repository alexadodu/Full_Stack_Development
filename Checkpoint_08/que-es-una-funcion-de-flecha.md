---
description: 'Autora: M. Alexandra Dodu'
cover: https://i.ytimg.com/vi/TmWBSMu4pm4/maxresdefault.jpg
coverY: -271
---

# 👩‍💻 ¿Qué es una función de flecha?

## <mark style="color:yellow;">1. Definición y características</mark>

Una función de flecha es una forma más concisa de escribir funciones en JavaScript.

Algunas características clave de las funciones de flecha son:

1. **Sintaxis concisa**: La sintaxis de las funciones de flecha es más breve y clara que la de las [funciones tradicionales](../Checkpoint\_07/checkpoint07\_teoria.md#6-cu%C3%A1l-es-la-diferencia-entre-una-declaraci%C3%B3n-de-funci%C3%B3n-y-una-expresi%C3%B3n-de-funci%C3%B3n), lo que las hace ideales para expresiones de función más simples.
2. Las funciones de flecha no tienen su propio [`this`](../Checkpoint\_07/checkpoint07\_teoria.md#7-qu%C3%A9-es-la-palabra-clave-this-en-js), lo que significa que heredan el valor de `this` del ámbito circundante en el que fueron definidas. Esto evita algunos problemas comunes con el uso de `this` en las funciones tradicionales.
3. **No** [**`arguments`**](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/arguments): Las funciones de flecha no tienen su propio objeto `arguments`, por lo que no pueden acceder a los argumentos pasados a la función. Sin embargo, pueden acceder a los argumentos utilizando el operador rest (`...`).

Por tanto, las funciones de flecha son una adición útil a JavaScript que simplifica la sintaxis y aborda algunos problemas de manejo de contexto (`this`) en las funciones tradicionales. Son especialmente útiles para expresiones de función simples y operaciones que no requieren el uso de `this` o `arguments`.

## <mark style="color:yellow;">2. Sintaxis</mark>

```javascript
// Función de flecha sin parámetros
const miFuncion = () => {
    // Cuerpo de la función
};

// Función de flecha con un parámetro
const miFuncionConParametro = (parametro) => {
    // Cuerpo de la función
};

// Función de flecha con múltiples parámetros
const miFuncionConMultiplesParametros = (parametro1, parametro2) => {
    // Cuerpo de la función
};

// Función de flecha con cuerpo de una sola línea (retorno implícito)
const funcionDeUnaLinea = () => valor;
```

## <mark style="color:yellow;">3. Ejemplos</mark>

Función de flecha sin parámetros:

```javascript
// ANTES - Declaración de función
function saludar() {
    console.log("¡Hola!");
}

saludar(); // ¡Hola!


// AHORA -  Función de flecha sin parámetros
const saludar = () => {
    console.log("¡Hola!");
};

saludar(); // ¡Hola!


// De forma más compacta
const saludar = () => console.log("¡Hola!");

saludar(); // ¡Hola!
```

Función de flecha con un parámetro:

```javascript
// ANTES - Declaración de función
function duplicar(numero) {
    return numero * 2;
};

console.log(duplicar(5)); // 10


// AHORA - Función de flecha con un parámetro
const duplicar = (numero) => {
    return numero * 2;
};

console.log(duplicar(5)); // 10


// De forma más compacta
const duplicar = (numero) => numero * 2;

console.log(duplicar(5)); // 10
```

Función de flecha con múltiples parámetros:

```javascript
// ANTES - Declaración de función
function suma(a, b) {
    return a + b;
};

console.log(suma(3, 4)); // 7


// AHORA - Función de flecha con múltiples parámetros
const suma = (a, b) => {
    return a + b;
};

console.log(suma(3, 4)); // 7


// De forma más compacta
const suma = (a, b) => a + b;

console.log(suma(3, 4)); // 7
```

<figure><img src=".gitbook/assets/image (12).png" alt="" width="375"><figcaption></figcaption></figure>

## <mark style="color:yellow;">4. Cómo funcionan las funciones de flecha con</mark> <mark style="color:yellow;"></mark><mark style="color:yellow;">`this`</mark>

Las funciones de flecha en JavaScript tienen un comportamiento único con respecto al contexto de `this`. A diferencia de las funciones regulares, las funciones de flecha no tienen su propio valor `this`. En cambio, heredan el valor `this` del contexto en el que fueron definidas.

Veamos un ejemplo sencillo para entenderlo mejor:

```javascript
const objeto = {
  nombre: "Alexa",
  saludar: function() {
    console.log(`Hola, soy ${this.nombre}`);
  },
  despedirse: () => {
    console.log(`Adiós, soy ${this.nombre}`);
  }
};

objeto.saludar();    // Hola, soy Alexa
objeto.despedirse(); // Adiós, soy undefined
```

En este ejemplo, `objeto` contiene dos métodos: `saludar` y `despedirse`. `saludar` es una función regular, mientras que `despedirse` es una función de flecha. Cuando llamamos a `objeto.saludar()`, `this` dentro de la función apunta al objeto `objeto`, por lo que imprime "Hola, soy Alexa" correctamente. Sin embargo, cuando llamamos a `objeto.despedirse()`, `this` dentro de la función de flecha apunta al contexto global en lugar de apuntar al objeto `objeto`. Por lo tanto, imprime "Adiós, soy undefined".

Es importante tener en cuenta este comportamiento al utilizar funciones de flecha en métodos de objetos, ya que pueden producir resultados inesperados si se espera que `this` haga referencia al objeto en el que están definidas. En general, las funciones de flecha son más adecuadas para funciones que no dependen del contexto `this`.

## <mark style="color:yellow;">5. ¡Pon a prueba lo aprendido!</mark>

Escribe una función de flecha llamada `areaRectangulo` que tome dos parámetros, `base` y `altura`, y devuelva el área del rectángulo (base \* altura).

### Solución

```javascript
const areaRectangulo = (base, altura) => {
    return base * altura;
}

// De forma compacta
const areaRectangulo = (base, altura) => base * altura;
```

## <mark style="color:yellow;">6. Bibliografía para profundizar</mark>

* [Enlace 1](https://www.freecodecamp.org/espanol/news/cuando-y-por-que-debes-usar-las-funciones-flecha-de-es6-y-cuando-no/)
* [Enlace 2](https://www.w3schools.com/js/js\_arrow\_function.asp)
