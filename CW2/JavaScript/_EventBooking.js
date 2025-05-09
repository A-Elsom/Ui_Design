var currentDay = "";
let eventsOverview = document.getElementById("eventsOverview");
let addEventSection = document.getElementById("addEventSection");
let eventBrowser = document.getElementById("eventBrowserContainer");

//add event to day
function AddEvent_Friday(){
    currentDay = "fri";
    eventsOverview.style.visibility = "collapse";
    eventsOverview.style.display = "none";
    addEventSection.style.visibility = "visible";
    addEventSection.style.display = "grid";
    eventBrowser.style.display = "grid";
}

function AddEvent_Saturday(){
    currentDay = "sat";
    eventsOverview.style.visibility = "collapse";
    addEventSection.style.visibility = "visible";
}

function AddEvent_Sunday(){
    currentDay = "sun";
    eventsOverview.style.visibility = "collapse";
    addEventSection.style.visibility = "visible";
}

//choose event for day

//filter the different events
function filterEventType(eventType){

}

//order events by price
function orderEvents(orderType){

}

//userChoseEvent
function addEvent(eventId){

}
