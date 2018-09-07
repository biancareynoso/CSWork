var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


function drawCircle(x, y, radius, lineWidth, color)
{
	ctx.strokeStyle = color;
	ctx.lineWidth = lineWidth;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.stroke();
}

function drawRectangle(x, y, width, height, lineWidth, color)
{
	ctx.strokeStyle = color;
	ctx.lineWidth = lineWidth;
	ctx.beginPath();
	ctx.rect(x, y, width, height);
	ctx.stroke();

}

function drawFilledCircle(x, y, radius, color)
{
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.arc(x, y, radius, 0, 2 * Math.PI);
	ctx.fill();
}

function drawFilledRectangle(x, y, width, height, color)
{
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.fillRect(x, y, width, height);
}


function drawTriangle(x, y, sidelength, lineWidth, color)
{
	ctx.strokeStyle = color;
	ctx.lineWidth = lineWidth;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + sidelength, y);
	ctx.lineTo(x+(sidelength/2), y + (sidelength/2));
	ctx.lineTo(x, y);
	ctx.stroke();
}

function drawFilledTriangle(x, y, sidelength, color)
{
	ctx.fillStyle = color;
	ctx.beginPath();
	ctx.moveTo(x, y);
	ctx.lineTo(x + sidelength, y);
	ctx.lineTo(x+(sidelength/2), y + (sidelength/2));
	ctx.lineTo(x, y);
	ctx.fill();
}

