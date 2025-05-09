var currentDay = "";
let eventsOverview = document.getElementById("eventsOverview");
let addEventSection = document.getElementById("addEventSection");
let eventBrowser = document.getElementById("eventBrowserContainer");
let artEvents = document.getElementsByClassName("ArtEvent");
let foodEvents = document.getElementsByClassName("FoodEvent");
let historyEvents = document.getElementsByClassName("HistoryEvent");
var fridayEventsChosen = [];
var saturdayEventsChosen = [];
var sundayEventsChosen = [];
var currentEventsCount = 0;

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
    if(orderType === "0"){

    }else{

    }
}

//userChoseEvent
function addEvent(eventId){
    let currentEvent = document.getElementById(eventId);
    
    let assignDay = document.getElementById(currentDay+ "EventBox");
    var eventName = currentEvent.getElementsByTagName("h2")[0].textContent;
    var eventTime;
    var tempTime;
    for(i = 0; i < currentEvent.childNodes.length; i++){
        if(currentEvent.children[i].tagName === "SELECT"){
            tempTime = currentEvent.children[i];
            eventTime = tempTime.options[tempTime.selectedIndex].text;
            break;
        }
    }
    if((currentDay === "fri" && fridayEventsChosen.includes(eventId) === true) ||
    (currentDay === "sat" && saturdayEventsChosen.includes(eventId) === true) ||
    (currentDay === "sun" && sundayEventsChosen.includes(eventId) === true)){
        alert("cannot add event, event already exists");
    }else{

        if(eventTime === "Select Time"){
            //error handling
            tempTime.style.borderColor = "red";
            tempTime.style.borderWidth = "2px";
            tempTime.style.boarderStyle = "solid";
        }else{
            tempTime.style.borderColor = "none";
            tempTime.style.borderWidth = "none";
            tempTime.style.boarderStyle = "none";
            var newEvent = document.createElement('DIV');
            newEvent.id = currentEventsCount;
            newEvent.className = "event";
            currentEventsCount++;
            var nameContainer = document.createElement("P");
            var timeContainer = document.createElement("P");
            nameContainer.className = "eventName";
            timeContainer.className = "eventTime";
            nameContainer.textContent = eventName;
            timeContainer.textContent = eventTime;
            newEvent.appendChild(nameContainer);
            newEvent.appendChild(timeContainer);
            assignDay.appendChild(newEvent);
            if(currentDay === "fri"){
                fridayEventsChosen.push(eventId);
            }if (currentDay === "sat") {
                saturdayEventsChosen.push(eventId);
            } else {
                sundayEventsChosen.push(eventId);
            }
            goBack();
        }
    }
}

//go back
function goBack(){
    currentDay = "";
    document.getElementById("titleBar").style.visibility = "visible";
    eventsOverview.style.visibility = "visible";
    eventsOverview.style.display = "block";
    addEventSection.style.visibility = "collapse";
    eventBrowser.style.display = "none";
}
