let audio = document.getElementById("soundClip");
let divImagen = document.getElementById("divImagen");
let ventanaVideos = document.getElementById("ventanaVideos");

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


