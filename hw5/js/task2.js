// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, произведения и частного двух чисел.
//        Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
//        В зависимости от принятого знака операции, вызвать соответствующий метод.

var firstNumber = +prompt("Введите первое число");
var secondNumber = +prompt("Введите второе число");
var sign = prompt("Введите знак операции");
var result;

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    console.log("Wrong number");
}

var calculator = {

    getSum: function (a, b) {
        if (sign == "+") {
            result = a + b
            console.log("Результат вашей операции : " + result);
        }
    },
    getWithDrawal: function (a, b) {
        if (sign == "-") {
            result = a - b
            console.log("Результат ващей операции : " + result);
        }
    },
    getMul: function (a, b) {
        if (sign == "*") {
            result = a * b
            console.log("Результат ващей операции : " + result);
        }
    },
    getDev: function (a, b) {
        
        if (sign == "/") {
            result = a / b
            console.log("Результат ващей операции : " + result);
        }
    },
}

if (sign == "+") {
    calculator.getSum(firstNumber, secondNumber);
} else if (sign == "-") {
    calculator.getWithDrawal(firstNumber, secondNumber);
} else if (sign == "*") {
    calculator.getMul(firstNumber, secondNumber);
} else if (sign == "/") {
    calculator.getDev(firstNumber, secondNumber);
}