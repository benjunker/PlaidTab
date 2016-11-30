var eventStatus = "A"
var onlyHW = false;
var quote = true;
var events = true;



// Sets the background photo to a randomly generating image
window.onload = function() {
  var rand = getRandomInt(0,6);
  console.log(rand);
  var photoOptions = ['img/background-photo1.JPG', 'img/background-photo2.jpg', 'img/background-photo3.jpg', 
                      'img/background-photo4.png', 'img/background-photo5.jpg', 'img/background-photo6.jpg',
                      'img/background-photo7.jpg']
  document.getElementById('body').style.backgroundImage = ("url(" + photoOptions[rand] + ")");
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// need to modify this
function saveChanges() {
        // Get a value saved in a form.
        var theValue = textarea.value;
        // Check that there's some code there.
        if (!theValue) {
          message('Error: No value specified');
          return;
        }
        // Save it using the Chrome extension storage API.
        chrome.storage.sync.set({'value': theValue}, function() {
          // Notify that we saved.
          message('Settings saved');
        });
      }

function extractName(firstname) {
  // console.log("hi")
  // console.log(firstname);
  sessionStorage.setItem('name', firstname);
  location.href = 'dashboard_home.html';
}

function healthyResourcesButton() {
  console.log("hi");

}

function settingsButton() {
  console.log("hi");

}

function eventEditButton(){
  console.log("hi");
}

function downButton(){
  if (eventStatus=="A") {
    document.getElementById('event1').children[0].src = "img/events/meditation.png"
    document.getElementById('event1').children[1].innerHTML = "Meditation"
    document.getElementById('event2').children[0].src = "img/events/massage.png"
    document.getElementById('event2').children[1].innerHTML = "Massage Therapy"
    document.getElementById('event3').children[0].src = "img/events/Vertigo.png"
    document.getElementById('event3').children[1].innerHTML = "Movie Night"
    eventStatus = "B";
  } else if (eventStatus=="B") {
    document.getElementById('event1').children[0].src = "img/events/paws_to_relax.png"
    document.getElementById('event1').children[1].innerHTML = "Paws to Relax"
    document.getElementById('event2').children[0].src = "img/events/stop_hunger.png"
    document.getElementById('event2').children[1].innerHTML = "CMU Stops Hunger"
    document.getElementById('event3').children[0].src = "img/events/makonnen.png"
    document.getElementById('event3').children[1].innerHTML = "ILOVEMAKONNEN"
    eventStatus = "A";
  }
}

function toggle() {
    if (!onlyHW) {
        // document.getElementById("toggleHW").value = "No?";
        document.getElementById("eventStatusText").innerHTML = "Currently Displaying Only Health & Wellness Events"
        document.getElementById('event1').children[0].src = "img/events/meditation.png";
        document.getElementById('event1').children[1].innerHTML = "Meditation";
        document.getElementById('event2').children[0].src = "img/events/paws_to_relax.png";
        document.getElementById('event2').children[1].innerHTML = "Paws to Relax";
        document.getElementById('event3').children[0].src = "img/events/massage.png";
        document.getElementById('event3').children[1].innerHTML = "Massage Therapy";
        eventStatus = "C";
        onlyHW = true
    } else {
      document.getElementById("eventStatusText").innerHTML = "Currently Displaying All Events"
      onlyHW = false;
      // document.getElementById("toggleHW").value = "Yes?";
      eventStatus = "B";
      downButton();
    }
}

function toggleQuote() {
  if (quote) {
    quote = false;
    document.getElementById('quote').innerHTML = '';
  } else {
    quote = true;
    document.getElementById('quote').innerHTML = ' "My heart is in the work" -- Andrew Carnegie ';
  }
}

function toggleEvents() {
  if (events) {
    events = false;
    document.getElementById('events').style.display = 'none';
  } else {
    events = true;
    document.getElementById('events').style.display = '';
  }
}
