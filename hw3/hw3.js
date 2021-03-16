//----------------------------------------------------------TASK1------------------------------------------------------
// let ar = [1, 2, 3, "a", "b", "c", "4", "5", "6"], sum = 0;
// for (let i = 0; i < ar.length; i++) {
//     if ( !isNaN(ar[i])) {
//         sum += +ar[i];
//     }
// }
// alert(sum);
//----------------------------------------------------------TASK2------------------------------------------------------
// let ar = [], n = +prompt("Enter a number of elements of array", "5");
// for (let i = 0; i < n; i++) {
//     ar.push(Math.random().toFixed(2));
// }
// for (let i = 0; i < n; i++) {
//     console.log(ar[i] ** 5);
// }
//----------------------------------------------------------TASK3------------------------------------------------------
// let ar = ["AngularJS", "jQuery"];
// ar.unshift("Backbone.js");
// ar.push("ReactJS", "Vue.js");
// ar.splice(2, 0, "CommonJS");
// alert(ar.join());
// alert("This is superfluous here " + ar.splice(ar.indexOf("jQuery"), 1));
// alert(ar.join());
//----------------------------------------------------------TASK4------------------------------------------------------
// let str = "Как однажды Жак звонарь сломал фонарь головой", ar = [];
// ar=str.split(" ");
// alert(ar.join());
// [ar[ar.indexOf("Жак")], ar[ar.indexOf("однажды")]] = [ar[ar.indexOf("однажды")], ar[ar.indexOf("Жак")]];
// [ar[ar.indexOf("звонарь")], ar[ar.indexOf("однажды")]] = [ar[ar.indexOf("однажды")], ar[ar.indexOf("звонарь")]];
// [ar[ar.indexOf("головой")], ar[ar.indexOf("фонарь")]] = [ar[ar.indexOf("фонарь")], ar[ar.indexOf("головой")]];
// alert(ar.join());
//----------------------------------------------------------TASK5------------------------------------------------------
// let person={
//     name: "Bohdan",
//     age: 20,
//     sex: "male"
// }
// let key=prompt("Enter a key","age").toLocaleLowerCase();
// if(key in person){
//     alert(key+": "+person[key]);
// }else {
//     person[key]=prompt("Enter a new key description","Lavrinenko");
// }
// console.log(person);
//----------------------------------------------------------TASK6------------------------------------------------------
// let phone = {
//     brand: prompt("Enter a brand of phone", "Apple"),
//     model: prompt("Enter a model of phone", "IPhone 12"),
//     resolution: prompt("Enter a phone resolution", "720×1280"),
//     color: prompt("Enter a phone color", "red")
// }
// let gadget="gadget"
// person[gadget]=phone;
// console.log(person);
//----------------------------------------------------------TASK7------------------------------------------------------
// let dates = {
//     currentDate: new Date(),
//     secondDate: new Date()
// }
// let entered = new Date(prompt("Enter date YYYY-MM-DD", "2020-12-14"));
// dates.secondDate.setDate(dates.currentDate.getDate() - 365);
// if (entered >= dates.secondDate && entered <= dates.currentDate) {
//     alert("Попадает");
// }else{
//     alert("Не попадает");
// }
//----------------------------------------------------------TASK8------------------------------------------------------
// let ar=[],n=prompt("Enter a number of iteration","5"),sum=0;
// for(let i=0;i<n;i++){
//     ar.push(prompt("Enter the value of "+(i+1)+" element: "))
// }
// for(let i=0;i<ar.length;i++){
//     if(!isNaN(ar[i])){
//         sum+=+ar[i];
//     }
// }
// alert(sum);
//----------------------------------------------------------TASK9------------------------------------------------------
//-------------------------------------------------------------SPOSOB1-------------------------------------------------
// let ar = [];
// for (let i = 0; i <= 9; i++) {
//     ar[i] = [];
//     for (let j = 0; j <= 9; j++) {
//         ar[i][j] = ((i + 1) * (j + 1));
//     }
// }
// for (let i = 0; i <= 9; i++) {
//     for (let j = 0; j <= 9; j++) {
//         console.log((i + 1) + "x" + (j + 1) + "=" + ar[i][j]);
//     }
// }
//-------------------------------------------------------------SPOSOB2-------------------------------------------------
let ans = {};
for (let i = 0; i <= 9; i++) {
    ans[i] = [];
    for (let j = 0; j <= 9; j++) {
        ans[i][j] = (i + 1) + "x" + (j + 1) + "=" + ((i + 1) * (j + 1));
    }
}
console.log(ans);
//----------------------------------------------------------TASK10------------------------------------------------------
// let imageTag = {
//     src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
//     alt: "",
//     style: "border: 1px solid #ccc",
//     width: "200"
// }