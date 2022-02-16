var map = L.map('map').setView([41.2311566, 1.7285224886456212], 10);
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

// function onLocationError(e) { alert(e.message); }
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
    
    var mapi = L.map('map').setView([latitud, longitud], 10);
    var radius = e.accuracy / 2;
    L.marker(e.latlng).addTo(mapi).bindPoppup("Esta Aqui!", radius).openPopup();
    

}