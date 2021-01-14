// 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — объект,
// содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.
let company = [];
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

console.log(company);

