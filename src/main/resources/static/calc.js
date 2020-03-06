let operationPressed = false;
let firstValue = "";
let secondValue = "";
let operation = "";
let decimalPressed = false;



function saveValue(el) {

    if  (operationPressed === false) {
        firstValue += el;
        document.getElementById("screen").value = firstValue;
        console.log("firstValue: " + firstValue);
    } else {
        secondValue += el;
        document.getElementById("screen").value = secondValue;
        console.log("secondValue: " + secondValue);
    }
}

function saveOperation(el) {
    operation = el;
    document.getElementById("screen").value = operation;
    operationPressed = true;
    decimalPressed = false;
}

function calculate() {
    let x = parseFloat(firstValue);
    let y = parseFloat(secondValue);
    let symbol = Symbol(operation)
    let result = "";


    switch (operation) {
        case "+":
            result = x + y;
            break;
        case "-":
            result = x - y;
            break;
        case "*":
            result = x * y;
            break;
        case "/":
            result = x / y;
            break;
        default:
            result = "Hvad fanden laver du??";
    }

    let r = result.toFixed(5);
    document.getElementById("screen").value = r;
    console.log("Resultat: " + r);
}

function decimal(el) {
    if (!decimalPressed) {
        if (!operationPressed) {
            firstValue += el;
        } else {
            secondValue += el;
        }

        decimalPressed = true;
    }
}

function allClear() {
    console.log("Du klikkede clear!!")
    startValues();
    document.getElementById("screen").value = firstValue;
}

function startValues() {
    operationPressed = false;
    firstValue = "";
    secondValue = "";
    operation = "";
    decimalPressed = false;
}