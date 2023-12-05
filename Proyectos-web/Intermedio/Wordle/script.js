let palabraUsuario = new Array(5);
let palabraJuego = ["T", "I", "G", "R", "E"]
let posicionArray = 0;
let maxLetters = 5;
let j = 1;
let comparacionPalabras = [];
let counter = 0;
let contadorEliminar = 5;
let bloqueActual = 5;
let bloqueUno = true;
let bloqueDos = true;
let bloqueTres = true;
let bloqueCuatro = true;
let bloqueCinco = true;

function keyClicked(valor) {

    // Si el array llego a su limite o todavia queda espacio 
    if (palabraUsuario.length < maxLetters || palabraUsuario.includes(undefined)) {
        palabraUsuario[posicionArray] = valor; //Agregamos la letra ingresada 
        posicionArray += 1; //Movemos a la siguiente letra
    }

    showLetters();  //Muestra las letras en el tablero
}


/*

Delimitar bloques dentro de un array. Bloque 1: 0-4. Bloque 2: 5-9. Bloque 4: 10-14. Bloque 5: 15-19. Bloque 6: 20-24. 

if(Bloque 1)


*/
// Función para eliminar letras en un array de palabras del usuario
function deleteLetter() {
    const bloques = [bloqueUno, bloqueDos, bloqueTres, bloqueCuatro, bloqueCinco];
    const limites = [5, 10, 15, 20, 25];

    let bloqueEncontrado = false;

    for (let i = 0; i < bloques.length; i++) {
        if (bloques[i] && posicionArray <= limites[i] && (i === 0 || posicionArray > limites[i - 1])) {
            posicionArray -= 1;
            palabraUsuario[posicionArray] = undefined;
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

    for (let i = 0; i <= palabraUsuario.length; i++) { //Recorre todo el array

        //Recorre todos los divs "input1", "input2", etc. Si la letra aun no esta escrita, el valor en vez de
        //ser 'undefined', sera ''. 
        document.getElementById('input' + j).value = palabraUsuario[i] !== undefined ? palabraUsuario[i] : '';
        j += 1; // Siguiente clase "input"
    }
    j = 1 //Cuando se vuelva a mostrar, que sea en la primera fila. Por ejemplo, se muestra PE___. Luego se escribe PER__. 
    //Luego se actualizara el valor de J, para que funcione en las otras lineas. 

}

function showLettersSolution(comparacionPalabras) {
    let j = 1;

    for (let i = 0; i < comparacionPalabras.length; i++) {  //Hacemos que se vea la palabra con los colores.
        let letra = comparacionPalabras[i].letra; //La primera letra
        let color = comparacionPalabras[i].color; // Su color asignado
        
        document.getElementById('input' + j).value = letra; //Se muestra el valor
        document.getElementById('input' + j).style.backgroundColor = color; //Se cambia los estilos

        j += 1; //Se agrega a los inputs necesarios
    }

    if(comparacionPalabras.length == 5){
        bloqueUno = false;
    }
    else if(comparacionPalabras.length == 10){
        bloqueDos = false
    }
    else if(comparacionPalabras.length == 15){
        bloqueTres = false
    }
    else if(comparacionPalabras.length == 20){
        bloqueCuatro = false
    }
    else if(comparacionPalabras.length == 25){
        bloqueCinco = false
    }
    else if(comparacionPalabras.length == 30){
        bloqueSeis = false
    }


}


function enterKey() {

    let k = 0;

    if(posicionArray % 5 == 0){
        for (let i = counter; i < palabraUsuario.length; i++) { //Recorre todo el array
            let letra = palabraUsuario[i];
            let color;
    
            if (letra === palabraJuego[k]) { //Si la posicion de la letra coincide con la del juego 
                color = "#368039";
            } else if (palabraJuego.includes(letra)) { //Si la letra del usuario se encuentra en la del juego
                color = "#e4a81d";
            } else { //Si no es ninguna de las anteriores
                color = "#585f63";
            }
    
            comparacionPalabras.push({ letra, color }); //Agregamos un objeto dentro de un array (por cada letra)
            k += 1;
        }
    
        counter += 5
        console.log(comparacionPalabras);
        showLettersSolution(comparacionPalabras);
        maxLetters += 5;
        console.log(palabraUsuario);
        contadorEliminar += 5;
    }

}
