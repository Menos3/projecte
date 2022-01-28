// audiojs.events.ready(function() {
//     var as = audiojs.createAll();
//   });
audioObj = new Audio("multimedia\porta_rap_de_bola_de_dragon.mp3");
var contenedorFoto=document.getElementById("contenedorFoto");
var myAudio=document.getElementById("myAudio");
var imagen1=document.getElementById("img1");
var imagen2=document.getElementById("img2");
// var imagen=document.getElementsByTagName("img");
var imagen=document.getElementById("contenedorFoto");

// imagen2.addEventListener("mouseover", event => {
//     /* the audio is now playable; play it if permissions allow */
//     myAudio.play();
//   });

imagen.addEventListener("mouseover", event => {
    /* the audio is now playable; play it if permissions allow */
    myAudio.play();
  });


  imagen.addEventListener("mouseout", event => {
    /* the audio is now playable; play it if permissions allow */
    myAudio.pause();
  });


 var videos = document.getElementsByTagName("video");
 var prevBtn = document.getElementsByClassName("carousel-control-prev")[0];
 var nextBtn = document.getElementsByClassName("carousel-control-next")[0];
 
 var cur = 0;
 var max = videos.length;
 console.log("Loaded videos: " + max);
 
 var playVideos = function(){
   // Pause all videos
   for (v=0; v<max; v++) {
     videos[v].pause();
   }
   // Play current video
   console.log("Play video " + cur);
   videos[cur].play();
 }
 
 prevBtn.addEventListener("click", function(){
   cur = (cur-1 >= 0) ? cur-1 : max;
   playVideos();
 });
 
 nextBtn.addEventListener("click", function(){
   cur = (cur+1 < max) ? cur+1 : 0;
   playVideos();
 });
