// 4. Дано два числа A и B где (A < B). 
//     Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
//     Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.   

var a, b, c, d;

a = +prompt("введите число от 1 до 10");
b = +prompt("введите еще одно число от 10 до 20");
c = 0;

for (; a < b; a++) {
    c += a;

    if (a % 2 == 0) {
        console.log(a);
    }
}
console.log("sum " + c);

var q = 19;