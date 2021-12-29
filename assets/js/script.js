var numberButtonEl = document.querySelectorAll('[data-number]');
var operationButtonEl = document.querySelectorAll('[data-operation]');
var clearButtonEl = document.querySelector('[data-clear]');
var equalsButtonEl = document.querySelector('[data-equals]');
var percentButtonEl = document.querySelector('[data-percentile]');
var invertButtonEl = document.querySelector('[data-invert]');
var displayEl = document.getElementById('display');

var num1 = '';
var operation = "";
var num2 ='';
var result

//Functions
function appendNumber(number) {
    if (num1.length == 9) {
        return
    } else if (number == '.' && num1.includes('.')) {
        return
    }
    num1 = num1.toString() + number.toString();
}

function operationFunction(op) {
    if (result != "") {
        result = num2;
    }
    operation = op.toString();
    num2 = num1;
    num1 = "";
}

function compute() {
    
    if (operation == "+") {
        result = Number(num1) + Number(num2);
    } else if (operation == "-") {
        result = Number(num1) - Number(num2)
    } else if (operation == "x") {
        result = Number(num1) * Number(num2)
    } else if (operation == "÷") {
        result = Number(num2) / Number(num1)
    }

    num2 = result

    console.log(typeof(num2))
    console.log(num2.toString().length > 9)
    if (num2.toString().length > 9) {
        num2 = num2.toExponential();
    }
    displayEl.textContent = num2

}

function clear() {
    num2 = ""
    num1 = ""
    result = ""
    operation = ""
}

function updateDisplay() {
    console.log(typeof(num1))
    if (num1.length > 9) {
        num1 = Number(num1).toExponential();
    }
    displayEl.textContent = num1
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
})

clearButtonEl.addEventListener('click', () => {
    clear();
    updateDisplay();
})

invertButtonEl.addEventListener('click', () => {
    
    if (num1.search("-") == -1) {
        num1 = "-" + num1;
    } else if (num1.search("-") != -1){
        num1 = num1.replace("-","")
    }
    updateDisplay();
})

percentButtonEl.addEventListener('click', () =>{
    num1 = num1/100;
    if (num1.length > 10) {
        num1.toExponential();
    }
    updateDisplay();
}
)


// num1 is inputted first
//num2 is inputted second

//when equaled, num2 is added to result
//if result exists, num1 is added to it.