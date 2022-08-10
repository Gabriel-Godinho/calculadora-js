function character(num) {
    
    let box = document.getElementById("calc")
    box.value += num
}

function clearBox() {
    
    let box = document.getElementById("calc")
    box.value = null
}

function getResult() {
    
    let box = document.getElementById("calc")
    let expression = box.value.replace("%", "/100")
    
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

    if (eval(expression) >= 0) {
        box.value = Math.sqrt(eval(expression))
    } else {
        box.value = "Imaginary Number!"
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