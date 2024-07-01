let can = document.getElementById('canvas')
let ctx = can.getContext('2d');

can.addEventListener('mousedown', moveUp);
document.addEventListener('s', moveUp);

let time = setInterval(draw, 1000 / 45);
let score = 0;
let gap=350;

can.width = 256;
can.height = 512;

const g = 0.2;
let vY = 0;

let x = 100;
let y = 250;

let pipe = [];
pipe[0] = { x: can.width, y: 0 }



let bird = new Image();
let back = new Image();
let pB = new Image();
let pU = new Image();
let road = new Image();

bird.src = 'img/bird.png';
back.src = 'img/back.png';
pB.src = 'img/pipeBottom.png';
pU.src = 'img/pipeUp.png';
road.src = 'img/road.png';

let AuFly = new Audio();  
let AuScore = new Audio();

AuFly.src = 'audio/fly.mp3'
AuScore.src = 'audio/score.mp3'

function draw() {
    vY += g;
    y += vY;

    ctx.drawImage(back, 0, 0);
    ctx.drawImage(bird, x, y);

    if (y >= 430) {
        vY = 0;
        y = 250;
    }

    for (let i = 0; i < pipe.length; i++) {
        pipe[i].x -= 2.5;
        ctx.drawImage(pU, pipe[i].x, pipe[i].y);
        ctx.drawImage(pB, pipe[i].x, pipe[i].y + gap);
        if (pipe[i].x < 80 && pipe[i].x > 78) {
            score++
            document.getElementById('score').innerHTML = 'Score: ' + score;
            pipe.push({
                x: can.width,
                y: 0
            });
            if (x + bird.width >= pipe[i].x && 
                x <= pipe[i].x + pU.width && 
                (y <= pipe[i].y + pU.height || 
                y + bird.height >= pipe[i].y + pU.height + gap)) {
                  pause();
                  if(confirm('Зіграти ще раз?'))
                  location.reload();
            }
        }
        
    }

    if (pipe[0].x < -50) pipe.shift(0)

    ctx.drawImage(road, 0, 430);
}

function moveUp() {
    if (y > 45) {
        vY = -5;
        AuFly.play();
    }
}

function pause() {
    clearInterval(time);

    if (time == 0) {
        time = setInterval(draw, 1000 / 45);
    }
    else {
        clearInterval(time);
        time = 0;
    }
}