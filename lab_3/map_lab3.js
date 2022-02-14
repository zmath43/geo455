
var myMap = L.map("map", {zoomControl: false, tap: false}).setView([46.93293690158154, 6.899578875429815], 8);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiem1hdGg0MyIsImEiOiJja3o2MHU1bjMwNHBtMnVsNDBvNXVoOWlkIn0.8iNfv-_x21xx_RHUx_rRfQ', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1
}).addTo(myMap);

L.control.zoom({position:"bottomright"}).addTo(myMap);

var myIcon = L.icon({
    iconUrl: "Pictures/SwissShield.PNG",
    iconSize: [30, 35],
    iconAnchor: [15, 35],
    popupAnchor: [0, -20],
});

var zurich = L.marker([47.368280614573415, 8.540927636933983], {icon: myIcon, title: "Zurich"}).bindPopup("<b>Zurich</b><br>The largest city in Switzerland, Zurich is a global economic hub and the home of many financial organizations.<br><br><img src='Pictures/Zurich.jpg' width=450/>", {maxWidth: "auto"}).addTo(myMap);
var lausanne = L.marker([46.51960771883681, 6.631460367112078], {icon: myIcon, title: "Lausanne"}).bindPopup("<b>Lausanne</b><br>The second largest city on Lake Geneva and the home of the International Olympic Committee and the Olympic Museum.<br><br><img src='Pictures/Lausanne.jpg' width=400/>", {maxWidth: "auto"}).addTo(myMap);
var geneva = L.marker([46.20255397445328, 6.142696244640073], {icon: myIcon, title: "Geneva"}).bindPopup("<b>Geneva</b><br>The second largest city in Switzerland, Geneva headquarters the European branch of the UN and contains the unique Jet d'Eau.<br><br><img src='Pictures/Geneva.jpg' width=400/>", {maxWidth: "auto"}).addTo(myMap);
var montreux = L.marker([46.431196917583115, 6.91157409330315], {icon: myIcon, title: "Montreux"}).bindPopup("<b>Montreux</b><br>A beautiful city on Lake Geneva, Montreux hosts an amazing Christmas festival and jazz festival and inspired the song 'Smoke on the Water.'<br><br><img src='Pictures/Montreux.jpg' width=400/>", {maxWidth: "auto"}).addTo(myMap);
var chillon = L.marker([46.414156854109116, 6.927567761087631], {icon: myIcon, title: "Château de Chillon"}).bindPopup("<b>Château de Chillon</b><br>A centuries old castle that is one of the most famous landmarks in Switzerland.<br><br><img src='Pictures/ChateauDeChillon.jpg' height=350/>", {maxWidth: "auto"}).addTo(myMap);
var vevey = L.marker([46.46061516322543, 6.843485469814696], {icon: myIcon, title: "Vevey"}).bindPopup("<b>Vevey</b><br>A lakeside city tat is home to the bizarre Alimentarium and former home of even more bizarre Charlie Chaplin.<br><br><img src='Pictures/Vevey.jpg' width=400/>", {maxWidth: "auto"}).addTo(myMap);
var bern = L.marker([46.94840349110696, 7.447026515033418], {icon: myIcon, title: "Bern"}).bindPopup("<b>Bern</b><br>The capital of Switzerland and a bilingual city that speaks both French and German.<br><br><img src='Pictures/Bern.jpg' height=350/>", {maxWidth: "auto"}).addTo(myMap);
var lucerne = L.marker([47.0510099150541, 8.306466304501656], {icon: myIcon, title: "Lucerne"}).bindPopup("<b>Lucerne</b><br>A city on a picturesque lake that boasts the Kapellbrücke, a famous Swiss landmark.<br><br><img src='Pictures/Lucerne.jpg' width=450/>", {maxWidth: "auto"}).addTo(myMap);
var interlaken = L.marker([46.686447412914895, 7.8619302735573], {icon: myIcon, title: "Interlaken"}).bindPopup("<b>Interlaken</b><br>Situated between two turquoise alpine lakes, Interlaken literally means between lakes.<br><br><img src='Pictures/Interlaken.jpg' height=375/>", {maxWidth: "auto"}).addTo(myMap);
var jungfrau = L.marker([46.53648845500309, 7.962849515817575], {icon: myIcon, title: "Jungfrau"}).bindPopup("<b>Jungfrau</b><br>A prominent Swiss peak that can be reached via the highest train station in Europe.<br><br><img src='Pictures/Jungfrau.jpg' width=400/>", {maxWidth: "auto"}).addTo(myMap);
var zermatt = L.marker([46.021337903991736, 7.747855346400752], {icon: myIcon, title: "Zermatt"}).bindPopup("<b>Zermatt</b><br>A famous resort town that sits under the shadow of one of the world's most famous mountains: the Matterhorn.<br><br><img src='Pictures/Zermatt.jpg' width=400/>", {maxWidth: "auto"}).addTo(myMap);
var basel = L.marker([47.557660977714626, 7.589294884886962], {icon: myIcon, title: "Basel"}).bindPopup("<b>Basel</b><br>Switzerland's third largest city, Basel is the site of the University of Basel, one of the world's oldest universities.<br><br><img src='Pictures/Basel.jpg' height=350/>", {maxWidth: "auto"}).addTo(myMap);
