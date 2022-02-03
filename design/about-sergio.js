//COMPONENTES
let audio = document.getElementById("soundClip");
let divImagen = document.getElementById("divImagen");
let ventanaVideos = document.getElementById("ventanaVideos");
let btCerrar = document.getElementById("btCerrar");
var iFrames = document.getElementsByTagName("iframe");
var prevBtn = document.getElementsByClassName("carousel-control-prev")[0];
var nextBtn = document.getElementsByClassName("carousel-control-next")[0];
var btClose = document.getElementsByClassName("btn-close")[0];

//VARIABLES
var cur = 0;
var max = iFrames.length;

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

//CERRAR VENTANA MODAL CON LA X
btCerrar.addEventListener("click", () => {
    ventanaVideos.style.display = "none";
});

//CERRAR VENTANA MODAL CON EL BOTON CLOSE
btClose.addEventListener("click", () => {
    ventanaVideos.style.display = "none";
});

console.log("Loaded videos: " + max);
 
var playVideos = function() {

    // PAUSAR TODOS LOS VIDEOS
    for (v = 0; v < max; v++) {

        iFrames[v].pause();
    }
    
    // REPRODUCIR VIDEO ACTUAL
    console.log("Play video " + cur);
    iFrames[cur].play();
}
 
prevBtn.addEventListener("click", function() {

    cur = (cur - 1 >= 0) ? cur - 1 : max;
    playVideos();

});
 
nextBtn.addEventListener("click", function() {

   cur = (cur + 1 < max) ? cur + 1 : 0;
   playVideos();

});
