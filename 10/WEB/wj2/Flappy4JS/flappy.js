let can = document.getElementById("canvas");
can.height = 512;
can.width = 256;

let bird = new Image();
bird.src = "img/bird.png" ;

let back = new Image();
back.src = "img/back.png";

let pipeBottom = new Image();
pipeBottom.src = "img/pipeBottom.png";

let pipeUp = new Image();
pipeUp.src = "img/pipeUp.png";

let road = new Image();
road.src = "img/road.png";

let ctx = can.getContext("2d");

const gravity = 0.2;
let velY = 0;

let score = 0




function draw () {
    velY += gravity;
    y += velY;
    ctx.drawImage(back, 0, 0);
    
    ctx.drawImage(bird, x, y);
    if (y>=430) {
        velY = 0;
        y = 0;
    }      

    // i = element index
    for (let i = 0; i < pipe.length; i++) {
        pipe[i].x -= 2;
        ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y)
        ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y+350)
    if (pipe[i].x==80) {
        score ++;
        document.getElementById('score').innerHTML
        ="Рахунок: " + score;

       
        pipe.push({
    x: can.width,
    y: 0}    );}
}
    

    if (pipe[0].x<-30) pipe.shift(0)
ctx.drawImage(road, 0, 430);

}
let time = setInterval(draw, 20)

let x = 125.5;
let y = 0;

let au_fly = new Audio();
au_fly.src = "audio/fly.mp3";


function MoveUp(){
    if (y > 20) {
    au_fly.play();
    velY =- 5;
}
}
can.addEventListener("mousedown", MoveUp);

let pipe = new Array;

pipe[0] = {
    x: can.width,
    y: 1
}

function pause() {
    if (time == 0) {
       time = setInterval(draw, 20)
    }
    else {
        clearInterval(time)
time = 0
    }
    
    

}