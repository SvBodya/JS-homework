//----------------------------------------------------------TASK 1------------------------------------------------------
const h2 = document.createElement("h2");

function updt() {
    let hours = new Date().getHours();
    if (hours < 10) hours = "0" + hours;
    let min = new Date().getMinutes();
    if (min < 10) min = "0" + min;
    let sec = new Date().getSeconds();
    if (sec < 10) sec = "0" + sec;
    h2.innerHTML = "" + hours + ":" + min + ":" + sec;
}

const btn_start = document.createElement("button");
btn_start.innerHTML = "start";
const btn_stop = document.createElement("button");
btn_stop.innerHTML = "stop";
let timerId;
btn_start.onclick = function () {
    timerId = setInterval(updt, 1000);
    updt();
};
btn_stop.onclick = function () {
    clearInterval(timerId);
    timerId = null;
};
document.body.appendChild(h2);
document.body.appendChild(btn_start);
document.body.appendChild(btn_stop);



