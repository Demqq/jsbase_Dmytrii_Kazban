// 4. Используйте метод some внутри функции checkPositive, чтобы проверить, является ли какой-либо элемент в arr положительным. Функция должна возвращать логическое значение.

        function checkPositive(arr) {

            var a = arr.some(elem => elem > 0)
            console.log(a);

        }
        checkPositive([1, 2, 3, -4, 5]);