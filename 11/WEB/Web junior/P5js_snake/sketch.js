// стан гри (game, pause, reload)
let gameState = 'game'; 

const speed = 20;

// s-snake
let s = {
  // head=(x,y)
  x:0,
  y:0,
  moveX:1,
  moveY:0,
  tail:[]
};
// f-food
let f = {
  x:300,
  y:300
}

function setup() {
  frameRate(10);
  createCanvas(400, 400);
  // довжина змійки
  // кількість очок
}



function draw() {
  if(gameState==='game'){
    background(220);

    // малювання
    square(s.x, s.y, 40);
    square(f.x, f.y, 40);

    if(s.tail.length > 0)
      for(let i=0; i<s.tail.length; i++)
        square(s.tail[i].x, s.tail[i].y, 40);

    // кушац
    if(s.x==f.x && s.y==f.y){
      f.x = Math.floor(Math.random()*20)*19;
      f.y = Math.floor(Math.random()*20)*19;
      s.tail.push({ x:s.x, y:s.y })
    }

    // рух хвоста
    if(s.tail.length > 0){
      for(let i=s.tail.length-1; i>0; i--){
        s.tail[i].x = s.tail[i-1].x;
        s.tail[i].y = s.tail[i-1].y;
      }
      s.tail[0].x = s.x;
      s.tail[0].y = s.y;
    }
    // рух
    s.x += speed*s.moveX;
    s.y += speed*s.moveY;
    if(s.x<0)   s.x=400;
    if(s.x>400) s.x=0;
    if(s.y<0)   s.y=400;
    if(s.y>400) s.y=0;
    

    // чи програли?
    if(s.tail.length > 0){
      for(let i=s.tail.length-1; i>0; i--){
  if(s.x== s.tail[i]&& s.y == s.tail[i.move.y])
    gameState = 'pause';
} else 

     if  (gameStarte==='pause'){


    }
  
  }




}


function keyPressed(){
  if(keyCode === DOWN_ARROW){
    s.moveX = 0;
    s.moveY = 1;
  } else if(keyCode === UP_ARROW){
    s.moveX = 0;
    s.moveY = -1;
  } else if(keyCode === LEFT_ARROW){
    s.moveX = -1;
    s.moveY = 0;
  } else if(keyCode === RIGHT_ARROW){
    s.moveX = 1;
    s.moveY = 0;
  }
}