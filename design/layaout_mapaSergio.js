mapboxgl.accessToken = 'pk.eyJ1IjoibWVub3MzIiwiYSI6ImNrenBwNHZmajAxMHoydW85OHZtOXNwbXUifQ.3WhXUKxf1ZETRM7U7stAWQ';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [1.72855,41.23108],
    zoom: 17
});

var marcador = document.createElement('div');
marcador.className = 'marker';

new mapboxgl.Marker(marcador
    .setLngLat(1.72855, 41.23108)
    .setPopup(
        new mapboxgl.Popup({offset: 25})
        .setHTML(
            '<h3>' + 
            'Institut Joaquim Mir' + 
            '</h3>'
        )
    )
).addTo(map);