// 5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
// Параметр для сортировки принимается от пользователя.
// После выполнения функции — вывести информацию о сотрудниках.

var company = [];
let a;
var options;
do {
    company.push(
        employee = {
            name: prompt("Please, enter the employee name"),
            sName: prompt('Please, enter the employee second name'),
            age: +prompt("Please, enter the employee age"),
            occupation: prompt("Please, enter the employee occupation"),
            show: function () {
                console.log("The eployee name is: " + this.name);
                console.log("The eployee second name is: " + this.sName);
                console.log("The eployee age is: " + this.age);
                console.log("The eployee occupation is: " + this.occupation)
            }
        },
    )
    employee.show();
    a = confirm("do you want to reenter employee information?")
} while (a);


function addSalary(arr) {
    for (var i = 0; i < arr.length; i++) {
        switch (arr[i].occupation) {
            case "director":
                arr[i].salary = 3000;
                break;
            case "manager":
                arr[i].salary = 1500;
                break;
            case "programmer":
                arr[i].salary = 2000;
                break;
            default:
                arr[i].salary = 1000;
        }
    }
}

addSalary(company);

for (var i = 0; i < company.length; i++) {
    console.log("First name: " + company[i].name);
    console.log("Second name: " + company[i].sName);
    console.log("Age: " + company[i].age);
    console.log("Occupation: " + company[i].occupation);
    console.log("Salary: " + company[i].salary);
}


company.sort(function(a, b){
    options = prompt("Enter the option that you want to be sorted (name, sName, age, occupation, salary)");

    switch(options){
        case "name":
            if (a["name"] > b["name"]) {
                return 1;
            }
            else if (a["name"] < b["name"]) {
                return -1;
            } else {return 0;}
            break;
        case "sName":
            if (a["sName"] > b["sName"]) {
                return 1;
            }
            else if (a["sName"] < b["sName"]) {
                return -1;
            } else {return 0;}
            break;
        case "occupation":
            if (a["occupation"] > b["occupation"]) {
                return 1;
            }
            else if (a["occupation"] < b["occupation"]) {
                return -1;
            } else {return 0;}
            break;
        case "age":
            return a["age"] - b["age"];
            break;
        case "salary":
            return a["salary"] - b["salary"];
            break;
        
        default:
            alert("None");
    }   
})

console.log(company);