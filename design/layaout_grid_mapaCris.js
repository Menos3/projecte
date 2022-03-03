// const { bind } = require("mousetrap");

var map = L.map('map').setView([41.2311566, 1.7285224886456212],24);
// map.panto({ lat: 41.25862, long: 1.77086 });
var tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(map);

let marker = L.marker([41.2311566, 1.7285224886456212]).addTo(map);

// var mapita=L.map.locate({ setView: true, maxZoom: 10 });

// function onLocationFound(e) { 
//     var radius = e.accuracy / 2;
//     let markus = L.marker(e.latlng).addTo(map).bindPoppup("Esta Aqui!", radius).openPopup();
//     console.log(markus);
//     L.circle(e.latlng, radius).addTo(map);
    
// }

function onLocationError(e) { alert(e.message); }
var x = document.getElementById("map");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }

}
// var latitud = 41.30;
// var longitud =1.7285224886456212;

function showPosition(position) {
  
  var latitud = position.coords.latitude;
  var longitud = position.coords.longitude;
  
  map.setView([latitud, longitud], 24);
  let marker = L.marker([latitud, longitud]).addTo(map);
  marker.bindPopup("Esta Aqui!").openPopup();
  

  
  Mousetrap.bind('ctrl+alt+g',activacionBomba );
}

Mousetrap.bind('ctrl+alt+c', descativarBomba );
Mousetrap.bind('ctrl+alt+u', function (e) {
    
  Mousetrap.unbind('ctrl+alt+c');
  Mousetrap.unbind('ctrl+alt+g');

});

Mousetrap.bind('ctrl+alt+a', function (e) {
  Mousetrap.bind('ctrl+alt+g',activacionBomba)
  Mousetrap.bind('ctrl+alt+c', descativarBomba)
})

function activacionBomba() {
    
    
  alert("alert tu latitud y tu longitud es "+'latitud'+ latitud +'longitud' +longitud);

}
function descativarBomba(){
    
  var latitud = 41.2311566;
  var longitud = 1.7285224886456212;
  alert("tu latitud y tu longitud es "+'latitud'+ latitud +'longitud' +longitud);

  
}
// L.Routing.control({
//   waypoints: [
//       L.latLng(41.2311566, 1.7285224886456212),
//       L.latLng(latitud, longitud),
//   ],
//   routeWhileDragging: true
// }).addTo(map);
  // var latitud = position.coords.latitude;
  // var longitud = position.coords.longitude;
  


getLocation();