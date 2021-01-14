// 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, и каждому из объектов
//        будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
//        Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//            • "director" — 3000;
//            • "manager" — 1500;
//            • "programmer" — 2000;
//            • для остальных значений — 1000.
//        После выполнения функции — вывести информацию о сотрудниках.

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

