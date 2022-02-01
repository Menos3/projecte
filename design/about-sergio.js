let audio = document.getElementById("soundClip");
let divImagen = document.getElementById("divImagen");
let ventanaVideos = document.getElementById("ventanaVideos");
let btCerrar = document.getElementById("btCerrar");
var videos = document.getElementsByTagName("video");
var prevBtn = document.getElementsByClassName("carousel-control-prev")[0];
var nextBtn = document.getElementsByClassName("carousel-control-next")[0];

var cur = 0;
var max = videos.length;

//EL AUDIO SE ACTIVA AL PASAR POR ENCIMA DEL DIV
divImagen.addEventListener("mouseover", () => {
    audio.play();
})

//EL AUDIO SE PAUSA AL APARTAR EL RATON DEL DIV
divImagen.addEventListener("mouseout", () => {
    audio.pause();
})

//AL HACER CLICK, SE ABRE UNA VENTANA DONDE SE MUESTRAN VIDEOS
divImagen.addEventListener("click", () => {
    
    ventanaVideos.style.display = "block";
});

//CERRAR VENTANA MODAL
btCerrar.addEventListener("click", () => {
    ventanaVideos.style.display = "none";
});

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
