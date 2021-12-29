var numberButtonEl = document.querySelectorAll('[data-number]');
var operationButtonEl = document.querySelectorAll('[data-operation]');
var clearButtonEl = document.querySelector('[data-clear]');
var equalsButtonEl = document.querySelector('[data-equals]');
var percentButtonEl = document.querySelector('[data-percent]');
var invertButtonEl = document.querySelector('[data-invert]');
var displayEl = document.getElementById('display');

var operand = '';
var operation = "";
var storedOperand ='';
var result

//Functions
function appendNumber(number) {
    if (operand.length == 9) {
        return
    } else if (number == '.' && operand.includes('.')) {
        return
    }
    operand = operand.toString() + number.toString();
}

function operationFunction(op) {
    if (result != "") {
        result = "";
        storedOperand = operand;
    }
    operation = op.toString();
    storedOperand = operand;
    operand = "";
}

function compute() {
    console.log(typeof(Number(operand)))
    console.log(operation)
    console.log(operand)
    console.log(storedOperand)
    
    if (operation == "+") {
        result = Number(operand) + Number(storedOperand);
        console.log("adding!");
    } else if (operation == "-") {
        result = Number(operand) - Number(storedOperand)
        console.log("subtracting!");
    } else if (operation == "x") {
        result = Number(operand) * Number(storedOperand)
        console.log("multiplying!");
    } else if (operation == "÷") {
        result = Number(operand) / Number(storedOperand)
        console.log("dividing!");
    }
    operand = result
}

function clear() {
    storedOperand = ""
    operand = ""
    result = ""
    operation = ""
}

function updateDisplay() {
    displayEl.textContent = operand
}


//Event Listeners
numberButtonEl.forEach(button => {
    button.addEventListener('click', () => {
        if (result != "") {
           clear();
        }
        appendNumber(button.innerText);
        updateDisplay();
    })
})

operationButtonEl.forEach(button => {
    button.addEventListener('click', () => {
        operationFunction(button.innerText);
        console.log(button.innerText)
       
    })
})

equalsButtonEl.addEventListener('click', () => {
    compute();
    updateDisplay();
})

clearButtonEl.addEventListener('click', () => {
    clear();
    updateDisplay();
})

invertButtonEl.addEventListener('click', () => {
    
    if (operand.search("-") == -1) {
        operand = "-" + operand;
    } else if (operand.search("-") != -1){
        operand = operand.replace("-","")
    }
    updateDisplay();
})