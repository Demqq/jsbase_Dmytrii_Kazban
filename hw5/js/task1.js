// 1. Создать объект Point, содержащий два свойства: "x" и "y" — координаты точки, и метод GetQuadrant, вычисляющий, в каком квадранте в декартовой системе координат находится данная точка. Протестируйте данный объект, изменяя значения его координат, и повторно вызавая метод GetQuadrant.

var point = {
    x: +prompt('Введите точку x '),
    y: +prompt('Введите точку y '),
    getQuadrant: function (x, y) {
        if (isNaN(x) || isNaN(y)) {
            console.log('Вы ввели неверное значение');
            return;
        }
        if (point.x > 0 && point.y > 0) {
            console.log('Точка находится в 1ом квадранте');
        } else if (point.x > 0 && point.y < 0){
            console.log('Точка находится во 2ом квадранте');
        } else if (point.x < 0 && point.y < 0){
            console.log('Точка находится в 3ем квадранте');
        } else if(point.x < 0 && point.y > 0){
            console.log('Точка находится в 4ом квадрате');
        } else if(point.x == 0 && point.y == 0){
            сonsole.log('Точка находится в значении "0"');
        }
    }
}

console.log(point.getQuadrant(point.x, point. y));