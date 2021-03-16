//----------------------------------------------------------TASK 1------------------------------------------------------
document.addEventListener('DOMContentLoaded', function(){
    function Figure(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    function Line(x1, y1, x2, y2, color) {
        Figure.apply(this, [[x1, x2], [y1, y2], color]);
        this.draw = function (ctx) {
            ctx.beginPath();       // Начинает новый путь
            ctx.moveTo(x1, y1);    // Рередвигает перо в точку (30, 50)
            ctx.lineTo(x2, y2);  // Рисует линию до точки (150, 100)
            ctx.globalAlpha = 0.3;
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }

    function Circle(x, y, r, color) {
        Figure.call(this, x, y, color);
        this.draw = function (ctx) {
            ctx.beginPath();
            ctx.arc(x, y, r, 0, 2 * Math.PI);
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = color;
            ctx.fill();
        }
    }

    function Rect(x, y, w, h, color) {
        Figure.call(this, x, y, color);
        this.draw = function (ctx) {
            ctx.globalAlpha = 0.3;
            ctx.fillStyle = color;
            ctx.fillRect(x, y, w, h);
        }
    }

    function LineTrough(x1, y1, x2, y2, color) {
        let canvas = document.getElementById("canvasID");
        this.draw = function (ctx) {
            let x11 = x1, x22 = x2, y11 = y1, y22 = y2;
            ctx.beginPath();
            ctx.moveTo(x11, y1);
            while (x11 < canvas.width) {
                x11 += x22;
                ctx.lineTo(x11, y2);
                x11 += x22;
                ctx.lineTo(x11, y1);
            }
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }

    let line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
    let circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
    let rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color
    let rect2 = new Rect(260, 130, 200, 60, 'blue'); // x, y, w, h, color
    let rect3 = new LineTrough(0, 0, 50, 60, 'blue'); // x, y, w, h, color

    function Canvas(idCanvas) {
        let canvas = document.getElementById(idCanvas);
        let ctx = canvas.getContext("2d");
        this.add = function (...abc) {
            for (let i = 0; i < abc.length; i++) {
                abc[i].draw(ctx);
            }
        }
    }

    let drawArea = new Canvas('canvasID');
    drawArea.add(line);
    drawArea.add(circle, rect, rect2);
    drawArea.add(rect3);
});



