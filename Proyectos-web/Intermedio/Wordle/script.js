let palabraUsuario = new Array(5).fill(undefined);
let palabraJuego = ["A", "M", "I", "G", "O"];

let posicionArray = 0;
let maxLetters = 5;
let comparacionPalabras = [];
let counter = 0;
let contadorEliminar = 5;
let bloques = [true, true, true, true, true];

function keyClicked(valor) {

    if (palabraUsuario.length < maxLetters || palabraUsuario.includes(undefined)) {
        palabraUsuario[posicionArray++] = valor;
    }
    showLetters();
}

function deleteLetter() {
    const limites = [5, 10, 15, 20, 25];
    let bloqueEncontrado = false;

    for (let i = 0; i < bloques.length; i++) {
        if (bloques[i] && posicionArray <= limites[i] && (i === 0 || posicionArray > limites[i - 1])) {
            palabraUsuario[--posicionArray] = undefined;
            bloqueEncontrado = true;
            break;
        }
    }

    if (!bloqueEncontrado) {
        console.log("No se puede eliminar");
    }

    showLetters();
}

function showLetters() {
    for (let i = 0; i < palabraUsuario.length; i++) {
        let currentInput = document.getElementById('input' + (i + 1));

        if (currentInput) {
            currentInput.value = palabraUsuario[i] !== undefined ? palabraUsuario[i] : '';
        } else {
            console.error('Elemento no encontrado para id: ' + 'input' + (i + 1));
        }
    }
}

function showLettersSolution(comparacionPalabras) {
    for (let i = 0, j = 1; i < comparacionPalabras.length; i++, j++) {
        let letra = comparacionPalabras[i].letra;
        let color = comparacionPalabras[i].color;

        let currentInput = document.getElementById('input' + j);
        if (currentInput) {
            currentInput.value = letra;
            currentInput.style.backgroundColor = color;
        }
    }

    bloques[comparacionPalabras.length / 5 - 1] = false;
}

function enterKey() {
    // Verifica si la posición actual en el array es múltiplo de 5
    if (posicionArray % 5 === 0) {
        // Inicia un bucle que recorre desde 'counter' hasta el final del array 'palabraUsuario'
        for (let i = counter, k = 0; i < palabraUsuario.length; i++, k++) {
            // Obtiene la letra actual del array 'palabraUsuario' en la posición 'i'
            let letra = palabraUsuario[i];

            // Determina el color según si la letra coincide con la letra en la misma posición de 'palabraJuego'
            // Utiliza tres colores diferentes: verde (#368039) para coincidencias, amarillo (#e4a81d) si la letra está en 'palabraJuego',
            // y gris oscuro (#585f63) si no es ninguna de las anteriores.
            let color = letra === palabraJuego[k] ? "#368039" : (palabraJuego.includes(letra) ? "#e4a81d" : "#585f63");

            // Agrega un objeto al array 'comparacionPalabras' que contiene la letra actual y su color
            comparacionPalabras.push({ letra, color });
        }

        // Incrementa 'counter' en 5 para el próximo bloque de comparación
        counter += 5;

        // Muestra en la consola el array 'comparacionPalabras' después de la comparación
        console.log(comparacionPalabras);

        // Llama a la función 'showLettersSolution' con el array 'comparacionPalabras' como argumento
        showLettersSolution(comparacionPalabras);

        // Aumenta el número máximo de letras permitidas en 'palabraUsuario' en 5
        maxLetters += 5;

        // Incrementa el contador de letras eliminadas en 5
        contadorEliminar += 5;
    }

}


