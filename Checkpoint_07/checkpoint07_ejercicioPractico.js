/* Cree una función JS que acepte 4 argumentos. Suma los dos primeros argumentos, 
luego los dos segundos y multiplícalos. Si el número creado es mayor que 50, 
la consola registra "¡El número es mayor que 50!". Si es más pequeño, la consola 
registra "¡El número es menor que 50!" */


function numberOperation(a, b, c, d) {
    // Comprobación de que todos los argumentos sean números
    if ( isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) ) {
        return new Error ("Todos los argumentos deben ser numéricos.");
    }

    // Operación a realizar con los números
    if ((a + b) * ( c + d) > 50) {
        console.log("¡El número es mayor que 50!");
    } else {
        console.log("¡El número es menor que 50!");
    }
}

console.log(numberOperation('a', 2, 3, 4)); // Error: Todos los argumentos deben ser numéricos.
numberOperation(1, 2, 3, 4); // ¡El número es menor que 50!
numberOperation(1, 2, 3, 400); // ¡El número es mayor que 50!