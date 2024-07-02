let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

function clearAll() {
	ctx.clearRect(0, 0, cvs.width, cvs.height);
}

let myColor = 'black';
document.getElementById('color')
  .addEventListener('change', (update)=>{
    myColor = update.target.value;
});

function fillIn() {
	ctx.fillStyle = myColor;
	ctx.fillRect(0, 0, cvs.width, cvs.height);
}


let x = y = 0;
let isPainter = false;

function updateXY(mouse){
    x = mouse.clientX;
    y = mouse.clientY - cvs.offsetTop;
}

cvs.addEventListener('mousedown', (mouse)=>{
    isPainter = true
    updateXY(mouse);
});
cvs.addEventListener('mouseup', ()=>{
    isPainter = false
});
// cvs.addEventListener('mouseleave', ()=>{
//     isPainter = false
// });

cvs.addEventListener('mousemove',(mouse)=>{
    if (!isPainter) return 0; 
    ctx.strokeStyle = myColor; 
    ctx.beginPath();
    ctx.moveTo(x,y);
    updateXY(mouse);
    ctx.lineTo(x, y);
    ctx.stroke();
});











let color = 'yellow';
function chessBoard(){
    for(let рядок=0; рядок<8; рядок++){
    for(let стовпчик=0; стовпчик<8; стовпчик++){
        ctx.fillStyle = color;
        ctx.fillRect(стовпчик*30,рядок*30, 30,30);
        if(color=='yellow') color='blue';
        else color='yellow';
        // else if(color=='red') color='yellow';
    } 
    if(color=='yellow') color='blue';
        else color='yellow';
    }
    }
    chessBoard();


let lineWidth = 50;
let colorPicker = document.getElementById('range');
colorPicker.addEventListener('change', colorPickerChange);                       

function colorPickerChange(){
    lineWidth=colorPicker.value;
   console.log(colorPicker.value);
}


