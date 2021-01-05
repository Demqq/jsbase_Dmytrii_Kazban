// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// 		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// 		Функция должна проверять корректность введенных чисел и знака операции.
// 		Все аргументы для функции принять от пользователя.

function calculate(a, b, sign) {
    var a = +prompt("Enter a first number ");
    var b = +prompt("Enter a second number ");
    var sign = prompt("Enter a arithmetic operation sign +  - * / ");
    var result;

    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.log("The number that you have entered is not really a number")
    }

    if (sign === "+" || "-" || "*" || "/") {
        console.log("You have wrote the wrong arithmetic sign")
    }

    switch (sign) {
        case "+":
            result = a + b;
            break;

        case "-":
            result = a - b;
            break;

        case "*":
            result = a * b;
            break;

        case "/":
            result = a / b;
            break;
    }

    if (result !== undefined) {
        console.log("The result of you arithmetic operation is: " + result);
    }
}

calculate();