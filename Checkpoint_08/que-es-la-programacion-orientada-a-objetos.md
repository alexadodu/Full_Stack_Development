---
description: 'Autora: M. Alexandra Dodu'
cover: https://img-c.udemycdn.com/course/750x422/3820290_4cfe.jpg
coverY: 0
---

# 👩‍💻 ¿Qué es la programación orientada a objetos?

## <mark style="color:yellow;">1. Definición</mark>

La **programación orientada a objetos (POO)** es un paradigma de programación que se basa en el concepto de "objetos", los cuales son entidades que pueden contener datos en forma de campos (también llamados atributos o propiedades) y comportamientos en forma de funciones (también llamadas métodos). Los objetos son instancias de clases, que son plantillas que definen la estructura y el comportamiento de los objetos.&#x20;

<mark style="background-color:yellow;">Te recuerdo  que ya he tratado el concepto de POO en al hablar de las clases en Python, donde comento un</mark> [<mark style="background-color:yellow;">ejemplo muy fácil</mark>](../Checkpoint\_06/checkpoint06.md#1-%C2%BFPara-qu%C3%A9-usamos-Clases-en-Python?) <mark style="background-color:yellow;">para entenderlo. Te aconsejo que vuelvas a mirarlo.</mark>

A continuación te comparto un diagrama que ayuda a entender visualmente el concepto de POO para que quede del todo claro:&#x20;

<figure><img src=".gitbook/assets/image (16).png" alt="" width="563"><figcaption></figcaption></figure>

La POO se centra en cuatro conceptos fundamentales:

1. **Abstracción**: Permite representar conceptos del mundo real en forma de objetos, simplificando su complejidad al centrarse en los aspectos relevantes.
2. **Encapsulamiento**: Oculta los detalles internos de un objeto y expone una interfaz clara para interactuar con él, promoviendo la modularidad y el reuso de código.
3. **Herencia**: Permite que una clase herede características y comportamientos de otra clase, facilitando la reutilización y la organización jerárquica del código.
4. **Polimorfismo**: Permite que un objeto pueda comportarse de diferentes maneras dependiendo del contexto en el que se utilice, mediante la implementación de métodos con el mismo nombre pero con diferentes comportamientos.

## <mark style="color:yellow;">2. Terminología</mark>

Así, la terminología a tener clara es:&#x20;

* **Clase**: Define las características del Objeto.
* **Objeto**: Una instancia de una Clase.
* **Propiedad**: Una característica del Objeto, como el color.
* **Método**: Una capacidad del Objeto, como caminar.
* **Constructor**: Es un método llamado en el momento de la creación de instancias.
* **Herencia**: Una Clase puede heredar características de otra Clase.
* **Encapsulamiento**: Una Clase sólo define las características del Objeto, un Método sólo define cómo se ejecuta el Método.
* **Abstracción**: La conjunción de herencia compleja, métodos y propiedades que un objeto debe ser capaz de simular en un modelo de la realidad.
* **Polimorfismo**: Diferentes Clases podrían definir el mismo método o propiedad.

## <mark style="color:yellow;">3. Definición de características del Objeto: Clases</mark>

Aunque JavaScript es un lenguaje orientado a objetos, la forma en que implementa las clases es diferente de otros lenguajes.

### <mark style="background-color:orange;">3.1. Sintaxis</mark>

La sintaxis básica para definir una clase en JavaScript es la siguiente:

```java
class NombreDeLaClase {
  constructor(parametros) {
    // Constructor: se ejecuta al crear una nueva instancia de la clase
    this.atributo = parametros;
  }

  metodo() {
    // Definición de métodos de la clase
  }
}
```

* `class NombreDeLaClase`: Define una nueva clase con el nombre especificado.
* `constructor(parametros)`: Método especial que se llama automáticamente cuando se crea una nueva instancia de la clase. Se utiliza para inicializar las propiedades del objeto.
* `this.atributo = parametros`: Dentro del constructor, `this` se refiere al objeto actual que se está creando. Se utiliza para asignar valores a las propiedades del objeto.
* `metodo()`: Define un método en la clase, que puede ser llamado en las instancias de la clase para realizar ciertas acciones.

### <mark style="background-color:orange;">3.2. Ejemplo sencillo</mark>

```java
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar() {
    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
  }
}

const persona1 = new Persona('Alexa', 30); // se crea una nueva instancia empleando `new`

persona1.saludar(); // Hola, mi nombre es Alexa y tengo 30 años.

```

### <mark style="background-color:orange;">3.3. Método estático</mark>

En JavaScript, un método estático es un método que se define en una clase pero no está vinculado a las instancias individuales de esa clase. En cambio, está vinculado a la clase misma. Esto significa que un método estático se llama en la propia clase, no en una instancia de la clase.

Un ejemplo fácil para entenderlo:

```javascript
class Calculadora {
  static sumar(a, b) {
    return a + b;
  }

  static restar(a, b) {
    return a - b;
  }
}

// Llamando a un método estático
console.log(Calculadora.sumar(5, 3)); // 8
console.log(Calculadora.restar(10, 4)); // 6
```

Ahora vamos con un ejemplo un poco más complejo, con métodos de instancia y estáticos. En rl siguiente código, la clase `Animal` tiene:

* un método de instancia `imprimirDetalles` para imprimir los detalles del animal
* un método estático `saludar` para saludar al mundo&#x20;
* y un método estático `esDomestico` para verificar si un animal es doméstico.&#x20;

Después, creamos una instancia de `Animal`, llamamos al método de instancia `imprimirDetalles`, al método estático `saludar` y usamos el método estático `esDomestico` para verificar si el animal es doméstico.

```javascript
class Animal {
  constructor({ nombre, tipo = "desconocido" }) {
    this.tipo = tipo;
    this.nombre = nombre;
  }

  // Método de instancia para imprimir detalles
  imprimirDetalles() {
    console.log(`El ${this.tipo} se llama ${this.nombre}`);
  }

  // Método estático para saludar al mundo
  static saludar() {
    console.log('¡Hola mundo animal!');
  }

  // Método estático para verificar si un animal es doméstico
  static esDomestico(animal) {
    return (animal.tipo === 'domestico');
  }
}

// Crear una instancia de Animal
const animal1 = new Animal({ nombre: 'Rex', tipo: 'domestico' });

// Llamar al método de instancia para imprimir detalles
animal1.imprimirDetalles(); // El domestico se llama Rex

// Llamar al método estático para saludar al mundo
Animal.saludar(); // ¡Hola mundo animal!

// Verificar si el animal es doméstico
console.log(Animal.esDomestico(animal1)); // true
```

## <mark style="color:yellow;">4. ¡Pon en práctica lo aprendido!</mark>

Crea una clase llamada `Libro` que tenga dos propiedades: `titulo` y `autor`. La clase debe tener un método llamado `mostrarInfo` que imprima en la consola un mensaje con el título y el autor del libro. Luego, crea una instancia de `Libro` con el título "Cien años de soledad" y el autor "Gabriel García Márquez", y llama al método `mostrarInfo` para imprimir el mensaje.

### Solución

<pre class="language-javascript"><code class="lang-javascript"><strong>class Libro {
</strong>    constructor(titulo, nombre) {
        this.titulo = titulo;
        this.nombre = nombre;
    }
    
    mostrarInfo() {
        console.log(`El libro ${this.titulo} ha sido escrito por ${this.nombre}.`)
    }
}

// Crear una instancia de Libro
const libro1 = new Libro('Cien años de soledad', 'Gabriel García Márquez');

// Llamar al método mostrarInfo
libro1.mostrarInfo(); // El libro Cien años de soledad ha sido escrito por Gabriel García Márquez.
</code></pre>

## <mark style="color:yellow;">5. Bibliografía para profundizar</mark>

* [Enlace 1](https://www.freecodecamp.org/espanol/news/programacion-orientada-a-objectos-en-javascript-explicado-con-ejemplos/)
* [Enlace 2](https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects/Classes\_in\_JavaScript)
