// Adiciona o caractere do botão na caixa de texto
function character(num) {
    
    let box = document.getElementById("calc")
    box.value += num

}

// Limpar a caixa de texto
function clearBox() {
    
    let box = document.getElementById("calc")
    box.value = null

}

// Resultado
function getResult() {
    
    let box = document.getElementById("calc")
    let expression = box.value.replace("%", "/100")
    
    if (eval(expression) != Infinity) {
        box.value = eval(expression)
    } else {
        box.value = "Erro!"
    }

}

// Valor de Pi
function piValue() {
    
    let box = document.getElementById("calc")
    box.value += Math.PI

}

// Raiz quadrada
function squareRoot() {
    
    let box = document.getElementById("calc")
    let expression = box.value

    if (eval(expression) >= 0) {
        box.value = Math.sqrt(eval(expression))
    } else {
        box.value = "Número Imaginário!"
    }
    
}

// Fatorial
function fat() {
    
    let box = document.getElementById("calc")
    let times = 1;

    for (var i = box.value; i > 0; i--) {
        times *= i
    }

    box.value = times

}

// Seno não exato
function sinValue() {

    let box = document.getElementById("calc")
    let radius = eval(box.value) * Math.PI/180;

    box.value = Math.sin(radius)

}

// Cosseno não exato
function cosValue() {

    let box = document.getElementById("calc")
    let radius = eval(box.value) * Math.PI/180;

    box.value = Math.cos(radius)

}

// Tangente não exata
function tanValue() {

    let box = document.getElementById("calc")
    let radius = eval(box.value) * Math.PI/180;

    box.value = Math.tan(radius)

}

// Número de Euler
function eulerValue() {

    let box = document.getElementById("calc")
    box.value += Math.E

}