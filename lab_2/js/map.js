
var myMap = L.map("map").setView([46.46550048164954, 6.895556919723983], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiem1hdGg0MyIsImEiOiJja3o2MHU1bjMwNHBtMnVsNDBvNXVoOWlkIn0.8iNfv-_x21xx_RHUx_rRfQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/outdoors-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(myMap);

L.marker([46.46550048164954, 6.895556919723983])
    .addTo(myMap)
    .bindPopup("<b>Bonjour!</b><br>Welcome to Blonay, a small town in Vaud, Switzerland.")
    .openPopup();
