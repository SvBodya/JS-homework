//-----------------------------------------------Task1.1---------------------------------------------------------------
// let x = prompt("Enter a variable", 12);
// if (!isNaN(x)) {
//     if (x < 0) {
//         alert("Your number is negative");
//     } else if (x > 0) {
//         alert("Your number is positive");
//     } else {
//         alert("Your number is zero");
//     }
// } else {
//     alert("You entered not a number");
// }
//-----------------------------------------------Task1.2---------------------------------------------------------------
// let you=+prompt('Enter you money',12);
// let friend=+prompt("Enter you friend moneys",12);
// you+friend>10000?alert("U can fly to maldives"):alert("U can go drink beer");
//-----------------------------------------------Task1.3---------------------------------------------------------------
// let age = +prompt("Enter age", 20)
// age >= 20 && age < 27 ? alert("Send summons") : alert("We could'nt find u, so you are free from the army");
// //-----------------------------------------------Task1.4---------------------------------------------------------------
// switch (+prompt("Enter a number of a minibus", 255)) {
//     case 7: {
//         alert("You can go home");
//         break;
//     }
//     case 255: {
//         alert("You can go home");
//         break;
//     }
//     case 225: {
//         alert("You can go home");
//         break;
//     }
//     default: {
//         alert("You need to wait your minibus to go home");
//     }
// }
//-----------------------------------------------Task1.5---------------------------------------------------------------
// let day=new Date();
// day=day.getDay();
// if(day!==0||6){
//     alert("Go to the job");
// }else {
//     alert("You can rest");
// }
//-----------------------------------------------Task1.6---------------------------------------------------------------
// let min=-20,max=20,x,y;
// function getRandomIntInclusive(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// x=getRandomIntInclusive(min,max);
// y=getRandomIntInclusive(min,max);
// if(x<=1 && (y>=3||y<0)){
//     alert(x+y);
// }else {
//     alert("Wrong!");
// }
// alert("X= "+x+"\nY= "+y);
//-----------------------------------------------Task1.7---------------------------------------------------------------
// let x = +prompt("Enter x", 3);
// let y = +prompt("Enter y", 12);
// if ((2 < x && x < 11) || (6 <= y && y < 14)) {
//     x *= 2;
// } else {
//     x += 5;
// }
// alert("New X= " + x);
//-----------------------------------------------Task1.8---------------------------------------------------------------
// let userName = prompt("Enter your name", "");
// if (userName === "") {
//     alert("U didnt entered anything");
// } else if (userName === null) {
//     alert("U canceled action");
// } else if (userName !== "") {
//     alert("Hello, " + userName);
// }
//-----------------------------------------------Task1.9---------------------------------------------------------------
// let greeting="",lang=prompt("Enter ru,en,de","ru");
// //Через if-else
// // if(lang==="ru"){
// //     greeting="Привет";
// // }else if(lang==="en"){
// //     greeting="Hello";
// // }else if(lang==="de"){
// //     greeting="Hallo";
// // }
// //Через свитч
// switch (lang){
//     case "ru":{
//         greeting="Привет";
//         break;
//     }
//     case "en":{
//         greeting="Hello";
//         break;
//     }
//     case "de":{
//         greeting="Hallo";
//         break;
//     }
// }
// alert(greeting);
//-----------------------------------------------Task1.10---------------------------------------------------------------
// let month = new Date();
// month = month.getMonth();
// switch (month) {
//     case 0, 1, 11: {
//         alert("Winter!");
//         break;
//     }
//     case 2, 3, 4: {
//         alert("Spring!");
//         break;
//     }
//     case 5, 6, 7: {
//         alert("Summer!");
//         break;
//     }
//     case 8, 9, 10: {
//         alert("Fall!");
//         break;
//     }
// }
//-----------------------------------------------Task1.11---------------------------------------------------------------
// let day = new Date(), lang = ["ru", "en"], result;
// let choose = +prompt("Select a language:\n1)-ru\n2)-en", 1);
// day = day.getDay();
// if (lang.indexOf(lang[choose - 1]) === 0) {
//     switch (day) {
//         case 0: {
//             alert("Вс");
//             break;
//         }
//         case 1: {
//             alert("Пн");
//             break;
//         }
//         case 2: {
//             alert("Вт");
//             break;
//         }
//         case 3: {
//             alert("Ср");
//             break;
//         }
//         case 4: {
//             alert("Чт");
//             break;
//         }
//         case 5: {
//             alert("Сб");
//             break;
//         }
//         case 6: {
//             alert("Sat");
//             break;
//         }
//     }
// } else if (lang.indexOf(lang[choose - 1]) === 1) {
//     switch (day) {
//         case 0: {
//             alert("Sun");
//             break;
//         }
//         case 1: {
//             alert("Mon");
//             break;
//         }
//         case 2: {
//             alert("Tue");
//             break;
//         }
//         case 3: {
//             alert("Wed");
//             break;
//         }
//         case 4: {
//             alert("Thu");
//             break;
//         }
//         case 5: {
//             alert("Fri");
//             break;
//         }
//         case 6: {
//             alert("Sat");
//             break;
//         }
//     }
// }
//-----------------------------------------------Task1.12---------------------------------------------------------------
// let userName = prompt("Enter your name", "John"), age = +prompt("Enter you age", "29");
// // switch (true) {
// //     case userName === "John" && age === 29: {
// //         alert("Hello, " + userName + " " + age);
// //         break;
// //     }
// //     case userName === "Kate" && age === 15: {
// //         alert("Hello, " + userName + " " + age);
// //         break;
// //     }
// //     default: {
// //         alert("Bye");
// //     }
// // }
// (userName === "John" && age === 29)
//                       ? alert("Hello, " + userName + " " + age)
//                       : userName === "Kate" && age === 15
//                                             ? alert("Hello, " + userName + " " + age)
//                                             : alert("Bye");
//-----------------------------------------------Task2.1---------------------------------------------------------------
// let final="";
// for (let i = 1; i < 12; i++) {
//     if(i%2===0){
//        final+="#";
//     }else{
//         final+=".";
//     }
// }
// alert(final);
//-----------------------------------------------Task2.2---------------------------------------------------------------
// let count = +prompt("Enter the number of iterations",5);
// let answ="";
// if (isNaN(count)) {
//     alert("You need to enter the number, not text");
// }else {
//     for (let i = 0; i < count; i++){
//         if(i%2===0){
//            answ+=" "+i**2;
//         }
//     }
//     alert(answ);
// }
//-----------------------------------------------Task2.3---------------------------------------------------------------
// let userName = prompt("Enter your name", "Bogdan");
// let answ="";
// for (let i = 0; i < 4; i++) {
//     if(i!==2){
//         answ+="Happy birthday to you\n";
//     }else {
//         answ+=`Happy birthday dear ${userName}\n`;
//     }
// }
// alert(answ);
//-----------------------------------------------Task2.4---------------------------------------------------------------
// outer:for (let i = 0; ; i++) {
//     let answ = confirm("Continue cycle?");
//     if (answ) {
//         continue;
//     } else {
//         break outer;
//     }
// }
//-----------------------------------------------Task2.5---------------------------------------------------------------
// let board = +prompt("Enter a number", "5");
// let k = 0;
// for (let i = 0; i < board; i++) {
//     if (i % 2 !== 0) k += i;
// }
// alert(k);
//-----------------------------------------------Task2.6---------------------------------------------------------------
// let x=0,count=0;
// outer:for(;;){
//     x=Math.random();
//     count++;
//     if(x>0.9){
//         alert(x+"\nCount of interations: "+count);
//         break outer;
//     }
// }
//-----------------------------------------------Task2.7---------------------------------------------------------------
// for(let i=1;i<13;i++){
//     for(let j=1;j<11;j++){
//         console.table(i+"x"+j+"="+i*j+"\n");
//     }
//     console.log("\t");
// }
// //-----------------------------------------------Task2.8---------------------------------------------------------------
// let Ar=[0,1], count=+prompt("Enter the number of numbers of the fibonacci series","5"),answ="";
// for(let i=2;i<count+1;Ar[i]=Ar[i-1]+Ar[i-2],i++){
// }
// for(let i=0;i<count+1;i++)
// {
//     answ+=" "+Ar[i];
// }
// alert(answ);
//-----------------------------------------------Task2.9---------------------------------------------------------------
// let event="",count=1,summ=0,avrg=0,ar=[];
// outer:for(let i=0;;i++){
//     event=prompt("Enter a number","5");
//     if(event===null){
//         count--;
//         break outer;
//     }else {
//         count++;
//         ar[i]=+[event];
//     }
// }
// for(let i=0;i<ar.length;i++){
//     summ+=ar[i];
// }
// avrg=summ/ar.length;
// alert("Count of OK: "+count+"\nSumm of entered number: "+summ+"\nAvg of entered number: "+avrg);
//-----------------------------------------------Task2.10---------------------------------------------------------------
// const password = '1';
// let userInput;
// do {
//     userInput = prompt('Введите пароль');
//     if (userInput === password) {
//         alert('Вы успешно авторизованы');
//         break;
//     } else if (userInput === null) {
//         userInput = prompt('Вы уверены, что хотите отменить авторизацию? Введите "да", если уверены.');
//         if (userInput && userInput.toLowerCase() === 'да') {
//             alert('Вы отменили авторизацию');
//             break;
//         }
//     }
// } while (true)
//-----------------------------------------------Task2.11---------------------------------------------------------------
// for(let i=1;i<50+1;i++){
//     if(i%3===0){
//         console.log("Fizz");
//     }else if(i%5===0){
//         console.log("Buzz");
//     }else if(i%5===0&&i%3===0){
//         console.log("FizzBuzz");
//     }else{
//         console.log(i);
//     }
// }

