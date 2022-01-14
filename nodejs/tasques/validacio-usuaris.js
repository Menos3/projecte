var user1='marcCarbo';
var contra1='sopas';
localStorage.setItem(user1,contra1);

var user2='davidReZero';
var contra2='subaru';
localStorage.setItem(user2,contra2);

var user3='cristinini';
var contra3='sisisisimba';
localStorage.setItem(user3,contra3);

var user4='sergio';
var contra4='evee';
localStorage.setItem(user4,contra4);

var user5='xaviElGenio';
var contra5='futbolin';
localStorage.setItem(user5,contra5);

document.addEventListener("submit", function(event){
    event.preventDefault();
    for(let i=0; i<localStorage.length;i++){
        var usuari=document.getElementById('nomUsuari').value;
        console.log(localStorage.key(i));
        if (localStorage.key(i)==usuari){
            alert('Usuario ya existente');
            alert('Habilitando boards')
            // windows.location.href("boards.html");
            // location.replace("boards.html");
            document.getElementById('contenedorTotal').style.display="block";
            document.getElementById('login').style.display="none";
            document.getElementById('validacion').style.display="none";
            break;
        } else if(i==localStorage.length-1){
            alert("Usuario no encontrado");
        }
            
        
    }
    
    // document.write('Usuario no existente procedemos a crearlo');
    
  });

  var usuari=document.getElementById('nomUsuari').value;
  console.log(usuari);