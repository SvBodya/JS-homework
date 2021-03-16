// тут может находится ваш код
const btn_Start = document.getElementById(id = "start");
const btn_Stop = document.getElementById(id = "stop");
let timerId;
let score_el = document.getElementById(id = "score");
let score = 0;
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class Cubes {
    constructor() {
        this.size = 20;
        this.x = Math.random() * canvas.width - this.size / 2;
        this.y = 0;
        this.speed = Math.floor((Math.random() * 3) + 1);
        this.color = `rgba(${randomInteger()},${randomInteger()},${randomInteger()},${Math.random() * 0.4})`;
    }

    draw() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.size, this.size);
    }
}


function animate() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    mass.forEach((elem) => {
        elem.draw();
        elem.y += elem.speed;
        if (elem.y == canvas.height) {
            ctx.clearRect(elem.x, elem.y, elem.size, elem.size);
            mass.splice(elem, 1);
        }
    });
    requestAnimationFrame(animate);
}


// тут может находится ваш код

function randomInteger(max = 256) {
    return Math.floor(Math.random() * max);
}

let cube;
let mass = [];

function makeRandomSquares() {
    cube = new Cubes();
    mass.push(cube);
}

canvas.onmousedown = function (event) {
    // mass.forEach((obj) => {
    //     if (((event.offsetX <= obj.x + obj.size) || (event.offsetX >= obj.x)) &&
    //         ((event.offsetY <= obj.y + obj.size) || ((event.offsetY >= obj.y)))) {
    //         ctx.clearRect(obj.x, obj.y, obj.size, obj.size);
    //         mass.slice(obj, 1);
    //         score++;
    //         score_el.innerHTML = score;
    //         console.log("hit", event.offsetX);
    //     } else {
    //         console.log("nohit", event.offsetX);
    //     }
    mass=mass.filter((obj) => {
        if (((event.offsetX <= (obj.x + obj.size)) && (event.offsetX >= obj.x)) &&
            ((event.offsetY <= (Math.floor(obj.y) + obj.size)) && ((event.offsetY >= Math.floor(obj.y))))) {
            score++;
            score_el.innerHTML = score;
            ctx.clearRect(obj.x, obj.y, obj.size, obj.size);
            console.log("hit", event.offsetX, "event.offsetY", event.offsetY, obj.x, obj.y);
            return false;
            //mass.splice(obj, 1);

        } else {
            console.log("nohit", event.offsetX);
            return true;
        }
    });
    // for (let cubesKey in mass) {
    //     if (((event.offsetX <= cubesKey.x + cubesKey.size) && (event.offsetX >= cubesKey.x)) &&
    //         ((event.offsetY <= cubesKey.y + cubesKey.size) && ((event.offsetY >= cubesKey.y)))) {
    //         ctx.clearRect(cubesKey.x, cubesKey.y, cubesKey.size, cubesKey.size);
    //         score++;
    //         score_el.innerHTML = score;
    //         console.log("shit", event.offsetX);
    //     } else {
    //         console.log("hello", event.offsetX);
    //     }
    // }

// cube=[];
    // cube.find(((event.offsetX <= cube.x + cube.size) || (event.offsetX >= cube.x)) && ((event.offsetY <= cube.y + cube.size) || ((event.offsetY > cube.y))));
    // console.log();
    // for(let i=0;i<cube.length;i++){
    //     if (((event.offsetX <= cube[i].x + cube[i].size) || (event.offsetX >= cube[i].x)) && ((event.offsetY <= cube[i].y + cube[i].size) || ((event.offsetY > cube[i].y)))) {
    //             ctx.clearRect(cube[i].x, cube[i].y, cube[i].size, cube[i].size);
    //             score++;
    //             score_el.innerHTML = score;
    //         } else {
    //             console.log("hello", event.offsetX);
    //         }
    // }
    // if (((event.offsetX <= x + size) || (event.offsetX >= x)) && ((event.offsetY <= y + size) || ((event.offsetY > y)))) {
    //     ctx.clearRect(x, y, size, size);
    //     score++;
    //     score_el.innerHTML = score;
    // } else {
    //     console.log("hello", event.offsetX);
    // }
}

btn_Start.onclick = function () {
    score = 0;
    score_el.innerHTML = score;
    timerId = setInterval(makeRandomSquares, 1000);
    makeRandomSquares();
};

btn_Stop.onclick = function clockStop() {
    clearInterval(timerId);
    timerId = null;
    console.log(mass);
    mass = [];
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
document.body.onload = animate;
