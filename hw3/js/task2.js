
// 2. Создать программу, выполняющую вставку элемента в массив после элемента, значение которого укажет пользователь.
// Описание:
// п.1 Создайте произвольный массив и заполните его данными, например: var cars = ["Mitsubishi", "Honda", "Toyota", "Suzuki", "Audi", "BMW", "Mercedes"];
// п.2 Запросите у пользователя название элемента массива
// п.3.1 Если в массиве такой элемент есть - то необходимо после него вставить новый элемент, который пользователь введет дальше
// п.3.2 Если в массиве такого элемента нет - добавить в конец массива
// п.4 Если в массиве есть одинаковые элементы (из. п.2), программа должна добавлять только после первого найденного элемента
// п.5 Запросите у пользователя новый элемент для массива и вставьте его после найденного элемента или же в конец массива (в зависимости от условий выше)


let barcelona = ["Messi", "Busquets", "Pique", "Pedri", "Trincao", "Alba"];
var question = prompt("Введите Фамилию игрока Барселоны латиницей");
var barcelonaPlayer = barcelona.indexOf(question, 0);
var enotherPlayer;

if (barcelonaPlayer > -1){

    barcelona.splice(barcelonaPlayer + 1, 0,  enotherPlayer = prompt("Введите Имя другого игрока"));
    console.log ("Ваша любимая команда с вашим любимым игроком " + barcelona);

} else if (barcelonaPlayer = -1){
    barcelona.push(question);
    console.log("Ваша любимая команда " + barcelona);
}

