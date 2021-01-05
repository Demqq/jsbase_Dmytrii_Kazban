// 4. Создать два произвольных массива: 
// один массив - любимая спортивная команда / модели автомобилей / города, 
// во втором - количество игроков в команде / объем двигателя / количество жителей в городе.
// Из двух массивов сделайте ассоциативный массив.
// Массив, который будет выступать в качестве ключа - должен содержать уникальные значения

var shoes = ["new balance 991", "new balance 997", "new balance 577", "new balance 1500"];
var shoesPrice = ["120$", "130$", "110$", "150$"];

var associativeArray  = new Object();
for(var i = 0; i < shoes.length; i++){
    associativeArray[shoes[i]] = shoesPrice[i];
}
console.log(associativeArray);


// var o_size = 0;
// for(key in associativeArr){
//     o_size++;
// }
// alert(o_size);   