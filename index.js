

// Steps:
// Learn how to:
// 1. place markers for movements -- sender / recipient
// 2. differentiate sent markers from recipient markers

var map = L.map('mapid'),
    emily = {
        name: 'Emily Dickinson',
        gps: {
            lat:  42.376448,
            lng: -72.513842
        }
    },
    gilbert = {
        name: 'Susan Gilbert',
        gps: {
            lat:  42.476448,
            lng: -72.713842
        }
    },
    joey = {
        name: 'Joey Mcdonald',
        gps: {
            lat:  42.376448,
            lng: -72.713842
        }
    };

var movements = [
    {
        manuscript_id: '123asf',
        date: '1880-02-20',
        sender: emily,
        recipient: gilbert
    },
    {
        manuscript_id: 'asdf13',
        date: '1883-10-15',
        sender: emily,
        recipient: gilbert
    },
    {
        manuscript_id: 'F123f',
        date: '1884-04-20',
        sender: emily,
        recipient: gilbert
    },
    {
        manuscript_id: 'ads!@#!@',
        date: '1882-04-20',
        sender: emily,
        recipient: joey
    }
];


initMap();
drawMarker(emily.gps, {title: emily.name});

movements.forEach(function(movement) {
    console.log(movement);
    //drawMarker(emily.gps, {title: emily.name})
});

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

    map.setView([emily.gps.lat, emily.gps.lng], 21);
}

function drawMarker(gpsCoordinates, options) {
    L.marker(
        [gpsCoordinates.lat, gpsCoordinates.lng],
        options
    ).addTo(map);
}

