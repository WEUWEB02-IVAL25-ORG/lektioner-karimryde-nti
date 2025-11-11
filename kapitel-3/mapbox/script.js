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