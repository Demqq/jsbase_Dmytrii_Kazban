// 2.	Создать функцию, возводящую число в степень, число и сама степень вводится пользователем
// 		Проверить числа на корректность
    
let numer = +prompt("Poproszę wpisać dowolną liczbę");
let degree = +prompt("Poproszę wpisać stopeń liczby, ktory Państwo chcą użyć");

function makeDegree(a,b){
    
    if(Number.isNaN(a) || Number.isNaN(b)){
        console.log("to, co Państwo wspisali, nie jest liczbą");
    }

    var result = Math.pow(a, b);
    console.log("liczba, podniesiona do potęgi, to : " + result);
}

makeDegree(numer, degree);
