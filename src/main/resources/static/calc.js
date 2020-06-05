/**
 * Alle mine variabler som funktionerne arbejder med
 */
let firstValue = "";
let secondValue = "";
let operation = "";
let history = "";
let numberPressed = false;
let operationPressed = false;
let decimalPressed = false;
let calculatePressed = false;

/**
 * Tager en knap's værdi og tilføjer det til et af mine to værdier
 * Den skifter til værdi 2 hvis der er klikket på en operator
 * @param el
 */
$(".number").click(function () {
    if (operationPressed === false) {
        firstValue += $(this).attr("value");
        history += $(this).attr("value");
        $("#screen").val(firstValue);
        console.log("firstValue: " + firstValue);
    } else {
        secondValue += $(this).attr("value");
        history += $(this).attr("value");
        $("#screen").val(secondValue);
        console.log("secondValue: " + secondValue);
    }
    numberPressed = true;
});


/**
 * Tager værdien fra en operator knap og ændre to booleans
 * for at gøre klar til den næste værdi
 * @param el
 */
$(".operator").click(function () {

    if (numberPressed || calculatePressed) {
        operation = $(this).attr("value");
        history += $(this).attr("value");
        $("#screen").val(operation);
        $("#history-screen").val(history);

        operationPressed = true;
        decimalPressed = false;
    } else {
        $("#screen").val("Skriv et tal først!");
    }
});


/**
 * Parser mine to værdier til en float(pga decimal)
 * Tager værdien fra operation og bruger i en switch-case
 * Limiter decimalpunkter til 2 for at undgå nogle underligt lange float decimaler
 */
$("#calculate").click(function () {
    let x = parseFloat(firstValue);
    let y = parseFloat(secondValue);
    let symbol = Symbol(operation); // Vil erstatte min switch på en smart måde
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
            result = "Hvad laver du??";
    }

    let r = Math.round(result * 1000) / 1000;
    $("#screen").val(r);
    history += "=" + r;
    $("#history-screen").val(history);

    startValues();
    firstValue = r;
    calculatePressed = true;
});

/**
 * Tilføjer et decimalpunkt
 * Kan kun placere et i hver værdi
 * @param el
 */
$("#decimal").click(function () {
    if (!decimalPressed) {
        if (!operationPressed) {
            firstValue += $(this).attr("value");
            $("#screen").val(firstValue);
        } else {
            secondValue += $(this).attr("value");
            $("#screen").val(secondValue);
        }

        history += $(this).attr("value");
        $("#history-screen").val(history);
        decimalPressed = true;
    }
});

/**
 * Slette-funkion der sætte alle værdier tilbage til startværdierne og
 * skriver den nye tomme firstValue til screen
 */
$("#allClear").click(function () {
    startValues();
    $("#screen").val(firstValue);
    history = "";
    $("#history-screen").val(history);
});


/**
 * Sletter den bagerste værdi
 */
$("#deleteChar").click(function () {
    if (!operationPressed) {
        firstValue = firstValue.slice(0, -1);
        $("#screen").val(firstValue);
    } else {
        secondValue = secondValue.slice(0, -1);
        $("#screen").val(secondValue);
    }
    history = history.slice(0, -1);
});


/**
 * Gentagelse af toppen for at kunne genbruge
 */
function startValues() {
    firstValue = "";
    secondValue = "";
    operation = "";
    numberPressed = false;
    operationPressed = false;
    decimalPressed = false;
}