// Checkpoint 8 - Ejercicios Prácticos
// Autora: M. Alexandra Dodu


// 1. Cree un bucle for en JS que imprima cada nombre en esta lista. 
var miLista = ['velma', 'exploradora', 'jane', 'john', 'harry']

for (var indice in miLista) {
    console.log(miLista[indice]);
}

// 2. Cree un bucle while que recorra la misma lista y también imprima los nombres. 
// Nota: Recuerda crear un contador para que el ciclo no sea infinito.
var indice = 0

while (indice < miLista.length) {
    console.log(miLista[indice]);
    indice++;
}

// 3. Cree una función de flecha que devuelva "Hola mundo".
var saludar = () => {
    console.log("Hola mundo");
};

saludar(); 