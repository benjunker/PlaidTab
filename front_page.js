// Sets the background photo to a randomly generating image
window.onload = function() {
  var rand = getRandomInt(0,5);
  // console.log(rand);
  var photoOptions = ['img/background-photo1.JPG', 'img/background-photo2.jpg', 'img/background-photo3.jpg', 
                      'img/background-photo4.jpg', 'img/background-photo5.jpg', 'img/background-photo6.jpg']
  document.getElementById('body').style.backgroundImage = ("url(" + photoOptions[rand] + ")");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function extractName(firstname) {
  chrome.storage.local.set({'name_val': firstname}, function() {console.log("Name Saved");});
  location.href = 'dashboard_home.html';
}


// var fitness = "";
// if (document.getElementById("setting_fitness").checked == true) {
// 	fitness = "true";
// } else {
// 	fitness = "false";
// }


chrome.storage.local.set({'healthy_eating_pref': false}, function() {console.log();});
chrome.storage.local.set({'fitness_pref': false}, function() {console.log();});
chrome.storage.local.set({'sleep_pref': false}, function() {console.log();});



function extractHealthyEating(healthyeating) {
  chrome.storage.local.set({'healthy_eating_pref': healthyeating}, function() {console.log(healthyeating);});
  //location.href = 'dashboard_home.html';
}

function extractFitness(fitness) {
  chrome.storage.local.set({'fitness_pref': fitness}, function() {console.log(fitness);});
  //location.href = 'dashboard_home.html';
}

function extractSleep(sleep) {
  chrome.storage.local.set({'sleep_pref': sleep}, function() {console.log(sleep);});
  //location.href = 'dashboard_home.html';
}



document.getElementById("begin_button").onclick = function() {extractName(document.getElementById("name_input").value);};
document.getElementById("setting_healthy_eating").onclick = function() {extractHealthyEating(document.getElementById("setting_healthy_eating").checked);};
document.getElementById("setting_fitness").onclick = function() {extractFitness(document.getElementById("setting_fitness").checked);};
document.getElementById("setting_sleep").onclick = function() {extractSleep(document.getElementById("setting_sleep").checked);};



document.getElementById("begin_button").href = "dashboard_home.html";




