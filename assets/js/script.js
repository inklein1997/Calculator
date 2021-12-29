class Calculator {
    constructor(previousOperandElement, currentOperandTextElement) {
        this.previousOperandTextElemenet = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }
    delete() {

    }
    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }
    chooseOperation(operation) {

    }
    compute() {

    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

const numberButtonEl = document.querySelectorAll('[data-number]');
const operationButtonEl = document.querySelectorAll('[data-operation]');
const equalsButtonEl = document.querySelectorAll('[data-equals]');
const invertButtonEl = document.querySelectorAll('[data-invert]');
const clearButtonEl = document.querySelectorAll('[data-clear]');
const deleteButtonEl = document.querySelectorAll('[data-delete]');
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]');
const currentOperandTextElement = document.querySelectorAll('[data-current-operand]');

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement);

numberButtonEl.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
        console.log(calculator.currentOperand)
    })
})

operationButtonEl.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
        console.log(calculator.currentOperand)
    })
})