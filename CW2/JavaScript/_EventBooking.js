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


if(sessionStorage.getItem("currentUser") != null){
    document.getElementById("text").textContent = sessionStorage.getItem("currentUser");
}

if(sessionStorage.getItem("fridayEvents") === null){
    sessionStorage.setItem("fridayEvents", JSON.stringify(fridayEventsChosen));
}else{
    fridayEventsChosen = JSON.parse(sessionStorage.getItem("fridayEvents"));
    currentDay = "fri";
    for(i = 0; i < fridayEventsChosen.length ; i++){
        loadEvents(i);
    }
}
if(sessionStorage.getItem("saturdayEvents") == null){
    sessionStorage.setItem("saturdayEvents", JSON.stringify(saturdayEventsChosen));
}else{
    saturdayEventsChosen = JSON.parse(sessionStorage.getItem("saturdayEvents"));
    currentDay = "sat";
    for(i = 0; i < saturdayEventsChosen.length ; i++){
        loadEvents(i);
    }
}
if(sessionStorage.getItem("sundayEvents") == null){
    sessionStorage.setItem("sundayEvents", JSON.stringify(sundayEventsChosen));
}else{
    sundayEventsChosen = JSON.parse(sessionStorage.getItem("sundayEvents"));
    currentDay = "sun";
    for(i = 0; i < sundayEventsChosen.length ; i++){
        loadEvents(i);
    }
}

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

function loadEvents(index){
    var currentArray = [];
    if(currentDay === "fri"){
        currentArray = fridayEventsChosen;
    }else if(currentDay === "sat"){
        currentArray = saturdayEventsChosen;
    }else{
        currentArray = sundayEventsChosen;
    }
    var tempId = currentArray[index][0];
    let currentEvent = document.getElementById(tempId);
    let assignDay = document.getElementById(currentDay+ "EventBox");
    var eventName = currentEvent.getElementsByTagName("h2")[0].textContent;
    var eventTime;
    
    eventTime = currentArray[index][2];
    eventName = currentArray[index][1];
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
    if((currentDay === "fri" && dayContainsEvent(eventId) === true) ||
    (currentDay === "sat" && dayContainsEvent(eventId) === true) ||
    (currentDay === "sun" && dayContainsEvent(eventId) === true)){
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
                fridayEventsChosen.push([eventId,eventName,eventTime]);
                sessionStorage.setItem("fridayEvents", JSON.stringify(fridayEventsChosen));
            }else if (currentDay === "sat") {
                saturdayEventsChosen.push([eventId,eventName,eventTime]);
                sessionStorage.setItem("saturdayEvents", JSON.stringify(saturdayEventsChosen));
            }else {
                sundayEventsChosen.push([eventId,eventName,eventTime]);
                sessionStorage.setItem("sundayEvents", JSON.stringify(sundayEventsChosen));
            }
            goBack();
        }
    }
}

function dayContainsEvent(eventId){
    var currentArray = [];
    if(currentDay === "fri"){
        currentArray = fridayEventsChosen;
    }else if(currentDay === "sat"){
        currentArray = saturdayEventsChosen;
    }else{
        currentArray = sundayEventsChosen;
    }

    for(i = 0; i < currentArray.length; i++){
        if (currentArray[i][0] === eventId){
            return true;
        }
    }
    return false;
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
