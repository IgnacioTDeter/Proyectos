
function pressedButton(valor){
    document.getElementById('resultado').value += valor;
}

function calcular(){
    const valorPantalla = document.getElementById('resultado').value;
    const resultado = eval(valorPantalla);
    document.getElementById('resultado').value = resultado;
}

function borrarTodo(){
    document.getElementById('resultado').value = '';
}