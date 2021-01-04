// 3. Создать многомерный массив, размер массива получить от пользователя. Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. 
//     Размер каждого вложенного массива - 3.


var b = +prompt("Введите длину массива")
var a = new Array(b);

console.log(a.length);

for(i = 0; i < a.length; i++){
    a[i] = new Array(3);

    for(j = 0; j < 3 ; j++){

        if (i % 2 == 0) {
            a[i][j] = "even";
        } else {
            a[i][j] = "odd";
        }
    }
}
console.log (a); piska

