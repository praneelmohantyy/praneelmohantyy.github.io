//var name = prompt("Como se llama?")
//document.write(name)


/*var name;
name = prompt("What is your name?")
document.write(name)
document.write("<h1>" + name + "</h1>")
document.write(name + 7 + "<br>")
document.write(document.title + "<br>")
var pars = document.getElementsByTagName('p')
document.write(pars + "<br/>")
document.write(pars.length)*/

/*name = "Hi" + "There"
document.write(name)
so = "Hi" + 5
document.write("<br>")
document.write(so)
s = "Hi"
s += "Sus"
document.write("<br>")
document.write(s)*/

/*x = 2
document.write(x==5)
document.write(x != 5)*/

/* x = 12
document.write(x == "12") only compares value
document.write(x === "12") compares both value and type
document.write(x !== "12) not equal to
&& = AND
|| = OR
!() = NOT*/

/*function myFunction(){
    alert("Welcome");
}
function myZum(msg){
    alert(msg);
}
var x = "Hello"
myFunction(x)*/

/*function welcomeMsg(msg){
    alert(msg);
    var name = prompt("What is your name?")
    document.write(name);
}
var firstName = welcomeMsg("Hola!")*/

function displayDate(){
    document.getElementById("date").innerHTML = Date()
}

function closeMe(){
    x=document.getElementById("demo")
    x.className="closed"
}
function openMe(){
    x=document.getElementById("demo")
    x.className="open"
}
function showProperties(e){
    document.getElementById("message").innerHTML = e.alt;
}

var football = ["Real Madrid", "Barcelona", "Manchester City"];

function loadFootball(){
    document.getElementById("football").innerHTML = football;
}

function myFunction(){
    var footy = prompt("What is your favorite football team?");
    football[football.length] = footy;
    document.getElementById("football").innerHTML = football;
}
function myImage(){
    options = ["carlos .webp", "charles.jpeg", "lando.jpeg", "alonso.webp",
    "daniel.webp", "george.jpeg", "lewis.webp"];
    randomImg = "Photos/" + options[Math.floor(Math.random() * options.length)];
    img = document.getElementById("header_img");
    img.setAttribute("src", randomImg);
    img.setAttribute("alt", "");
}