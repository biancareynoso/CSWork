function changeBG() {
    var myColor = prompt("What color for the background?");
    document.body.style.backgroundColor = myColor;
}

function changeTextColor() {
    var myColor = prompt("What color for the text?");
    document.body.style.color = myColor;
}

function changeSize() {
    var mySize = prompt("What size for the text?");
    document.body.style.fontSize = mySize;
}

function welcomeMessage() {
    var name = prompt("What is your name?");
    var message = "<h1>Hello " + name + "&#x263A<h1/>";
    document.getElementById("line1").innerHTML = message;
}

function changeButton() {
    var myColor = prompt("What color for the button text?");
    document.getElementById("B1").style.color = myColor;
}
