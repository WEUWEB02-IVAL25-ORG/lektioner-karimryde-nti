// Välja vad vi skall lyssna på
// Välja knappen-elementet
let knapp = document.querySelector('button');

// Välja HTML-elementet
let minHtml = document.documentElement;

// Välja kontainern
let kontainer = document.querySelector('.container');

// Välj rubriken
let rubrik = document.querySelector('h1');

// Lyssna på 'click' på knappen
knapp.addEventListener('click', function () {
    console.log("Du klickade på knappen!");

    // Om temat "light" så blir den "dark"
    if (minHtml.dataset.theme == "light") {
        minHtml.dataset.theme = "dark";
        kontainer.style.backgroundColor = "darkblue";
        rubrik.style.color = "red";
        rubrik.style.fontSize = "50px";
        rubrik.style.fontFamily = "sans-serif";
    } else {
        minHtml.dataset.theme = "light";
        kontainer.style.backgroundColor = "blue";
        rubrik.style.color = "red";
        rubrik.style.fontSize = "30px";
        rubrik.style.fontFamily = "serif";
    }
});
///////////////////////////////////////////////////

// Välj formulärknappen (input)
let fknapp = document.querySelector('input[type="submit"]');

// Välj textrutorna
let fnamn = document.querySelector('input');
let femail = document.querySelector('input[type="email"]');
let fmeddelande = document.querySelector('textarea');

// Lyssna på "click"-event (händelse)
fknapp.addEventListener("click", function (e) {
    // Hindra att sidand laddas om
    e.preventDefault();

    // Läs av det som står i textrutorna och lägg i en variabel
    let ftext = fnamn.value + "\n" + femail.value + "\n" + fmeddelande.value;

    // Skriv ut bekräftelse
    fmeddelande.value = "Tack för meddelande!\nDu skrev:\n" + ftext;
});