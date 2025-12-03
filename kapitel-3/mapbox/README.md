# Lektion Mapbox

## Intro
I den här lektionen lär du dig att visa en interaktiv karta på webben. Målet är att du ska förstå hur man laddar in en karta, bestämmer var den startar och sätter ut markörer med små pratbubblor. Vi bygger en enkel karta över Stockholm med minst en markör och en popup.

## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapbox karta</title>
    <script src="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.js"></script>
    <link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/v2.15.0/mapbox-gl.css">
    <link rel="stylesheet" href="style.css">
    <script defer src="./script.js"></script>
</head>
<body>
    <div class="kontainer">
        <h1>Min karta över Stockholm</h1>
        <div id="karta"></div>
    </div>
</body>
</html>
```

## CSS
```css
body {
    margin: 0;
    padding: 0;
}
.kontainer {
    width: 900px;
    margin: 0 ;
}
#karta {
    width: 100%;
    height: 600px;
}
```

## Javascript
```javascript
mapboxgl.accessToken = "pk.eyJ1Ijoia2FyeWUiLCJhIjoiY2pwOXRtbWc1MGdmNjNwc2JmdGxzeDR5byJ9.whp8f2Ttws57ctAf_stuag";

// Ritar ut kartan
let karta = new mapboxgl.Map({
    container: 'karta',
    zoom: 10,
    center: [18.07, 59.33],
    //style: 'mapbox://styles/mapbox/streets-v11'
    style: 'mapbox://styles/mapbox/outdoors-v12'
});

// Rita ut markörer 
// Där jag bor
let markör1 = new mapboxgl.Marker()
                .setLngLat([18.0, 59.37])
                .addTo(karta)
// Där jag går i skolan
const ruta = new mapboxgl.Popup({offset:24})
                .setText("Här går jag i skolan")
let markör2 = new mapboxgl.Marker()
                .setLngLat([18.0, 59.37])
                .setPopup(ruta)
                .addTo(karta)
```
