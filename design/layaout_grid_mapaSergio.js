var map = L.map('map').setView([41.2311566, 1.7285224886456212],24);

var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

let marker = L.marker([41.2311566, 1.7285224886456212]).addTo(map);

function onLocationFound(e) { 
    var radius = e.accuracy / 2;
    let markus = L.marker(e.latlng).addTo(map).bindPoppup("Esta Aqui!", radius).openPopup();
    console.log(markus);
    L.circle(e.latlng, radius).addTo(map);
    
}

function onLocationError(e) { alert(e.message); }
var x = document.getElementById("map");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  
  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  
  map.setView([latitud, longitud], 24);
  let marker = L.marker([latitud, longitud]).addTo(map);
  marker.bindPopup("Esta Aqui!").openPopup();

}

getLocation();

//ACCESSKEYS

//AL APRETAR CTRL+ALT+G, MOSTRAR ALERT CON LAS COORDENADAS DEL USUARIO
key('ctrl+alt+g', () => {

  if(navigator.geolocation) {

    var success = function(position) {

      var latitud = position.coords.latitude,
      longitud = position.coords.longitude;

      alert(latitud + "," + longitud);
    }

    navigator.geolocation.getCurrentPosition(success);
  }

});

//AL APRETAR CTRL+ALT+C, CENTRAR EL MAPA EN LAS COORDENADAS DEL INSTI
key('ctrl+alt+c', () => {

  map.setView([41.2311566, 1.7285224886456212],24); return true;

}); 