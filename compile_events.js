// var fb = ""
// var gcal = ""
var campus_events = []
var hw_events = []
var ce_ref = 0
var hw_ref = 0

// Random Function From http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}





var setupEvents = function() {
  //1. Randomize Orders
  //2. Set List Reference Indecies
  //3. Change HTML
  // console.log(campus_events)
  campus_events = shuffle(campus_events)
  // console.log(campus_events)
  hw_events = shuffle(hw_parsed.events)
  //indicies already set
  document.getElementById('event1').children[0].children[0].src = campus_events[ce_ref].picture;
  document.getElementById('event1').children[0].href = campus_events[ce_ref].link;
  document.getElementById('event1').children[0].children[1].innerHTML = campus_events[ce_ref].name;
  document.getElementById('event2').children[0].children[0].src = "img/health_wellness.png";//NEED TO CHANGE
  document.getElementById('event2').children[0].href = hw_events[hw_ref].link;
  document.getElementById('event2').children[0].children[1].innerHTML = hw_events[hw_ref].name;
  document.getElementById('event3').children[0].children[0].src = campus_events[ce_ref+1].picture;
  document.getElementById('event3').children[0].href = campus_events[ce_ref+1].link;
  document.getElementById('event3').children[0].children[1].innerHTML = campus_events[ce_ref+1].name;
}


//code for proxy server from https://github.com/tobilg/facebook-events-by-location
$.getJSON("https://plaidtab-fb.herokuapp.com/events?query=cmu&lat=40.442007&lng=-79.938378&distance=500&sort=venue", function(data1){
    fb=data1;
    for(i=0;i<fb.events.length;i++){
        ev = fb.events[i];
        obj1 = {"name": ev.name,
               "date": ev.startTime,
               // date = start
               "end" : ev.endTime,
               "link": "http://www.facebook.com/" + ev.id,
               "picture": ev.profilePicture,
               "source" : "Facebook"};
        campus_events.push(obj1);
    }
    $.getJSON('https://www.googleapis.com/calendar/v3/calendars/andrew.cmu.edu_333234353933332d373938@resource.calendar.google.com/events?timeMin=2016-12-15T10%3A00%3A00Z&key=AIzaSyD8whTj2d-Qune9-DfAUoCS8FNbgMvTghg',function(data2){
        gcal=data2;
        for(i=0;i<gcal.items.length;i++){
            ev = gcal.items[i];
            if (ev.status != "cancelled") {
                obj2 = {"name": ev.summary,
                       "date": ev.start.dateTime,
                       // date = start
                       "end" : ev.end.dateTime,
                       "link": ev.htmlLink,
                       "picture": "img/gcal.png",
                       "source" : "GCal"};
                campus_events.push(obj2);
            };
        }
    });
    setupEvents();
});



// $.getJSON('https://www.googleapis.com/calendar/v3/calendars/andrew.cmu.edu_333234353933332d373938@resource.calendar.google.com/events?timeMin=2016-12-15T10%3A00%3A00Z&key=AIzaSyD8whTj2d-Qune9-DfAUoCS8FNbgMvTghg',function(data){gcal=data;});


// for(i=0;i<fb.events.length;i++){
//     ev = fb.events[i];
//     obj = {"name": ev.name,
//            "date": ev.startTime,
//            // date = start
//            "end" : ev.endTime,
//            "link": "http://www.facebook.com/" + ev.id,
//            "picture": ev.profilePicture,
//            "source" : "Facebook"};
//     campus_events.push(obj);
// }

// for(i=0;i<gcal.items.length;i++){
//     ev = gcal.items[i];
//     if (ev.status != "cancelled") {
//         obj = {"name": ev.summary,
//                "date": ev.start.dateTime,
//                // date = start
//                "end" : ev.end.dateTime,
//                "link": ev.htmlLink,
//                "picture": "GCAL PICTURE FILLER",
//                "source" : "GCal"};
//         campus_events.push(obj);
//     };
// }