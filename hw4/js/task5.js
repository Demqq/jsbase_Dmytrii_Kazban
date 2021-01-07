// Создать игру "Камень-Ножницы-Бумага".
//         Выбор компьютера определяется строкой:  

// 		var computerChoice = Math.random();
// 		alert(computerChoice);

//         Math.random() выдает произвольное число в промежутке от 0 до 1, на основании этого можно построить принцип выбора решения компьютера.
// 		Запросить у пользователя один из трех вариантов "Камень-Ножницы-Бумага"
// 		Сравнить ответ пользователя и компьютера, определить кто выиграл (или ничья)
// 		Спросить пользователя, хочет ли он повторить, если "да", запустить игру заново


// var question = confirm("Hello, do you want to play the game \"Rock-Paper-Scissors\"?");
// var userChoice = prompt("Choose between that options \"Rock-Paper-Scissors\"");
// var fromBeginning;
// userChoice = userChoice.toLowerCase();
// var computerChoice = Math.random();

// if (question) {

// }

// if (userChoice !== "rock" || userChoice !== "paper" || userChoice !== "scissors") {
//     userChoice = prompt("Choose a correct options");
// }
// if (computerChoice <= 0.33) {
//     computerChoice = "rock";
// } else if (computerChoice <= 0.66) {
//     computerChoice = "paper";
// } else {
//     computerChoice = "scissors"
// }

var userChoice = prompt("Choose between that options \"Rock-Paper-Scissors\"");
userChoice = userChoice.toLowerCase();
var computerChoice = Math.random();

if (computerChoice <= 0.33) {
    computerChoice = "rock";
} else if (computerChoice <= 0.66) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors"
}

function getWinner(humanChoice, machineChoice) {



    if (humanChoice === machineChoice) {
        console.log("the computer choice is " + machineChoice + " and the user choice is " + humanChoice + " the result of the game is tie");
    } else if (humanChoice === "rock") {
        if (machineChoice === "scissors") {
            console.log("the computer choice is " + machineChoice + " and the user choice is " + humanChoice + " winner is rock");
        } else {
            console.log("the computer choice is " + machineChoice + " and the user choice is " + humanChoice + " winner is paper");
        }
    } else if (humanChoice === "paper") {
        if (machineChoice === "rock") {
            console.log("the computer choice is " + machineChoice + " and the user choice is " + humanChoice + " winner is paper");
        } else {
            console.log("the computer choice is " + machineChoice + " and the user choice is " + humanChoice + " winner is scissors");
        }
    } else if (humanChoice === "scissors") {
        if (machineChoice === "paper") {
            console.log("the computer choice is " + machineChoice + " and the user choice is " + humanChoice + " winners is scissors");
        } else {
            console.log("the computer choice is " + machineChoice + " and the user choice is " + humanChoice + " winnes is rock");
        }
    }

}

getWinner(userChoice, computerChoice);

