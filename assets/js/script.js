class Calculator {
    constructor(previousOperandElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
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
        if (this.currentOperand === '') return
        if (this.previousOperand!== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = ''
    }
    compute() {
        let computation
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return
        switch(this.operation) {
            case '+':
                computation = prev + current
                break
            case '-':
                    computation = prev + current
                    break
            case '*':
                computation = prev + current
                break
            case '÷':
                computation = prev + current
                break
            default: 
                return
        }
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = '';
    }
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
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

equalsButtonEl.addEventListener('click', () => {
    calculator.compute();
    calculator.updateDisplay();
})