// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". Числа принять от пользователя.

var count1, count2, count3, result; 

count1 = +prompt('Введите первое число');
count2 = +prompt('Введите второе число');
count3 = +prompt('Введите третье число');

result = (count1 + count2 + count3) / 3;

if (count1 === count2 || count1 === count3 || count2 === count3) {
    alert("Ошибка") ;
}  else {
    alert("Среднее арифметическое = " + result) ; 
}