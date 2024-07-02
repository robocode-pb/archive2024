let can = document.getElementById('canvas');
let ctx = can.getContext('2d'); 
// context наша малювалка

can.height = 512;
can.width  = 256;

let bird = new Image();
let back = new Image();
let pipeB = new Image();
let pipeU = new Image();
let road = new Image();

bird.src = 'img/bird.png';
back.src =  'img/back.png';
pipeB.src = 'img/pipeBottom.png';
pipeU.src = 'img/pipeUp.png';
road.src =  'img/road.png';

let au_fly = new Audio();
au_fly.src = 'audio/fly.mp3';


const gravity = 0.1;
let velY = 0; // velocity швидкість

let x = 128;
let y = 0;

let score =0;
let gap = 350;
// let pipe = new Array();
let pipe = [];
pipe[0] = {
    x: can.width,
    y: 0
}


function draw(){
    velY += gravity
    y += velY;
 
    ctx.drawImage(back, 0, 0);
    ctx.drawImage(bird, x, y);
    if (y>=430) {
        velY = 0;        y = 0;
    }
    // i = element index
    for(let i = 0; i < pipe.length; i++){
        pipe[i].x -= 1;
        ctx.drawImage(pipeU, pipe[i].x, pipe[i].y);
        ctx.drawImage(pipeB, pipe[i].x, pipe[i].y+gap);
    if (pipe[i].x==80){
        score++;
     document.getElementById('score').innerHTML=
     'Score: ' + score; 
       
     pipe.push(
        {
            x: can.width,
            y: 0
        }
    );
    if (x + bird.width >= pipe[i].x && 
        x <= pipe[i].x + pipeU.width && 
        (y <= pipe[i].y + pipeU.height || 
        y + bird.height >= pipe[i].y + pipeU.height + gap)) {
          pause();
          if(confirm('Зіграти ще раз?'))
          location.reload();
    }
}
    }
    
    if (pipe[0].x < -100 ) pipe.shift(0);

    ctx.drawImage(road, 0, 430); // can.height - road.height
}



function moveUp(){
    if(y > 10){
    velY = -2;
    au_fly.play();
}}

can.addEventListener('mousedown', moveUp);
let time = setInterval(draw, 1000 / 50);   // 1000/50=60 FPS
function pause(){
    if (time==0){
        time = setInterval(draw, 1000 / 50);
    } else{
        clearInterval(time);
        time=0;
    }
   
   
}