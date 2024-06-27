function walk(previewPic){
    document.getElementById("message").innerHTML = "‎ ";
    document.getElementById('message').style.color = "black";
    previewPic.style.cursor = "pointer";
    document.getElementById('message').style.backgroundImage = "url(" + previewPic.src +")";
    document.getElementById('message').style.backgroundSize = "cover";
    document.getElementById('message').style.backgroundPosition = "center";
    document.getElementById('message').style.backgroundRepeat = "no-repeat";
    document.getElementById('message').style.boxShadow = "0 0 5px 10px rgba(0, 0, 0, 0.396);"
}
function lift(previewPic){
    document.getElementById("message").innerHTML = "‎ ";
    document.getElementById('message').style.color = "lavender";
    previewPic.style.cursor = "pointer";
    document.getElementById('message').style.backgroundImage = "url(" + previewPic.src +")";
    document.getElementById('message').style.backgroundSize = "cover";
    document.getElementById('message').style.backgroundPosition = "center";
    document.getElementById('message').style.backgroundRepeat = "no-repeat";
    document.getElementById('message').style.boxShadow = "0 0 5px 10px rgba(0, 0, 0, 0.396);"

}
function car(previewPic){
    document.getElementById("message").innerHTML = "‎ ";
    previewPic.style.cursor = "pointer";
    document.getElementById('message').style.color = "gold";
    document.getElementById('message').style.fontSize = "140%";
    document.getElementById('message').style.backgroundImage = "url(" + previewPic.src +")";
    document.getElementById('message').style.backgroundSize = "cover";
    document.getElementById('message').style.backgroundPosition = "center";
    document.getElementById('message').style.backgroundRepeat = "no-repeat";
    document.getElementById('message').style.boxShadow = "0 0 5px 10px rgba(0, 0, 0, 0.396);"

}
function muscle(previewPic){
    document.getElementById("message").innerHTML = "‎ ";
    document.getElementById('message').style.color = "black";
    previewPic.style.cursor = "pointer";
    document.getElementById('message').style.backgroundImage = "url(" + previewPic.src +")";
    document.getElementById('message').style.backgroundSize = "cover";
    document.getElementById('message').style.backgroundPosition = "center";
    document.getElementById('message').style.backgroundRepeat = "no-repeat";
    document.getElementById('message').style.boxShadow = "0 0 5px 10px rgba(0, 0, 0, 0.396);"

}
function chatt(previewPic){
    document.getElementById("message").innerHTML = "‎";
    previewPic.style.cursor = "pointer";
    document.getElementById('message').style.backgroundImage = "url(" + previewPic.src +")";
    document.getElementById('message').style.backgroundSize = "cover";
    document.getElementById('message').style.backgroundPosition = "center";
    document.getElementById('message').style.backgroundRepeat = "no-repeat";
    document.getElementById('message').style.boxShadow = "0 0 5px 10px rgba(0, 0, 0, 0.396);"

}
function hold(previewPic){
    document.getElementById("message").innerHTML = "‎ ";
    previewPic.style.cursor = "pointer";
    document.getElementById('message').style.backgroundImage = "url(" + previewPic.src +")";
    document.getElementById('message').style.backgroundSize = "cover";
    document.getElementById('message').style.backgroundPosition = "center";
    document.getElementById('message').style.backgroundRepeat = "no-repeat";
    document.getElementById('message').style.boxShadow = "0 0 5px 10px rgba(0, 0, 0, 0.396);"

}
function unDo(){
    document.getElementById("message").innerHTML = "Hover over or click on an image";
    document.getElementById('message').style.color = "rgb(6, 6, 41)";
    document.getElementById('message').style.fontSize = "130%";
    document.getElementById('message').style.backgroundImage = "url()";
    document.getElementById('message').style.backgroundSize = "100%";
    document.getElementById('message').style.boxShadow = "none";
    document.getElementById('hover').style.width = "max-content";
}
function setImages(){
    currentImages = document.querySelectorAll(".img");
    for(var i = 0; i < currentImages.length; i++){
        console.log("Image" + i)
        currentImages[i].setAttribute("tabindex", "0");
    }
}