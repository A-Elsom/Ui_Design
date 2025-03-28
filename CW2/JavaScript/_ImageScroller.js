//Scrolls images across on a banner for the webpage

const images = document.getElementsByClassName("scroll-image");

const speed = 0.3;

function _scroll(){
    let imageContainer = document.getElementById("image-scroller");
    var imageContainerStyle = getComputedStyle(imageContainer);
    for(var i = 0; i < images.length; i++){
        var image = images[i];
        var imageStyle = getComputedStyle(image);
        var imageWidth = imageStyle.width;
        var imagePos = parseFloat(imageStyle.right, 10);
        imagePos -= speed;
        image.style.right = imagePos + "px";;
        if(parseInt(imageContainerStyle.width,10) + imagePos < parseInt(imageContainerStyle.width,10)){
            image.style.right = (parseInt(imageContainerStyle.width,10) - parseInt(imageStyle.width, 10)) + "px";
            i--;
        }
    };
    requestAnimationFrame(_scroll);
}

_scroll();