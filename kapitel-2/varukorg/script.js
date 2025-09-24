// Väljer ut elementen!
var plusKnapp = document.querySelector('.plus');
var minusKnapp = document.querySelector('.minus');
var rutaAntal = document.querySelector('.antal');
var rutaSumma = document.querySelector('.summa');
var rutaPris = document.querySelector('.pris');

// Skriv 0 i rutaAntal och rutaSumma
rutaAntal.value = 0;
rutaSumma.textContent = 0;

// Lyssna på klick på knappen plus
plusKnapp.addEventListener('click', function () {
    rutaAntal.value = Number(rutaAntal.value) + 1;
    rutaSumma.textContent = rutaAntal.value * rutaPris.textContent;
})
// Lyssna på knappen minus
minusKnapp.addEventListener('click', function () {
    // Räkna ned om större än 0
    if (rutaAntal.value > 0) {
        rutaAntal.value -= 1;
        rutaSumma.textContent = rutaAntal.value * rutaPris.textContent;
    }
})