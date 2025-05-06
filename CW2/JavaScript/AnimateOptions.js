//causes the options to fade in on index page start
const ArtToFade = document.querySelector("#Art");
const HistoryToFade = document.querySelector("#History");
const FoodToFade = document.querySelector("#Food");

function fadeIn(){
    ArtToFade.classList.add("showOption");
    HistoryToFade.classList.add("showOption");
    FoodToFade.classList.add("showOption");
}