//----------------------------------------------------------TASK 1------------------------------------------------------

class Figure {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
}

class Line extends Figure {
    constructor(x1, y1, x2, y2, color) {
        super([x1, x2], [y1, y2], color);
    }

    draw(ctx) {
        ctx.beginPath();       // Начинает новый путь
        ctx.moveTo(this.x1, this.y1);    // Рередвигает перо в точку (30, 50)
        ctx.lineTo(this.x2, this.y2);  // Рисует линию до точки (150, 100)
        ctx.globalAlpha = 0.3;
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }
}

class Circle extends Figure {
    constructor(x, y, r, color) {
        super(x, y, color);
        this.r = r;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI);
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}


class Rect extends Figure {
    constructor(x, y, w, h, color) {
        super(x, y, color);
        this.w = w;
        this.h = h;
    }

    draw(ctx) {
        ctx.globalAlpha = 0.3;
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.w, this.h);
    }
}


class LineTrough {
    constructor(x1, y1, x2, y2, color) {
        this.canvas = document.getElementById("canvasID");
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
    }

    draw(ctx) {
        let x11 = this.x1, x22 = this.x2, y11 = this.y1, y22 = this.y2;
        ctx.beginPath();
        ctx.moveTo(x11, this.y1);
        while (x11 < this.canvas.width) {
            x11 += x22;
            ctx.lineTo(x11, this.y2);
            x11 += x22;
            ctx.lineTo(x11, this.y1);
        }
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }
}


let line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
let circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
let rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color
let rect2 = new Rect(260, 130, 200, 60, 'blue'); // x, y, w, h, color
let rect3 = new LineTrough(0, 0, 50, 60, 'blue'); // x, y, w, h, color

class Canvas {
    constructor(idCanvas) {
        let canvas = document.getElementById(idCanvas);
        this.ctx = canvas.getContext("2d");
    }

    add(...abc) {
        for (let i = 0; i < abc.length; i++) {
            abc[i].draw(this.ctx);
        }
    }
}


let drawArea = new Canvas('canvasID');
drawArea.add(line);
drawArea.add(circle, rect, rect2);
drawArea.add(rect3);



