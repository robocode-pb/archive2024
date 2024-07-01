
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

let x = y = 0;
let pmb = false;

cvs.addEventListener('mousedown', mouseDown);
function mouseDown(mouse) {
	pmb = true;
}

cvs.addEventListener('mouseup', mouseUp);
function mouseUp(mouse) {
	pmb = false;
}

cvs.addEventListener('mousemove', painter);
function painter(mouse) {
	if (pmb == true) {
		ctx.fillStyle = document.getElementById('color').value;
		ctx.strokeStyle = document.getElementById('color').value;
		ctx.beginPath();
		ctx.moveTo(x, y);
		x = mouse.clientX;
		y = mouse.clientY;
		ctx.lineTo(x, y);
		ctx.beginPath();
		ctx.arc(x, y, boxRange, 0, 2 * Math.PI);
		ctx.fill();
	}
}

function chess() {
	let color = "#505050";
	for (let column = 1; column <= 8; column++) {
		for (let row = 1; row <= 8; row++) {
			ctx.fillStyle = color;
			ctx.fillRect(column * 75 + column * 1.5, row * 75 + row * 1.5, 75, 75);
			if (color == "#505050") color = "#deb887";
			else color = "#505050";
		}
		if (color == "#505050") color = "#deb887";
		else color = "#505050";
	}
}

let boxRange = 50;
let range = document.getElementById('range');
range.addEventListener('change', rangeChange);
function rangeChange() {
	boxRange = rangeChange.value;
	alert("Товщина пензлика змінена на: " + range.value);
}


