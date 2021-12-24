var currentOperandEl = document.querySelector("#current");
var previousOperandEl = document.querySelector("#previous")
var oneEl = document.querySelector("#one")
var twoEl = document.querySelector("#two")
var threeEl = document.querySelector("#three")
var fourEl = document.querySelector("#four")
var fiveEl = document.querySelector("#five")
var sixEl = document.querySelector("#six")
var sevenEl = document.querySelector("#seven")
var eightEl = document.querySelector("#eight")
var nineEl = document.querySelector("#nine")
var zeroEl = document.querySelector("#zero")
var invertEl = document.querySelector("#invert")
var clearEl = document.querySelector("#clear")
var deleteEl = document.querySelector("#delete")
var equalEl = document.querySelector("#equal")
var decimalEl = document.querySelector("#decimal")
var plusEl = document.querySelector("#plus")
var divideEl = document.querySelector("#divide")
var timesEl = document.querySelector("#times")
var minusEl = document.querySelector("#minus")



//if user selects numbers, concatenate numbers into one string
//convert one string when user selects operation
//when operation is selected, move currentOperand to previousOperand.


//if equals is selected, display result

//when del is selected, remove last character from string

//when C is selected, reset function and display

var currentOperand

function calculate() {
    currentOperandEl.textContent = result;
    previousOperandEl.textContent = currentOperand.value;
}

let currentString = "";
console.log(currentString)

console.log(currentOperand)

oneEl.addEventListener("click", function() {
    let string1 = "1";
    let currentOperand = currentString.concat(string1);
    return currentOperand;
}
)

twoEl.addEventListener("click", function(event) {
    currentString = currentString.concat(2)
    }
)

threeEl.addEventListener("click", function(event) {
    currentString = currentString.concat(3)
    }
)

fourEl.addEventListener("click", function(event) {
    currentString = currentString.concat(4)
    }
)

fiveEl.addEventListener("click", function(event) {
    currentString = currentString.concat(5)
    }
)

sixEl.addEventListener("click", function(event) {
    currentString = currentString.concat(6)
    }
)

sevenEl.addEventListener("click", function(event) {
    currentString = currentString.concat(7)
    }
)

eightEl.addEventListener("click", function(event) {
    currentString = currentString.concat(8)
    }
)

nineEl.addEventListener("click", function(event) {
    currentString = currentString.concat(9)
    }
)

zeroEl.addEventListener("click", function(event) {
    currentString = currentString.concat(0)
    }
)

plusEl.addEventListener("click", function(event) {
    
    }
)

minusEl.addEventListener("click", function(event) {
    
    }
)

timesEl.addEventListener("click", function(event) {
    
    }
)

divideEl.addEventListener("click", function(event) {
    
    }
)

invertEl.addEventListener("click", function(event) {
    
    }
)

deleteEl.addEventListener("click", function(event) {
    currentString = currentString.concat(1)
    }
)

equalEl.addEventListener("click", function(event) {
    currentString = currentString.concat(1)
    }
)

decimalEl.addEventListener("click", function(event) {
    currentString = currentString.concat(1)
    }
)

clearEl.addEventListener("click", function(event) {
    currentString = currentString.concat(1)
    }
)
console.log(currentString)