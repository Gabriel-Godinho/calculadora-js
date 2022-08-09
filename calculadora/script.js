function character(num) {
    
    let box = document.getElementById("calc")
    box.value += num
}

function clearBox() {
    
    let caixa = document.getElementById("calc")
    caixa.value = null
}

function getResult() {
    
    let box = document.getElementById("calc")
    let expression = box.value
    
    if (eval(expression) != Infinity) {
        box.value = eval(expression)
    } else {
        box.value = "Erro!"
    }
}

function piValue() {
    
    let box = document.getElementById("calc")
    box.value += 3.14159265358979
}

function squareRoot() {
    
    let box = document.getElementById("calc")
    let expression = box.value

    if (expression >= 0) {
        box.value = Math.sqrt(eval(expression))
    } else {
        box.value = "Imaginary Number"
    }
    
}

function fat() {
    
    let box = document.getElementById("calc")
    let times = 1;

    for (var i = box.value; i > 0; i--) {
        times *= i
    }

    box.value = times
}