var birthday = [19, 03, 1996];
// birthday.join( );
console.log(birthday.join("/"));

console.log(birthday.reverse("/"))

var birth = ["nineteen", "march", "nineteen ninety six"];
console.log(birth.sort());

var mybirthday = birthday.concat(birth);
console.log(mybirthday);

console.log(mybirthday.slice(2, 5));

var dayMonth = mybirthday.splice(2, 1, "jpas")
console.log(mybirthday);

birthday.push("Dima");
console.log(birthday);

birthday.pop();
console.log(birthday);

birthday.unshift("Dmytrii");
console.log(birthday);


birthday.shift();
console.log(birthday);