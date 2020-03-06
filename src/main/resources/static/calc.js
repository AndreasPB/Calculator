/**
 * Programmet er begrænset til 2 værdier
 *
 * Alle mine variabler som funktionerne arbejder med
 */
let firstValue = "";
let secondValue = "";
let operation = "";
let operationPressed = false;
let decimalPressed = false;

/**
 * Tager en knap's værdi og tilføjer det til et af mine to værdier
 * Den skifter til værdi 2 hvis der er klikket på en operator
 * @param el
 */
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

/**
 * Tager værdien fra en operator knap og ændre to booleans,
 * for at gøre klar til den næste værdi
 * @param el
 */
function saveOperation(el) {
    operation = el;
    document.getElementById("screen").value = operation;
    operationPressed = true;
    decimalPressed = false;
}

/**
 * Parser mine to værdier til en float(pga decimal)
 * Tager værdien fra operation og bruger i en switch-case
 * Limiter decimalpunkter til 5 for at undgå nogle underligt lange float ting
 */
function calculate() {
    let x = parseFloat(firstValue);
    let y = parseFloat(secondValue);
    let symbol = Symbol(operation) // Vil erstatte min switch på en smart måde
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

    startValues();
}

/**
 * Tilføjer et decimalpunkt
 * Kan kun placere et i hver værdi
 * @param el
 */
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

/**
 * Slette-funkion der sætte alle værdier tilbage til startværdierne og
 * skriver den nye tomme firstValue til screen
 */
function allClear() {
    console.log("Du klikkede clear!!")
    startValues();
    document.getElementById("screen").value = firstValue;
}

/**
 * Gentagelse af toppen for at kunne genbruge
 */
function startValues() {
    operationPressed = false;
    firstValue = "";
    secondValue = "";
    operation = "";
    decimalPressed = false;
}