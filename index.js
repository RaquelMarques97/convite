
var mens = document.getElementById("mensagem");
var apanhe = document.getElementById("apanhe");

document.getElementById('myVideo').addEventListener('ended',myHandler,false);
function myHandler(e) {
  mens.innerHTML = "Esta borboleta traz uma mensagem...Apanhe-a!";
  apanhe.innerHTML = "";
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
    btn.innerHTML = "Pausa";
  } else {
    video.pause();
    btn.innerHTML = "Play";
  }
}
