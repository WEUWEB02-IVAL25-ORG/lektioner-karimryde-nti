const graf = document.querySelector('#graf');

// Hämta temperaturprognosen från SMHI open api
// För Stockholm, dvs longitud=18.06, latitud=59.33
const url = "https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/18.06/lat/59.33/data.json";

fetch(url)                  // Hämta
.then(svar => svar.json())  // Packa upp json
.then(data => {             // Bearbeta datat
    // Ta de första 48 timmarna
    const timeSeries = data.timeSeries.slice(0, 48);
    // Två tomma arrayer
    const labels = [];
    const temps = [];

    // Loopa igenom timeSeries
    timeSeries.forEach(item => {
        // Hitta raden med temperatur "t"
        const radT = item.parameters.find(p => p.name == "t");
        const temp = radT?.values?.[0];
        const datum = item.validTime.slice(0, 10);

        console.log(datum, temp);
        
    });

})

// Rita ut
// new Chart(graf, {
//     type: 'line',
//     data: {
//         labels,
//         datasets: [{
//             label: 'Dagens högsta temperatur',
//             temps,
//             borderColor: 'red',
//             backgroundColor: 'rgba(173,216,230,0.3)',
//             fill: true,
//             tension: 0.3
//         }]
//     },
//     options: { scales: { y: { beginAtZero: true } } }
// });