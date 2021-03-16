//----------------------------------------------------------TASK 1------------------------------------------------------
// let calculator={
//     read(){
//         //запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
//         calculator.x=+prompt("Enter x","5");
//         calculator.y=+prompt("Enter y","3");
//     },
//     sum(){
//         // возвращает сумму этих двух значений
//         return this.x+this.y;
//     },
//     multi(){
//         //возвращает произведение этих двух значений
//         return this.x*this.y;
//     },
//     diff(){
//         //возвращает разницу
//         return this.x-this.y;
//     },
//     div(){
//         // возвращает частное
//         return this.x/this.y;
//     }
// }
// // calculator.read();
// // alert( calculator.sum() );
// // alert( calculator.multi() );
//----------------------------------------------------------TASK 2------------------------------------------------------
// let coffeeMachine = {
//     message: "Yor coffee is ready",
//     start() {
//         setTimeout(function() {
//             alert(this.message);
//         }.bind(this), 3000);
//     }
// }
// coffeeMachine.start();
//----------------------------------------------------------TASK 3------------------------------------------------------
// let counter={
//     count:+prompt("Enter a number","0"),
//     inc(){
//         this.count++;
//         return this;
//     },
//     dec(){
//         this.count--;
//         return this;
//     },
//     getValue(){
//         return this.count;
//     }
// }
// let current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current); // 1
//----------------------------------------------------------TASK 4------------------------------------------------------
let obj = {
    x: 0,
    y: 0,
    getSum(x, y) {
        this.x = x;
        this.y = y;
        let string = x + " + " + y + " = " + calculator.sum.call(this);
        return string;
    },
    getDiff(x, y) {
        this.x = x;
        this.y = y;
        let string = x + " - " + y + " = " + calculator.diff.call(this);
        return string;
    },
    getMulti(x, y) {
        this.x = x;
        this.y = y;
        let string = x + " * " + y + " = " + calculator.multi.call(this);
        return string;
    },
    getDiv(x, y) {
        this.x = x;
        this.y = y;
        let string = x + " / " + y + " = " + calculator.div.call(this);
        return string;
    }
}
let calculator = {
    read() {
        calculator.x = obj.x;
        calculator.y = obj.y;
    },
    sum() {
        // возвращает сумму этих двух значений
        return this.x + this.y;
    },
    multi() {
        //возвращает произведение этих двух значений
        return this.x * this.y;
    },
    diff() {
        //возвращает разницу
        return this.x - this.y;
    },
    div() {
        // возвращает частное
        return this.x / this.y;
    }
}
alert(obj.getSum(1, 1));
alert(obj.getDiv(1, 0));
//----------------------------------------------------------TASK 5------------------------------------------------------
// let country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };
//
// function format(start, end) {
//     console.log(start + this.name + end);
// }
//
// format.call(country, "",""); // Ukraine
// format.apply(country, ["[","]"]); // [Ukraine]
// format.call(country.capital,"",""); // Kyiv
// format.apply(country.capital,["",""]); // Kyiv
// format.apply(0,["",""]); // undefined
//----------------------------------------------------------TASK 6------------------------------------------------------
// let usr = {
//     name: "John"
// }
//
// function format(start, end) {
//     console.log(start + this.name + end);
// }
//
// let userFormat = format.bind(usr);
// userFormat('<<<', '>>>');
//----------------------------------------------------------TASK 7------------------------------------------------------
// function concat(razdelit, stroka1, stroka2) {
//     console.log((stroka1 + razdelit + stroka2).toString());
// }
//
// let hello = concat.bind(null, ' ', 'Hello')
//
// hello('World'); // Hello World
// hello('John'); // Hello John
//----------------------------------------------------------TASK 1(level up)--------------------------------------------
// function cube(x) {
//     let xtmp=x;
//     for (let i = 1; i < 3; i++) {
//         x*=xtmp;
//     }
//     return x;
// }
//------------------------------------------------------------RECURSION-------------------------------------------------
// function cube(x, xpow = 3) {
//     return (xpow != 1) ? x * cube(x, xpow - 1) : x;
// }
// alert(cube(2));
//----------------------------------------------------------TASK 2(level up)--------------------------------------------
// let arsum=0;
//
// function sum(...params) {
//     arsum += params[0];
//     params.shift();
//     if (params.length !== 0) {
//         sum(...params);
//     }
//     return arsum;
// }
//
// console.log(sum(1, 2, 3, 4, 5,)); // 15
