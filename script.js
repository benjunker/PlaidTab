var eventStatus = "A";
var onlyHW = false;
var quoteTF = true;
var eventsTF = true;
var recipeTF = true;


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

function healthyResourcesButton() {
  console.log("hi");

}

function settingsButton() {
  console.log("hi");

}

function eventEditButton(){
  console.log("hi");
}

// Random Function From http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function downButton(){
  if (onlyHW) {
    hw_ref = (hw_ref+3)%hw_events.length
    document.getElementById('event1').children[0].children[0].src = hw_events[hw_ref].picture;
    document.getElementById('event1').children[0].href = hw_events[hw_ref].link;
    document.getElementById('event1').children[0].children[1].innerHTML = hw_events[hw_ref].name;
    document.getElementById('event2').children[0].children[0].src = hw_events[(hw_ref+1)%hw_events.length].picture;
    document.getElementById('event2').children[0].href = hw_events[(hw_ref+1)%hw_events.length].link;
    document.getElementById('event2').children[0].children[1].innerHTML = hw_events[(hw_ref+1)%hw_events.length].name;
    document.getElementById('event3').children[0].children[0].src = hw_events[(hw_ref+2)%hw_events.length].picture;
    document.getElementById('event3').children[0].href = hw_events[(hw_ref+2)%hw_events.length].link;
    document.getElementById('event3').children[0].children[1].innerHTML = hw_events[(hw_ref+2)%hw_events.length].name;
  } else {
    hw_ref = (hw_ref+1)%hw_events.length
    ce_ref = (ce_ref+2)%campus_events.length
    evs = shuffle(['event1', 'event2', 'event3'])
    ce1 = evs.pop()
    hw = evs.pop()
    ce2 = evs.pop()
    document.getElementById(ce1).children[0].children[0].src = campus_events[ce_ref].picture;
    document.getElementById(ce1).children[0].href = campus_events[ce_ref].link;
    document.getElementById(ce1).children[0].children[1].innerHTML = campus_events[ce_ref].name;
    document.getElementById(hw).children[0].children[0].src = hw_events[hw_ref].picture;
    document.getElementById(hw).children[0].href = hw_events[hw_ref].link;
    document.getElementById(hw).children[0].children[1].innerHTML = hw_events[hw_ref].name;
    document.getElementById(ce2).children[0].children[0].src = campus_events[(ce_ref+1)%campus_events.length].picture;
    document.getElementById(ce2).children[0].href = campus_events[(ce_ref+1)%campus_events.length].link;
    document.getElementById(ce2).children[0].children[1].innerHTML = campus_events[(ce_ref+1)%campus_events.length].name;
  }
  // if (eventStatus=="A") {
  //   document.getElementById('event1').children[0].src = "img/events/meditation.png"
  //   document.getElementById('event1').children[1].innerHTML = "Meditation"
  //   document.getElementById('event2').children[0].src = "img/events/massage.png"
  //   document.getElementById('event2').children[1].innerHTML = "Massage Therapy"
  //   document.getElementById('event3').children[0].src = "img/events/Vertigo.png"
  //   document.getElementById('event3').children[1].innerHTML = "Movie Night"
  //   eventStatus = "B";
  // } else if (eventStatus=="B") {
  //   document.getElementById('event1').children[0].src = "img/events/paws_to_relax.png"
  //   document.getElementById('event1').children[1].innerHTML = "Paws to Relax"
  //   document.getElementById('event2').children[0].src = "img/events/stop_hunger.png"
  //   document.getElementById('event2').children[1].innerHTML = "CMU Stops Hunger"
  //   document.getElementById('event3').children[0].src = "img/events/makonnen.png"
  //   document.getElementById('event3').children[1].innerHTML = "ILOVEMAKONNEN"
  //   eventStatus = "A";
  // }
}

function toggle() {
    if (!onlyHW) {
      hw_ref = 0
      ce_ref = 0
    //     // document.getElementById("toggleHW").value = "No?";
        document.getElementById("eventStatusText").innerHTML = "Currently Displaying Only Health & Wellness Events"
    //     document.getElementById('event1').children[0].src = "img/events/meditation.png";
    //     document.getElementById('event1').children[1].innerHTML = "Meditation";
    //     document.getElementById('event2').children[0].src = "img/events/paws_to_relax.png";
    //     document.getElementById('event2').children[1].innerHTML = "Paws to Relax";
    //     document.getElementById('event3').children[0].src = "img/events/massage.png";
    //     document.getElementById('event3').children[1].innerHTML = "Massage Therapy";
    //     eventStatus = "C";
      onlyHW = true
      downButton();
    } else {
      hw_ref = 0
      ce_ref = 0
      document.getElementById("eventStatusText").innerHTML = "Currently Displaying All Events"
      onlyHW = false;
    //   // document.getElementById("toggleHW").value = "Yes?";
    //   eventStatus = "B";
      downButton();
    }
}

function toggleQuote() {
  if (quoteTF) {
    quoteTF = false;
    document.getElementById('quote').innerHTML = '';
  } else {
    quoteTF = true;
    document.getElementById('quote').innerHTML = ' "My heart is in the work" -- Andrew Carnegie ';
  }
}

function toggleEvents() {
  if (eventsTF) {
    eventsTF = false;
    document.getElementById('events').style.display = 'none';
  } else {
    eventsTF = true;
    document.getElementById('events').style.display = '';
  }
}


function toggleRecipe() {
  if (recipeTF) {
    recipeTF = false;
    document.getElementById('recipe').style.display = 'none';
  } else {
    recipeTF = true;
    document.getElementById('recipe').style.display = '';
  }
}


