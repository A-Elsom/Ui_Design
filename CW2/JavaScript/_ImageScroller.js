//Scrolls images across on a banner for the webpage

let images = [document.getElementsByClassName("scroll-image")];
const imageContainer = document.getElementById("image-scroller");

if(images.length > 0){
    alert("images recieved");
}else{
    alert("no images");
}

const speed = 2;
const imageContainerStyle = getComputedStyle(imageContainer);
function _scroll(){
    alert("it ran");
    for(var i = 0; i < images.length; i++){
        alert("1");
        var imageStyle = getComputedStyle(images[i]);
        //imageStyle.left -= speed;
        
        
        if(imageStyle.left + imageContainerStyle.width < 0){
            imageStyle.left = imageContainerStyle.width - (imageStyle.left + imageContainerStyle.width);
            i--;
        }
    };
    requestAnimationFrame(_scroll);
}

_scroll();