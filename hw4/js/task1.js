// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// 		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// 		Функция должна проверять корректность введенных чисел и знака операции.
// 		Все аргументы для функции принять от пользователя.

var num1 = +prompt("Enter a first number ");
var num2 = +prompt("Enter a second number ");
var sign2 = prompt("Enter a arithmetic operation sign +  - * / ");

calculate(num1, num2, sign2);

function calculate(a, b, sign) {
    
    var result;

    if (Number.isNaN(a) || Number.isNaN(b)) {
        console.log("The number that you have entered is not really a number")
        return;
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

        default: 
            console.log("You have wrote the wrong arithmetic sign");
    }

    if (result !== undefined) {
        console.log("The result of you arithmetic operation is: " + result);
    }
}
