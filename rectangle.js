function drawRectangle()
{
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    var color = ['#ff0000','#ff4000','#ff8000','#ffbf00','#ffff00','#bfff00','#80ff00','#40ff00','#00ff00','#00ff40','#00ff80','#00ffbf','#00ffff','#00bfff','#0080ff','#0040ff','#0000ff','#4000ff','#8000ff','#bf00ff','#ff00ff','#ff00bf','#ff0080','#ff0040','#ff0000'];
    var randomColor = color[Math.floor(Math.random() * color.length)];
    console.log('rectangle: ' + randomColor);
    ctx.lineWidth = width;
    var height = Math.floor(Math.random() * 100);
    var width = Math.floor(Math.random() * 100);
    var x = Math.floor(Math.random() * 300);
    var y = Math.floor(Math.random() * 300);
    ctx.beginPath();
    ctx.rect(x, y, height, width);
    ctx.fillStyle = randomColor;
    ctx.fill();
    ctx.stroke();
}
function drawCircle()
{
    var canvas = document.getElementById("second");
    var ctx = canvas.getContext("2d");
    ctx.strokeStyle = color;
    var color = ['#ff0000','#ff4000','#ff8000','#ffbf00','#ffff00','#bfff00','#80ff00','#40ff00','#00ff00','#00ff40','#00ff80','#00ffbf','#00ffff','#00bfff','#0080ff','#0040ff','#0000ff','#4000ff','#8000ff','#bf00ff','#ff00ff','#ff00bf','#ff0080','#ff0040','#ff0000'];
    var randomColor = color[Math.floor(Math.random() * color.length)];
    console.log('circle: ' + randomColor);
    ctx.lineWidth = width;
    var height = Math.floor(Math.random() * 100);
    var width = Math.floor(Math.random() * 100);
    var radius = Math.floor(Math.random() * 100);
    var x = Math.floor(Math.random() * 400);
    var y = Math.floor(Math.random() * 400);
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.fillStyle = randomColor;
    ctx.fill();
    ctx.stroke();
}

drawRectangle();
drawCircle();