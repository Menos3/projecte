

var div = document.getElementById('miembro1');
playmusic();
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