document.getElementById("welcome").innerHTML = "Welcome to PlaidTab, "+sessionStorage.name+"!"

var modal = document.getElementById('myModal');
var btn = document.getElementById("editEventButton");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function toggleHW() {
    if (onlyHW) {
        document.getElementById("toggleHW").value = "No";
        document.getElementById('event1').children[0].src = "img/events/meditation.png"
        document.getElementById('event1').children[1].innerHTML = "Meditation"
        document.getElementById('event2').children[0].src = "img/events/paws_to_relax.png"
        document.getElementById('event2').children[1].innerHTML = "Paws to Relax"
        document.getElementById('event3').children[0].src = "img/events/massage.png"
        document.getElementById('event3').children[1].innerHTML = "Massage Therapy"
        eventStatus = "C";
    }
}
//Notes
// Some base code for modals from: http://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal