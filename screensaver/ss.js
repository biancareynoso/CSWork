var colors = ['#ff0000','#ff4000','#ff8000','#ffbf00','#ffff00','#bfff00','#80ff00','#40ff00','#00ff00','#00ff40','#00ff80','#00ffbf','#00ffff','#00bfff','#0080ff','#0040ff','#0000ff','#4000ff','#8000ff','#bf00ff','#ff00ff','#ff00bf','#ff0080','#ff0040','#ff0000'];
var colorsLength = colors.length;
var windowX = 600;
var windowY = 600;

setInterval(makeRandomCircle, 500);
    function makeRandomCircle()
    {
        var index = Math.floor(Math.random()*colorsLength);
        var randomX = Math.floor(Math.random()*windowX);
        var randomY = Math.floor(Math.random()*windowY);
        var randomRadius = Math.floor(Math.random()*70);
        var myColor = colors[index];
        drawFilledCircle(randomX, randomY, randomRadius, myColor);

    }
setInterval(makeRandomRectangle, 600);
    function makeRandomRectangle()
    {
        var index = Math.floor(Math.random()*colorsLength);
        var randomX = Math.floor(Math.random()*windowX);
        var randomY = Math.floor(Math.random()*windowY);
        var randomHeight = Math.floor(Math.random()*100);
        var randomWidth = Math.floor(Math.random()*200);
        var myColor = colors[index];
        drawFilledRectangle(randomX, randomY, randomWidth, randomHeight, myColor);
    }
setInterval(makeRandomTriangle, 700);
    function makeRandomTriangle()
    {
        var index = Math.floor(Math.random()*colorsLength);
        var randomX = Math.floor(Math.random()*windowX);
        var randomY = Math.floor(Math.random()*windowY);
        var randomSide = Math.floor(Math.random()*300);
        var myColor = colors[index];
        drawFilledTriangle(randomX, randomY, randomSide, myColor);
    }
