var numberButtonEl = document.querySelectorAll('[data-number]');
var operationButtonEl = document.querySelectorAll('[data-operation]');
var clearButtonEl = document.querySelector('[data-clear]');
var equalsButtonEl = document.querySelector('[data-equals]');
var percentButtonEl = document.querySelector('[data-percent]');
var invertButtonEl = document.querySelector('[data-invert]');
var displayEl = document.getElementById('display');

var operand = '';
var operation = '';
var storedOperand ='';

//Functions
function appendNumber(number) {
    if (operand.length == 9) {
        return
    } else if (number == '.' && operand.includes('.')) {
        return
    } 
    operand = operand.toString() + number.toString();
}

function updateDisplay() {
    displayEl.textContent = operand
}


//Event Listeners
numberButtonEl.forEach(button => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText);
        updateDisplay();
    })
})