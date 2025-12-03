# Lektion Varukorg

## Intro
I den här lektionen tränar du på att läsa och ändra innehåll i sidan med JavaScript. Målet är att kunna räkna upp och ner på antal, räkna ut summa och visa en totalsumma. Vi bygger en liten varukorg där du kan klicka på + och − och se vad det blir.

## HTML
```html
<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Varukorg</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./style.css">
</head>
<body>
    <div class="kontainer">
        <h1>Varukorg</h1>
        <div class="kol-4">
            <h3>Produkt</h3>
            <h3>Pris</h3>
            <h3>Antal</h3>
            <h3>Summa</h3>

            <p class="vara"><img src="https://www.electrokit.com/resource/u1sX/ZiO/SY9WQaqNrLI/product/41019/41019114/PICO-WH-HERO.webp" alt="Raspberry Pi Pico">Raspberry Pi Pico WH</p>
            <p class="pris">99</p>
            <p class="kol-3">
                <button class="minus"><i class="bi bi-dash-circle"></i></button>
                <input class="antal" type="text" readonly>
                <button class="plus"><i class="bi bi-plus-circle"></i></button>
            </p>
            <p class="summa"></p>

            <p class="vara"><img src="https://www.electrokit.com/resource/u4P6/NeF/jFAYcQ4K4hv/product/41020/41020800/PI_5_HERO.jpg" alt="Raspberry Pi Pico">Raspberry Pi 5 4GB</p>
            <p class="pris">745</p>
            <p class="kol-3">
                <button class="minus"><i class="bi bi-dash-circle"></i></button>
                <input class="antal" type="text" readonly>
                <button class="plus"><i class="bi bi-plus-circle"></i></button>
            </p>
            <p class="summa"></p>
            <p class="vara"><img src="https://www.electrokit.com/resource/u4Jr/jcg/USKmHABADrD/product/41018/41018730/41018730-3.jpg" alt="Raspberry Pi Pico">Raspberry Pi Zero2 W</p>
            <p class="pris">215</p>
            <p class="kol-3">
                <button class="minus"><i class="bi bi-dash-circle"></i></button>
                <input class="antal" type="text" readonly>
                <button class="plus"><i class="bi bi-plus-circle"></i></button>
            </p>
            <p class="summa"></p>
            <p class="vara"><img src="https://www.electrokit.com/resource/u1Sb/XEQ/Q9dNm9H79NM/product/41018/41018300/41018300.jpg" alt="Raspberry Pi Pico">1.44" LCD för Raspberry Pi</p>
            <p class="pris">299</p>
            <p class="kol-3">
                <button class="minus"><i class="bi bi-dash-circle"></i></button>
                <input class="antal" type="text" readonly>
                <button class="plus"><i class="bi bi-plus-circle"></i></button>
            </p>
            <p class="summa"></p>

            <p>Total</p>
            <p class="total">0</p>
        </div>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```

## CSS
```css
body {
    background: #f0f0f0;
    font-family: Arial, sans-serif;
}
.kontainer {
    width: 700px;
    margin: 2em auto;
    padding: 2em;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.kol-4 {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 10px;
}
label {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 10px 0;
    padding: 0;
}
input, textarea {
    padding: 0.5em;
    border-radius: 0.3em;
    border: 1px solid #ccc;
    font-weight: bold;
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
}
textarea {
    height: 10em;
    width: 100%;
}
button {
    padding: 0.7em;
    border-radius: 0.3em;
    border: none;
    font-weight: bold;
    background: #007bff;
    color: white;
    cursor: pointer;
}
input {
    width: 3em;
}
img {
    width: 3em;
}
.total {
    background-color: #DDD;
    padding: 5px;
}
```

## Javascript
```javascript
// Väljer ut elementen på första raden!
var plusKnapp = document.querySelector('.plus');
var minusKnapp = document.querySelector('.minus');
var rutaAntal = document.querySelector('.antal');
var rutaSumma = document.querySelector('.summa');
var rutaPris = document.querySelector('.pris');
var rutaTotal = document.querySelector('.total');

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

// Räkna ut totalen
// Välj ALLA .pris
var rutaPrisAlla = document.querySelectorAll('.pris');

// För varje prisruta jag hittade 
var totalen = 0
rutaPrisAlla.forEach(function (prisruta) {
    // Lägg till hittade priset i totalen
    totalen += Number(prisruta.textContent);

    // Skriv ut i loggen
    console.log(prisruta.textContent, totalen);
})

// Skriv totalen i rutan för total i webbsidan
rutaTotal.textContent = totalen;
```
