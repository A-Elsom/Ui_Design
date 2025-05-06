//Scrolls images across on a banner for the webpage

const images = document.getElementsByClassName("scroll-image");
let imageContainer = document.getElementById("image-scroller");
let imageContainerStyle = getComputedStyle(imageContainer);

const speed = 0.2;

function _placeImages(){
    var xPos = parseInt(imageContainerStyle.width, 10);
    console.log(images.length);
    for(var i = 0; i < images.length; i++){
        var imageStyle = getComputedStyle(images[i]);
        images[i].style.left = (xPos) + "px";
        xPos -= parseInt(getComputedStyle(images[i]).width);
    };
    imageContainer.style.height = parseInt(getComputedStyle(images[0]).height,10) + "px";
}

function _scroll(){
    
    for(var i = 0; i < images.length; i++){
        var image = images[i];
        var imageStyle = getComputedStyle(image);
        var imageWidth = imageStyle.width;
        var imagePos = parseFloat(imageStyle.left, 10);
        imagePos -= speed;
        image.style.left = imagePos + "px";;
        if((parseInt(imageContainerStyle.width,10) + parseInt(imageStyle.width, 10)) + imagePos < parseInt(imageContainerStyle.width,10)){
            image.style.left = (parseInt(imageContainerStyle.width,10)) + "px";
            i--;
        }
    };
    requestAnimationFrame(_scroll);
}

_scroll();