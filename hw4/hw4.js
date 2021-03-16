//----------------------------------------------------------TASK 1------------------------------------------------------
// function max(a, b) {
//     if (a > b) return a;
//     else return b;
// }
//
// console.log(max(0, -1));
//----------------------------------------------------------TASK 2------------------------------------------------------
// function min(...params) {
//     let Min = params[0];
//     for (let i = 0; i < params.length; i++) {
//         if (params[i] < Min) {
//             Min = params[i];
//         }
//
//     }
//     return Min;
// }
// console.log( min(0, -1, 100, 500, 100500) ); // -1
//----------------------------------------------------------TASK 3------------------------------------------------------
// let arr = [
//     {id: 1, firstname: "John", age: 23, gender: "m", lastname: "Daniels"},
//     {id: 2, firstname: "Olga", age: 21, gender: "f", lastname: "Lavrinenko"},
//     {id: 3, firstname: "Mr.Anderson", age: 2123, gender: "m", lastname: "Smith"},
//     {id: 4, firstname: "Margot", age: 23, gender: "f", lastname: "Robbie"},
//     {id: 5, firstname: "Rosa", age: 7, gender: "f", lastname: "Johnson"}
// ];
// console.log(arr);
// //a
// let lesseighteenArr = arr.filter((items) => items.age < 18);
// console.log(lesseighteenArr);
// //b
// let fullNameArr = arr.map((items) => {
//     return {
//         ...items,
//         fullName: items.firstname + " " + items.lastname
//     };
// });
// console.log(fullNameArr);
// //c
// let fullNameArr2 = fullNameArr.map((items) => items.fullName);
// console.log(fullNameArr2);
//----------------------------------------------------------TASK 4------------------------------------------------------
// let ar=[1,2,3,4,5];
// function analshift(mass) {
//     mass.splice(0,1);
// }
// analshift(ar);
// alert(ar);
//----------------------------------------------------------TASK 5------------------------------------------------------
// let ar = [1, 2, 3, 4, 5];
//
// function analpush(mass, ...params) {
//     //Через рекурсию
//     // mass[mass.length]=params[0];
//     // params.shift();
//     // if(params.length){
//     //     analpush(mass,...params);
//     // }
//     //Через цикл
//     for (let i = 0; i<params.length; i++) {
//         mass[mass.length] = params[i];
//     }
// }
// analpush(ar, 6, 7, 8, 9, 10);
// alert(ar);
// //проверки что добавляется поэлементно
// // ar.pop();
// // alert(ar);
//----------------------------------------------------------TASK 6------------------------------------------------------
// function extend(source2, ...keys) {
//     for (let obj of keys) {
//         for (let objKey in obj) {
//             source2[objKey] = obj[objKey];
//         }
//     }
//     return source2;
// }
// let source = {firstname: 'Tom', age: 10}
// let s = extend(source, {firstname: 'John'}, {lastname: 'Doe'});
// console.log(s); // {firstname: 'John', age: 10, lastname: 'Doe'}
//----------------------------------------------------------TASK 7------------------------------------------------------
// function setComment(date, message, author = "Anonymous") {
//     if (typeof date !=='string' || typeof message !== 'string') {
//         return alert("Данные переданы некорректно");
//     }else {
//         return console.log(author+", "+date+"\n"+message);
//     }
//
// }
// setComment('2016-11-02', 'Everything is ok', 'John');
// setComment('2016-11-02', 'You could do it better!');
// setComment([],[]);
//----------------------------------------------------------TASK 8-----------------------------------------------------
function createTimer() {
    let t = performance.now();
    return function () {
        return performance.now()-t;
    }
}
let timer = createTimer();
alert('!'); // код, время выполнения которого нужно измерить
alert(timer()); // время в мкс от начала выполнения createTimer() до момента вызова timer()
//----------------------------------------------------------TASK 9------------------------------------------------------
// function createAdder(x) {
//  return function (y){
//      return x+y;
//  }
// }
// let hello = createAdder('Hello, ');
// alert( hello('John') ); // Hello, John
// alert( hello('Harry') ); // Hello, Harry
//
// let plus = createAdder(5);
// alert( plus(1) ); // 6
// alert( plus(5) ); // 10
