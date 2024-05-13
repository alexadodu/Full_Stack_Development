---
description: 'Autora: M. Alexandra Dodu'
cover: https://ivanrobles.pro/content/images/2020/05/var_const_let.png
coverY: 30
---

# 👩‍💻 ¿Cuáles son las diferencias entre const, let y var?

`const`, `let` y `var` son palabras clave utilizadas para declarar variables en JavaScript. Las principales diferencias con:

<table><thead><tr><th width="209">Diferencias</th><th align="center">var</th><th align="center">let</th><th align="center">const</th></tr></thead><tbody><tr><td>Reasignación</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="274c">❌</span></td></tr><tr><td>Redeclaración</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="274c">❌</span></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="274c">❌</span></td></tr><tr><td>Scope (alcance)</td><td align="center">función</td><td align="center">bloque</td><td align="center">bloque</td></tr><tr><td>Declaración sin valor</td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="2705">✅</span></td><td align="center"><span data-gb-custom-inline data-tag="emoji" data-code="274c">❌</span></td></tr></tbody></table>

## <mark style="color:yellow;">1. Reasignación</mark>

* `let` y `var`: Las variables declaradas con `let` y `var` pueden ser reasignadas después de su declaración.

<figure><img src=".gitbook/assets/image (7).png" alt=""><figcaption></figcaption></figure>

* `const`: Las variables declaradas con `const` **no** pueden ser reasignadas después de su declaración. Una vez asignado un valor, no puede ser cambiado.

<figure><img src=".gitbook/assets/image (6).png" alt=""><figcaption></figcaption></figure>

## <mark style="color:yellow;">2. Redeclaración</mark>

* `const` y `let`: **No** se pueden redeclarar en el mismo ámbito. Intentar declarar nuevamente una variable con el mismo nombre en el mismo ámbito resultará en un error.

<figure><img src=".gitbook/assets/image (8).png" alt=""><figcaption></figcaption></figure>

* `var`: Puede ser redeclarada en el mismo ámbito, lo que significa que puedes declarar la misma variable dos veces en el mismo ámbito sin causar un error. Sin embargo, es una práctica desaconsejada.

<figure><img src=".gitbook/assets/image (9).png" alt=""><figcaption></figcaption></figure>

## <mark style="color:yellow;">3. Scope (alcance)</mark>

* `const` y `let`: Tienen un **alcance de bloque**, lo que significa que solo están disponibles dentro del bloque en el que fueron declaradas.
* `var`: Tiene un **alcance de función**, lo que significa que están disponibles en toda la función en la que fueron declaradas, incluso antes de la línea donde fueron declaradas (_hoisting_).

## <mark style="color:yellow;">4. Declaración sin valor</mark>

* `var` y `let`: Las variables declaradas con `var` y `let` pueden ser declaradas sin un valor inicial. En este caso, la variable se inicializa con el valor `undefined`.

<figure><img src=".gitbook/assets/image (10).png" alt=""><figcaption></figcaption></figure>

* `const`: La variable deben inicializarse con un valor al momento de la declaración. De lo contrario, se generará un error.

<figure><img src=".gitbook/assets/image (11).png" alt=""><figcaption></figcaption></figure>

## <mark style="color:yellow;">5. Resumen</mark>

En general, se recomienda:

* &#x20;utilizar `const` siempre que sea posible, ya que promueve la inmutabilidad y la seguridad del código.&#x20;
* Se debe utilizar `let` cuando se necesite reasignar el valor de una variable.&#x20;
* El uso de `var` está siendo desalentado en favor de `const` y `let`, debido a sus peculiaridades de ámbito y hoisting, pero aún se encuentra en código legado o en ciertos casos específicos.

## <mark style="color:yellow;">6. Bibliografía para profundizar</mark>

* En este [hilo en Twitter de @lupitacode](https://twitter.com/lupitacode/status/1473832753821011972) vienen en profundidad todas las diferencias que hay entre ellas.&#x20;

