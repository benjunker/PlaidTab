//Add name to top of page
pt_start = "Welcome to PlaidTab, "
welcome_message = ""
chrome.storage.local.get("name_val", function(name_obj) {document.getElementById("welcome").innerHTML = (pt_start + name_obj.name_val + "!")})
// document.getElementById("welcome").innerHTML = welcome_message

// chrome.storage.local.get("name_val", function(name_obj) {console.log(name_obj.name_val)});
// chrome.storage.local.get("healthy_eating_pref", function(he_obj) {console.log(he_obj.healthy_eating_pref)});
// var fitness_pref = chrome.storage.local.get("fitness_pref", function(fitness_obj) {console.log(fitness_obj.fitness_pref)});
// var sleep_pref = chrome.storage.local.get("sleep_pref", function(sleep_obj) {console.log(sleep_obj.sleep_pref)});




// Set onClick events
document.getElementById("toggleHW").onclick = function() {toggle();};
document.getElementById("toggleQuote").onclick = function() {toggleQuote();};
document.getElementById("toggleSleepQuote").onclick = function() {toggleSleepQuote();};
document.getElementById("toggleFitnessQuote").onclick = function() {toggleFitnessQuote();};
document.getElementById("toggleEvents").onclick = function() {toggleEvents();};
document.getElementById("toggleRecipe").onclick = function() {toggleRecipe();};
// document.getElementById("healthy_resources").onclick = function() {healthyResourcesButton();};
// document.getElementById("settingsButton").onclick = function() {settingsButton();};
document.getElementById("editEventButton").onclick = function() {editEventButton();};
document.getElementById("downarrow").onclick = function() {downButton();};


//Quotes
var quotes = ['"My heart is in the work" -- Andrew Carnegie', '"We cannot change the cards we are dealt,\njust how we play the hand.” -- Randy Pausch', '"It\'s not how hard you hit. It\'s how hard you get hit...and keep moving forward.” -- Randy Pausch']
var fit_quote = ['"Reading is to the mind what exercise is to the body." -- Joseph Addison']
var sleepy_quotes = ['"Think in the morning. Act in the noon. Eat in the evening. Sleep in the night." -- William Blake']
//“I love sleep. My life has the tendency to fall apart when I\'m awake, you know?” ― Ernest Hemingway
//"Sleep is that golden chain that ties health and our bodies together." -- Thomas Dekker
//"Sleep is the best meditation." -- Dalai Lama
//Physical fitness is not only one of the most important keys to a healthy body, it is the basis of dynamic and creative intellectual activity. John F. Kennedy
//Jogging is very beneficial. It's good for your legs and your feet. It's also very good for the ground. If makes it feel needed. Charles M. Schulz

var allquotes = quotes.concat(fit_quote).concat(sleepy_quotes).concat(quotes);

var fitness_pref = true;
document.getElementById("toggleFitnessQuote").checked = true;
// chrome.storage.local.get("fitness_pref", function(fitness_obj) {console.log(fitness_obj.fitness_pref)});
var sleep_pref = true; 
document.getElementById("toggleSleepQuote").checked = true;
// chrome.storage.local.get("sleep_pref", function(sleep_obj) {console.log(sleep_obj.sleep_pref)});

chrome.storage.local.get("fitness_pref", function(fitness_obj) {
  fitness_pref = fitness_obj.fitness_pref;
  chrome.storage.local.get("sleep_pref", function(sleep_obj) {
    sleep_pref = sleep_obj.sleep_pref;


if (fitness_pref && (!sleep_pref)) {
    console.log("hi");
    allquotes = quotes.concat(fit_quote).concat(quotes);
} else if (sleep_pref && !fitness_pref) {
    allquotes = quotes.concat(sleepy_quotes).concat(quotes);
} else if (!sleep_pref && !fitness_pref) {
    console.log("h2");
    allquotes = quotes.concat(quotes);
} else {
    allquotes = quotes.concat(fit_quote).concat(sleepy_quotes).concat(quotes);
}

var quote = allquotes[Math.floor(Math.random()*allquotes.length)]
document.getElementById('quote').innerHTML = quote
  });

});





//Healthy Recipe
var recipe = recipes[Math.floor(Math.random()*recipes.length)]
document.getElementById("recipe_name").innerHTML = recipe.title
document.getElementById("rec_image").src = recipe.image_url
document.getElementById("rec_href").href = recipe.source_url

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










