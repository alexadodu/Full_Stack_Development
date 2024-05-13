---
description: 'Autora: M. Alexandra Dodu'
cover: https://somospnt.com/images/blog/cover/promises_optimizada.jpg
coverY: 114
layout:
  cover:
    visible: true
    size: hero
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

# 👩‍💻 ¿Qué es una promesa en JS?

## <mark style="color:yellow;">1. Definición de promesa</mark>

Una promesa en JavaScript es un objeto que representa el éxito o el fracaso eventual de una operación asincrónica (es decir, sin bloquear el dibujado de la pagina, como son por ejemplo las llamadas a una API). Las promesas se utilizan para manejar tareas asíncronas de una manera más ordenada y legible, evitando el anidamiento excesivo de llamadas de retorno (_callback hell_).

## <mark style="color:yellow;">2. Sincrónico vs asincrónico</mark>

Antes de proseguir, es importante entender qué es eso de asincrónico y cuál es la diferenrcia con un código sincrónico. La diferencia principal entre el código sincrónico y asincrónico es cómo se manejan las operaciones que pueden tomar un tiempo variable para completarse:

<figure><img src=".gitbook/assets/image (18).png" alt="" width="563"><figcaption></figcaption></figure>

**Sincrónico**:

* En el código sincrónico, las operaciones se ejecutan secuencialmente, una después de la otra, en el orden en que están escritas. Cada operación espera a que la anterior se complete antes de comenzar. Si una operación tarda mucho en completarse, bloquea la ejecución de todo el código, lo que puede resultar en tiempos de respuesta lentos y una experiencia de usuario deficiente.
* El código sincrónico es más fácil de entender y de razonar, ya que sigue una secuencia lógica y predecible de ejecución.

**Asincrónico**:

* En el código asíncrono, las operaciones no se ejecutan secuencialmente. En lugar de eso, las operaciones se inician y se ejecutan en segundo plano, mientras que el programa principal continúa ejecutándose.
* Las operaciones asíncronas no bloquean el hilo principal de ejecución, lo que permite que otras operaciones continúen mientras se espera el resultado de la operación asíncrona.
* Las operaciones asíncronas son útiles para tareas que pueden llevar tiempo, como la lectura de archivos, solicitudes de red o consultas a bases de datos, ya que permiten que la aplicación sea más receptiva y no se bloquee mientras se espera el resultado.
* Para manejar el resultado de una operación asíncrona, se utilizan devoluciones de llamada (_callbacks_), promesas o async/await en JavaScript.

Así, gracias a la **asincronía** podemos construir interfaces que no se congelan mientras se espera a que un proceso finalice, por ejemplo un proceso en el servidor, que no sabemos cuándo acabará.

<figure><img src=".gitbook/assets/image (17).png" alt="" width="440"><figcaption></figcaption></figure>

## <mark style="color:yellow;">3. Crear una promesa</mark>

Una promesa puede estar en uno de los tres estados siguientes:

1. **Pendiente (pending)**: Estado inicial, la promesa aún no se ha resuelto ni se ha rechazado.
2. **Cumplida (fulfilled)**: La operación asincrónica se ha completado satisfactoriamente y la promesa se ha resuelto con un valor.
3. **Rechazada (rejected)**: La operación asincrónica ha fallado y la promesa se ha rechazado con un motivo (error).

Las promesas en JavaScript tienen dos métodos principales: `then()` y `catch()`.

* El método `then()` se utiliza para manejar el caso en que la promesa se resuelve exitosamente, es decir, cuando pasa al estado "cumplida".
* El método `catch()` se utiliza para manejar el caso en que la promesa es rechazada, es decir, cuando pasa al estado "rechazada".

<figure><img src=".gitbook/assets/image (20).png" alt="" width="314"><figcaption></figcaption></figure>

## <mark style="color:yellow;">4. Sintaxis de una promesa</mark>

La sintaxis básica de una promesa en JavaScript es la siguiente:

```javascript
const miPromesa = new Promise((resolve, reject) => {
  // Lógica asíncrona aquí
  
  // Si la operación es exitosa
  resolve(resultado); // Se llama a resolve con el resultado
  
  // Si la operación falla
  reject(error); // Se llama a reject con el error
});
```

Luego, para manejar el resultado de la promesa, se utilizan los métodos `then()` y `catch()`:

```javascript
miPromesa
  .then((resultado) => {
    // Manejo del resultado exitoso
  })
  .catch((error) => {
    // Manejo del error
  });
```

## <mark style="color:yellow;">5. Analogía a la vida real</mark>

Vamos con un ejemplo real para poder entender cómo emplear una promesa. Imagina que estás en una oficina y necesitas imprimir un documento importante. Decides enviar el documento a la impresora y esperas a que se imprima correctamente. Aquí hay una analogía con las promesas en JavaScript:

<figure><img src=".gitbook/assets/image (19).png" alt="" width="375"><figcaption></figcaption></figure>

1. **Solicitud de impresión (Estado: Pendiente)**: Enviando el documento a la impresora es similar a iniciar una operación asíncrona en JavaScript. Envías la solicitud de impresión y continúas con otras tareas mientras esperas que se complete la impresión.
2. **Promesa de impresión (Estado: Pendiente)**: La impresora te entrega un recibo o un ticket que te promete que el documento se imprimirá pronto. Esta promesa representa el resultado eventual de la operación de impresión, ya sea que se complete correctamente (documento impreso) o que falle (error en la impresión).
3. **Recibo de impresión (Método: `then`)**: Cuando recibes el recibo de la impresora, usas el método `then` para especificar qué hacer cuando la impresión se complete con éxito.&#x20;
4. **Documento impreso (Estado: Cumplida)**: Una vez que recibes el documento impreso, la promesa se cumple y puedes recoger el documento con confianza. En JavaScript, una promesa está en un estado cumplido cuando se resuelve correctamente.
5. **Recibo de error (Método: `catch`)**: Si la impresora no puede imprimir el documento debido a un error, recibes un recibo de error en lugar del recibo de impresión.&#x20;
6. **Error de impresión (Estado: Rechazada)**: Si ocurre un error durante la impresión, la promesa se rechaza y recibes un mensaje de error en el recibo. En JavaScript, una promesa está en un estado rechazado cuando se produce un error durante su ejecución.

## <mark style="color:yellow;">6. Ejemplo</mark>

Por ejemplo, el código a implementar según la [analogía de la impresora](que-es-una-promesa-en-js.md#id-5.-analogia-a-la-vida-real) podría ser:

```javascript
// Paso 1: Solicitud de impresión (Estado: Pendiente)
const solicitudDeImpresion = new Promise((resolve, reject) => {
  
  // Simular el tiempo de impresión (2 segundos)
  setTimeout(() => {
    
    // Si la impresión es exitosa
    const exito = true;
    if (exito) {
      
      // Paso 4: Documento impreso (Estado: Cumplido)
      resolve('Recibo de impresión: Documento impreso correctamente');
    } else {
      
      // Paso 6: Error de impresión (Estado: Rechazado)
      reject(new Error('Recibo de error: No se pudo imprimir el documento'));
    }
  }, 2000);
});


solicitudDeImpresion
// Paso 3: Recibo de impresión (Método: then)
.then((mensaje) => {
  console.log(mensaje);
})
// Paso 5: Recibo de error (Método: catch)
.catch((error) => {
  console.error(error.message);
});
```

## <mark style="color:yellow;">7. Bibligrafía para profundizar</mark>

* [Enlace 1](https://matiashernandez.dev/blog/post/wtf-que-es-una-promesa-en-javascript)
* [Enlace 2](https://davidinformatico.com/promesas-en-javascript)
