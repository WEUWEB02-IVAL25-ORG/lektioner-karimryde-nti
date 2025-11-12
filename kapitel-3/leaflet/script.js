var map = L.map('map').setView([59.37, 18.0], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([59.37, 18.0]).addTo(map);
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();

var popup = L.popup()
    .setLatLng([59.37, 18.05])
    .setContent("I am a standalone popup.")
    .openOn(map);

var circle = L.circle([59.3708, 18.11], {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

var polygon = L.polygon([
    [59.3709, 18.08],
    [59.3703, 18.06],
    [59.371, 18.047]
]).addTo(map);