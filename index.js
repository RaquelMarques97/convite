

var mens = document.getElementById("mensagem");
var ciclos= document.getElementById("ciclos");
var apanhe = document.getElementById("apanhe");


document.getElementById('myVideo').addEventListener('ended',myHandler,false);
function myHandler(e) {
  mens.innerHTML = "";
  ciclos.innerHTML = "";
  apanhe.innerHTML = "Esta borboleta traz uma mensagem... Apanhe-a!";
  $("#myBtn").hide();
  media.removeAttribute('controls');
}



// Get the video
var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pausar viagem";
  } else {
    video.pause();
    btn.innerHTML = "Iniciar viagem";
  }
}


var 
    myText = document.getElementById("bounceTxt").innerHTML,
    wrapText = "";

for (var i=0; i<myText.length; i++) {
     wrapText += "<em>" + myText.charAt(i) + "</em>";
}

document.getElementById("bounceTxt").innerHTML = wrapText;

var 
    myLetters = document.getElementsByTagName("em"),
    j = 0;

function applyBounce() {
     setTimeout(function() {
          myLetters[j].className = "bounce-me";
          j++;
          
          if (j < myLetters.length) {
               applyBounce();
          }
     }, 250);
}

applyBounce();