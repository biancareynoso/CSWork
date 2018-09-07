function welcomeMessage() {
    var name = prompt("What is your name?");
    var message = "<h1>Hello " + name + "&#x263A<h1/>";
    document.body.style.color = "#FFFFFF";
    document.getElementById("line1").innerHTML = message;
}