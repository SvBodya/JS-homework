//------------------------------------------TASK 1---------------------------------------------------
// let x = 3, y = x * 3, z = x + y;
// console.log(x, y, z);
// //------------------------------------------TASK 2---------------------------------------------------
// let firstName, lastName;
// let tmp = prompt("Enter your full name separated by space"), tmp2;
// tmp2 = tmp.split(" ");
// firstName = tmp2[0];
// lastName = tmp2[1];
// alert("Hello, " + `${firstName} ${lastName}`);
//------------------------------------------TASK 3---------------------------------------------------
// let x=+(prompt("Enter first numb")), y=+(prompt("Enter second numb"));
// alert(x*y);
// alert(x/y);
// alert(x-y);
// alert(x+y);
//------------------------------------------TASK 4---------------------------------------------------
// let hours, days, salaryPerHour,finalSalary;
// hours=+prompt("Enter work hours");
// days=+prompt("Enter work days");
// salaryPerHour=+prompt("Enter work salary per hour");
// finalSalary=hours*days*salaryPerHour;
// alert("Your final salary is: "+finalSalary+" $");
//------------------------------------------TASK 5---------------------------------------------------
// let x=+prompt("Enter a number");
// if(x%2===0)
// {
//     alert("A number is even");
// }
// else
// {
//     alert("A number is odd");
// }
//------------------------------------------TASK 6---------------------------------------------------
// let x = prompt("Enter your answer");
// if(isNaN(x))
// {
//     alert("An entered answer is not a number");
// }
// else
// {
//     alert("An entered answer is number");
// }
//------------------------------------------TASK 7---------------------------------------------------
// let x = Math.round(Math.random() * 100);
// let y = +prompt("Enter a second number");
// if (x < y) {
//     alert("First number is less than second");
// } else if (x == y) {
//     alert("Numbers are equal");
// }else if (x > y) {
//     alert("First number is bigger than second");
// }
// alert("First number is " + x);
// alert("Second number is " + y);
//------------------------------------------TASK 8---------------------------------------------------
let str=prompt("Enter a message","Мне нравится изучать Front-end");
let x=prompt("Enter a message","Front-end");
let tmp;
if(str.indexOf(x) === -1) {
    alert("Нет ничего общего");
    tmp=str.slice(0,str.indexOf("Front-end"));
}else if(str.indexOf(x) !== -1) {
    alert("Есть общее");
    tmp=str.slice(0,str.indexOf(x));
}
let result=`${tmp} ${x}`;
alert(result);
