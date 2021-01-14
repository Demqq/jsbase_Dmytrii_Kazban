// 5. Для задания 3 создать метод, позволяющий отсортировать массив сотрудников по одному из свойств: name, sName, age, occupation, salary.
// Параметр для сортировки принимается от пользователя.
// После выполнения функции — вывести информацию о сотрудниках.

var company = [];
let a;
do{
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
}while(a);


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