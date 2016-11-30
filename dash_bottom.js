//Add name to top of page

document.getElementById("welcome").innerHTML = "Welcome to PlaidTab, "+sessionStorage.name+"!"


//Quotes
var quotes = ['"My heart is in the work" -- Andrew Carnegie', '"We cannot change the cards we are dealt,\njust how we play the hand.” -- Randy Pausch', '"It\'s not how hard you hit. It\'s how hard you get hit...and keep moving forward.” -- Randy Pausch']
var quote = quotes[Math.floor(Math.random()*quotes.length)]
document.getElementById('quote').innerHTML = quote


//Event Modal

var eventmodal = document.getElementById('eventModal');
var eventbtn = document.getElementById("editEventButton");
var eventspan = document.getElementById('closeEvents');
eventbtn.onclick = function() {
    eventmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
eventspan.onclick = function() {
    eventmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == eventmodal) {
        eventmodal.style.display = "none";
    }
}




//Settings Modal

var settingsmodal = document.getElementById('settingsModal');
var settingsbtn = document.getElementById("settingsButton");
var settingsspan = document.getElementById('closeSettings');
settingsbtn.onclick = function() {
    settingsmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
settingsspan.onclick = function() {
    settingsmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == settingsmodal) {
        settingsmodal.style.display = "none";
    }
}




//Healthy Resources Modal

var hrmodal = document.getElementById('hrModal');
var hrbtn = document.getElementById("healthy_resources");
var hrspan = document.getElementById('closeHR');
hrbtn.onclick = function() {
    hrmodal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
hrspan.onclick = function() {
    hrmodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == hrmodal) {
        hrmodal.style.display = "none";
    }
}




//Notes
// Some base code for modals from: http://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal