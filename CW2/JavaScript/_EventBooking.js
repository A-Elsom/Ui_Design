var currentDay = "";
let eventsOverview = document.getElementById("eventsOverview");
let addEventSection = document.getElementById("addEventSection");
let eventBrowser = document.getElementById("eventBrowserContainer");
let artEvents = document.getElementsByClassName("ArtEvent");
let foodEvents = document.getElementsByClassName("FoodEvent");
let historyEvents = document.getElementsByClassName("HistoryEvent");

//add event to day
function AddEvent_Friday(){
    currentDay = "fri";
    document.getElementById("titleBar").style.visibility = "collapse";
    eventsOverview.style.visibility = "collapse";
    eventsOverview.style.display = "none";
    addEventSection.style.visibility = "visible";
    eventBrowser.style.display = "grid";
}

function AddEvent_Saturday(){
    currentDay = "sat";
    document.getElementById("titleBar").style.visibility = "collapse";
    eventsOverview.style.visibility = "collapse";
    eventsOverview.style.display = "none";
    addEventSection.style.visibility = "visible";
    eventBrowser.style.display = "grid";
}

function AddEvent_Sunday(){
    currentDay = "sun";
    document.getElementById("titleBar").style.visibility = "collapse";
    eventsOverview.style.visibility = "collapse";
    eventsOverview.style.display = "none";
    addEventSection.style.visibility = "visible";
    eventBrowser.style.display = "grid";
}

//choose event for day

//filter the different events
function filterEventType(eventType){
    if(eventType === "food"){
        for(i = 0; i < foodEvents.length; i++){
            foodEvents[i].style.visibility = "visible";
            foodEvents[i].style.display = "grid";
        }
        for(i = 0; i < artEvents.length; i++){
            artEvents[i].style.visibility = "collapse";
            artEvents[i].style.display = "none";
        }
        for(i = 0; i < historyEvents.length; i++){
            historyEvents[i].style.visibility = "collapse";
            historyEvents[i].style.display = "none";
        }
    }

    if(eventType === "history"){
        for(i = 0; i < foodEvents.length; i++){
            foodEvents[i].style.visibility = "collapse";
            foodEvents[i].style.display = "none";
        }
        for(i = 0; i < artEvents.length; i++){
            artEvents[i].style.visibility = "collapse";
            artEvents[i].style.display = "none";
        }
        for(i = 0; i < historyEvents.length; i++){
            historyEvents[i].style.visibility = "visible";
            historyEvents[i].style.display = "grid";
        }
    }

    if(eventType === "art"){
        for(i = 0; i < foodEvents.length; i++){
            foodEvents[i].style.visibility = "collapse";
            foodEvents[i].style.display = "none";
        }
        for(i = 0; i < artEvents.length; i++){
            artEvents[i].style.visibility = "visible";
            artEvents[i].style.display = "grid";
        }
        for(i = 0; i < historyEvents.length; i++){
            historyEvents[i].style.visibility = "collapse";
            historyEvents[i].style.display = "none";
        }
    }
    
    if(eventType === "all"){
        for(i = 0; i < foodEvents.length; i++){
            foodEvents[i].style.visibility = "visible";
            foodEvents[i].style.display = "grid";
        }
        for(i = 0; i < artEvents.length; i++){
            artEvents[i].style.visibility = "visible";
            artEvents[i].style.display = "grid";
        }
        for(i = 0; i < historyEvents.length; i++){
            historyEvents[i].style.visibility = "visible";
            historyEvents[i].style.display = "grid";
        }
    }
}

//order events by price
function orderEvents(orderType){

}

//userChoseEvent
function addEvent(eventId){

}
