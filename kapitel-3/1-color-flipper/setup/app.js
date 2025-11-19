const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.querySelector('#btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function() {
    // Slumptal 0-3
    const randomNumber = Math.round(Math.random()*3);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

/*

Extra uppgifter (med tips):

1. Fler färger i listan
Lägg in 10–15 färger (namn, rgb/rgba, #hex).
Tips: Fyll på colors-arrayen.

2. Visa textfärgen också
Låt <span class="color"> få samma färg som bakgrunden.
Tips: color.style.color = …

3. Undvik “magiska tal”
Gör en funktion som hämtar slumpindex baserat på arrayens längd.
Tips: Math.floor(Math.random()*arr.length).

4. Knapptext på svenska
Byt “Click me!” → “Byt färg”.
Tips: Ändra i HTML eller via JS (btn.textContent = …).

5. Starta med en slumpfärg
Kör samma byte när sidan laddas.
Tips: DOMContentLoaded och återanvänd din färgbytarfunktion.

*/