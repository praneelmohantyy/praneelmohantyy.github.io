function upDate(previewPic){
    document.getElementById("message").innerHTML = previewPic.alt;
    previewPic.style.cursor = "pointer";
    document.getElementById('message').style.backgroundImage = "url(" + previewPic.src +")";
    document.getElementById('message').style.backgroundSize = "cover";
    document.getElementById('message').style.backgroundPosition = "center";
    document.getElementById('message').style.backgroundRepeat = "no-repeat";
    document.getElementById('message').style.boxShadow = "0 0 5px 10px rgba(0, 0, 0, 0.396);"

}
function unDo(){
    document.getElementById("message").innerHTML = "Hover over the image";
    document.getElementById('message').style.backgroundImage = "url()";
    document.getElementById('message').style.backgroundSize = "100%";
    document.getElementById('message').style.boxShadow = "none";
}
function setImages(){
    currentImages = document.querySelectorAll(".img");
    for(var i = 0; i < currentImages.length; i++){
        console.log("Image" + i)
        currentImages[i].setAttribute("tabindex", "0");
    }
}