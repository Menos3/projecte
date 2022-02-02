
var modal = document.getElementById('mostrarModal');
// modal.style.display = 'none';
var div = document.getElementById('miembro1');



playmusic();
// mostrar();
// pasarVideo();


function playmusic() {
    let audio = new Audio('Bob Sinclar - Love Generation (Official Video).mp3');
    div.addEventListener('mouseover', event => {
        if (audio.paused) {
            audio.play();
        

        }
        else {
            audio.pause();

        }
    
   
    })
}

// function mostrar() { 
//     div.addEventListener('click', event => { 
//         modal.style.display = 'block';
//     })


// }


 
 
 
 
 