


$(function envelope(){

  if (!$('.envelope').hasClass('open')){
    $('.envelope').click(function(){
      $(this).removeClass('new').addClass('open');
      pauseAudio();     
    });
  } 
});


var music = document.getElementById("myAudio"); 
var birds = document.getElementById("birds"); 

function playAudio() {   
  music.play();   
} 

function playbirds() {   
  birds.play();   
} 


function pauseAudio() { 
  birds.pause();  
} 

document.getElementById('myVideo').addEventListener('ended',myHandler,false);
function myHandler(e) {
  window.location.href = "convite.html";
}

