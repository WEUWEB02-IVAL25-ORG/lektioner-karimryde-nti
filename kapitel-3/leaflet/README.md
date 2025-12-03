# Lektion Leaflet

## Intro
I den här lektionen lär du dig att använda Leaflet för att visa en gratis karta (OpenStreetMap). Målet är att du ska kunna visa en karta, lägga en markör, en cirkel och en enkel form (polygon) samt öppna en pratbubbla. Vi bygger en liten karta som visar några saker i närheten.

## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Karta med Leaflet</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <link rel="stylesheet" href="style.css">
    <script defer src="./script.js"></script>
</head>
<body>
    <div id="map"></div>
</body>
</html>
```

## CSS
```css
#map {
    width: 100%;
    height: 400px; 
}
```

## Javascript
```javascript
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
```
