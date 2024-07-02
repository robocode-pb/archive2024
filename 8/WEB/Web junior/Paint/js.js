
let cvs = document.getElementsByTagName('canvas')[0];
// let cvs = document.getElementById("canvas");
let ctx = cvs.getContext("2d");


cvs.width = window.innerWidth;
cvs.height = window.innerHeight;



function clearAll() {
	ctx.clearRect(0, 0, cvs.width, cvs.height);
}


function fillIn() {
	ctx.fillStyle = document.getElementById('color').value;
	ctx.fillRect(0, 0, cvs.width, cvs.height);
}


cvs.addEventListener('mousemove',painter);
let x = y = 0;
function painter(mouse){
	ctx.strokeStyle = ctx.fillStyle = document.getElementById('color').value;
	ctx.beginPath();
	ctx.moveTo(x,y);
	x = mouse.clientX;	y = mouse.clientY;
	ctx.lineTo(x,y);
	ctx.stroke()



}

function chessboard(){
 let coulor = 'yellow';
 for(let c=0; c<8; c++){
	ctx.fillStyle = coulor;
	ctx.fillRect(стовпчик*30, 0,30,30);
    if(coulor=='yelow') colur
// else if(cour=='read) cour='yellow';
 }
// if(colur=='read) cour='red';)
//     else colur 'yellow';
}

chessboard();

