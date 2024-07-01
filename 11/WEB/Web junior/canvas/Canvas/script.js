let canvas = document.getElementById('canvas');

let ctx = canvas.getContext("2d");
canvas.with = 700;
canvas.height = 500;
ctx.lineWith = 10;
ctx.moveTo(270, 200);
ctx.lineTo(350, 300);
ctx.lineTo(450, 150);
ctx.stroke();