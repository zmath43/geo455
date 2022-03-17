var mymap = L.map("map", {
    center: [51.48882027639122, -0.1028811094342392],
    zoom: 10});

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiem1hdGg0MyIsImEiOiJja3o2MHU1bjMwNHBtMnVsNDBvNXVoOWlkIn0.8iNfv-_x21xx_RHUx_rRfQ', {
    maxZoom: 11,
    minZoom: 5,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


function getColor(value) {
    return value > 139 ? '#08519c':
           value > 87  ? '#3182bd':
           value > 53  ? '#74a9cf':
           value > 32  ? '#bdc9e1':
                         '#f1eef6';
}
    
function style(feature){
    return {
        fillColor: getColor(feature.properties.pop_den),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

function highlightFeature(e) {
    // Get access to the feature that was hovered through e.target
    var feature = e.target;

    // Set a thick grey border on the feature as mouseover effect
    // Adjust the values below to change the highlighting styles of features on mouseover
    // Check out https://leafletjs.com/reference-1.3.4.html#path for more options for changing style
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    // Bring the highlighted feature to front so that the border doesn’t clash with nearby states
    // But not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

var geojson; // define a variable to make the geojson layer accessible for the function to use   
            
function resetHighlight(e) {
    geojson.resetStyle(e.target);
}

function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature, // Do what defined by the highlightFeature function on mouseover
        mouseout: resetHighlight,    // Do what defined by the resetHighlight function on mouseout
    });
}

geojson = L.geoJson(data, {
    style:style,
    onEachFeature: onEachFeature
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:blue">' + layer.feature.properties.pop_den.toString() + ' people/hectare </p>';       
}).addTo(mymap);

var legend = L.control({position: 'bottomright'}); // Try the other three corners if you like.

    legend.onAdd = function (mymap) {

        var div = L.DomUtil.create('div', 'legend'),
            grades = [0, 32, 53, 87, 139]; // The break values to define the intervals of population, note we begin from 0 here

        div.innerHTML = '<b>Population Density <br></b>'; // The legend title (HTML-based), in this case it's Population Density 2011

        // Loop through our the classes and generate a label with a color box for each interval.
        // If you are creating a choropleth map, you DO NOT need to change lines below.
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor(grades[i] + 1) + '"></i>' +
            grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(mymap);


//Language density map

function getColor2(value) {
    return value > 31  ? '#006d2c':
           value > 17  ? '#31a354':
           value > 13  ? '#74c476':
           value > 11  ? '#bae4b3':
                         '#edf8e9';
}
    
function style2(feature){
    return {
        fillColor: getColor2(feature.properties.lang_den),   
        weight: 2,
        opacity: 1,
        color: 'gray',
        fillOpacity: 0.9
    };
}

function highlightFeature2(e) {
    // Get access to the feature that was hovered through e.target
    var feature = e.target;

    // Set a thick grey border on the feature as mouseover effect
    // Adjust the values below to change the highlighting styles of features on mouseover
    // Check out https://leafletjs.com/reference-1.3.4.html#path for more options for changing style
    feature.setStyle({
        weight: 5,
        color: '#666',
        fillOpacity: 0.7
    });

    // Bring the highlighted feature to front so that the border doesn’t clash with nearby states
    // But not for IE, Opera or Edge, since they have problems doing bringToFront on mouseover
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        feature.bringToFront();
    }
}

var geojson2; // define a variable to make the geojson layer accessible for the function to use   
            
function resetHighlight2(e2) {
    geojson2.resetStyle(e2.target);
}

function onEachFeature2(feature, layer) {
    layer.on({
        mouseover: highlightFeature2, // Do what defined by the highlightFeature function on mouseover
        mouseout: resetHighlight2,    // Do what defined by the resetHighlight function on mouseout
    });
}

geojson2 = L.geoJson(data, {
    style:style2,
    onEachFeature: onEachFeature2
}).bindPopup(function (layer){
    return layer.feature.properties.NAME 
           + '<p style="color:green">' + layer.feature.properties.lang_den.toString() + ' English speaking households/hectare </p>';       
}).addTo(mymap);

var legend = L.control({position: 'bottomright'}); // Try the other three corners if you like.

    legend.onAdd = function (mymap) {

        var div = L.DomUtil.create('div', 'legend'),
            grades2 = [0, 11, 13, 17, 31]; // The break values to define the intervals of population, note we begin from 0 here

        div.innerHTML = '<b>Language Density <br></b>'; // The legend title (HTML-based), in this case it's Population Density 2011

        // Loop through our the classes and generate a label with a color box for each interval.
        // If you are creating a choropleth map, you DO NOT need to change lines below.
        for (var i = 0; i < grades2.length; i++) {
            div.innerHTML +=
            '<i style="background:' + getColor2(grades2[i] + 1) + '"></i>' +
            grades2[i] + (grades2[i + 1] ? '&ndash;' + grades2[i + 1] + '<br>' : '+');
        }

        return div;
    };

    legend.addTo(mymap);

var mapLayers = {
    'Population': geojson,
    'Language': geojson2,
};

var layerControl = L.control.layers(mapLayers).addTo(mymap);

