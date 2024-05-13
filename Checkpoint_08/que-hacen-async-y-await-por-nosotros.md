---
description: 'Autora: M. Alexandra Dodu'
cover: https://files.ably.io/ghost/prod/2021/12/ably-js-async-await@2x.png
coverY: 0
---

# 👩‍💻 ¿Qué hacen async y await por nosotros?

## <mark style="color:yellow;">1. Definiciones</mark>

`async` y `await` son características de JavaScript que nos permiten escribir código asincrónico de una manera más limpia y legible, especialmente cuando trabajamos con [promesas](que-es-una-promesa-en-js.md).

* `async`: La palabra clave `async` se coloca antes de una función para indicar que la función devuelve una promesa. Esto significa que la función siempre devolverá una promesa, incluso si no se usa la palabra clave `return`. Además, dentro de una función `async`, podemos utilizar la palabra clave `await` para esperar la resolución de una promesa.
* `await`: La palabra clave `await` solo se puede utilizar dentro de una función `async`. Cuando usamos `await` antes de una promesa, la ejecución del código se detiene hasta que la promesa se resuelve o se rechaza. Esto hace que el código sea más legible y nos permite escribir código asincrónico de una manera que parece sincrónica.

## <mark style="color:yellow;">2. Sintaxis</mark>

La sintaxis con `async` y `await` en JavaScript es bastante sencilla. Un ejemplo:

```javascript
async function miFuncion() {
  try {
    // Esperar a que la promesa se resuelva
    const resultado = await promesa;

    // Hacer algo con el resultado
    console.log(resultado);
  } catch (error) {
    // Manejar errores si la promesa es rechazada
    console.error(error);
  }
}
```

En este ejemplo:

* `async function`: Declaramos una función como `async`, lo que significa que devuelve una promesa.
* `await promesa`: Utilizamos `await` para esperar a que la promesa `promesa` se resuelva o sea rechazada. Mientras tanto, la ejecución de la función se detiene aquí.
* `try { ... } catch (error) { ... }`: Utilizamos un bloque `try...catch` para manejar cualquier error que ocurra durante la ejecución de la promesa. Si la promesa se resuelve con éxito, el resultado se captura en la variable `resultado`; de lo contrario, se captura el error. Es opcional emplearlo.

## <mark style="color:yellow;">3. Ejemplo</mark>

<figure><img src=".gitbook/assets/image (22).png" alt=""><figcaption></figcaption></figure>

En este ejemplo, primero creamos una promesa `promise` que se resolverá después de 4 segundos usando `setTimeout`. Dentro de la función del constructor de la promesa, `resolve` se llama después de 4 segundos, lo que significa que la promesa se resuelve con el valor `'Promise resolved'`.

Luego definimos una función asíncrona `asyncFunc`. Dentro de esta función, usamos la palabra clave `await` para esperar a que la promesa se resuelva. Cuando la promesa se resuelve, el valor resuelto se asigna a la variable `result`. Luego, imprimimos este valor en la consola junto con la cadena `'hello'`.

Finalmente, llamamos a la función asíncrona `asyncFunc()`. Cuando se ejecuta esta función, la ejecución se detiene en la línea con `await promise`, y el control se devuelve al llamante hasta que la promesa se resuelve después de 4 segundos. Una vez que la promesa se resuelve, la ejecución continúa desde esa línea, y `'Promise resolved'` se imprime en la consola, seguido de `'hello'`.

<figure><img src=".gitbook/assets/image (23).png" alt=""><figcaption></figcaption></figure>

## <mark style="color:yellow;">4. Bibliografía para profundizar</mark>

* [Enlace 1](https://es.javascript.info/async-await)
* [Enlace 2](https://lenguajejs.com/javascript/asincronia/async-await/)
