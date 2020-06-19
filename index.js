
var map = L.map('mapid'),
    emily = {
        name: 'Emily Dickinson',
        gps: {
            lat:  42.376448,
            lng: -72.513842
        }
    };

initMap();
drawMarker(emily.gps, {title: emily.name});


fetch('https://birds.adagia.org/api/map-data').then(response => response.json())
    .then(data => {
        for (let index = 0; index < data.length; index++) {
            console.log(data[index]);
        }
    })

/////////////////////////////////////
//
// Map Functions 
// Documentation for all Leaflet functions:
//   -- https://leafletjs.com/reference-1.6.0.html#marker
//
/////////////////////////////////////////////////////////////

function initMap() {
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiaWNoYmluYWJlIiwiYSI6ImNrYmI1Ymo4YjAxNDIydnQ3OHZra2Ryd24ifQ.0iaMyfT8z65OY1F-qDd98w'
    }).addTo(map)

    map.setView([emily.gps.lat, emily.gps.lng], 13);
}

function drawMarker(gpsCoordinates, options) {
    L.marker(
        [gpsCoordinates.lat, gpsCoordinates.lng],
        options
    ).addTo(map);
}

