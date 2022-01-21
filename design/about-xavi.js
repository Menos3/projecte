// audiojs.events.ready(function() {
//     var as = audiojs.createAll();
//   });
audioObj = new Audio("multimedia\porta_rap_de_bola_de_dragon.mp3");
var contenedorFoto=document.getElementById("contenedorFoto");
var myAudio=document.getElementById("myAudio");
var imagen1=document.getElementById("img1");
var imagen2=document.getElementById("img2");
var imagen=document.getElementsByTagName("img");

// imagen2.addEventListener("mouseover", event => {
//     /* the audio is now playable; play it if permissions allow */
//     myAudio.play();
//   });

imagen.addEventListener("mouseover", event => {
    /* the audio is now playable; play it if permissions allow */
    myAudio.play();
  });

//   imagen.addEventListener("mouseout", event => {
//     /* the audio is now playable; play it if permissions allow */
//     myAudio.stop();
//   });