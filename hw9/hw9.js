//----------------------------------------------------------TASK 1------------------------------------------------------
const h2 = document.createElement("h2");
h2.innerHTML = "События";
const div = document.createElement("div");
const currXY = document.createElement("h2");
currXY.innerHTML = "X:" + "Y:";
const curDIV = document.createElement("h2");
curDIV.innerHTML = "Координаты внутри блока: " + "X:" + "Y:";
document.onmousemove = function (event) {
    currXY.innerHTML = "X: " + event.clientX + " Y: " + event.clientY;
}
div.onmousemove=function (event){
    curDIV.innerHTML = "Координаты внутри блока: " + "X:" + event.offsetX + " Y: " + event.offsetY;
}
div.setAttribute("style", "width: 400px; height:400px; border: 1px solid black");
document.body.appendChild(h2);
document.body.appendChild(currXY);
document.body.appendChild(div);
document.body.appendChild(curDIV);



