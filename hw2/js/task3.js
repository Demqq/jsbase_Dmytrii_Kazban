// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var number1 = +prompt ("введите первое число")
var number2 = +prompt ("введите второе число")
var number3 = +prompt ("введите третье число")

if (number1 > number2 && number1 > number3) {
    console.log("число " + number1 + " больше чем остальные, вами введенные числа");
} else if( number2 > number1 && number2 > number3) {
    console.log("число " + number2 + " больше чем остальные, вами введенные числа");
} else {
    console.log("число " + number3 + " больше чем остальные, вами введенные числа");
}
