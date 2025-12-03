# Lektion Flaggor — Historik och utveckling

## Intro
Denna lektion tränar på att göra asynkrona anrop med `fetch` och kedja `.then()` för att hämta och visa flaggor från en server, samt dynamiskt uppdatera DOM.

## Tidslinje
- 2025-10-22: "Tränat på fetch async-anrop och .then() kedjor" — lade till `index.html`, `style.css`, `script.js` med Bootstrap‑grid och logik för att hämta en slumpad flagga.

## Hur mappens innehåll växte fram
- `index.html`: Struktur med container, responsivt grid och knappar kopplade till JavaScript.
- `style.css`: Bakgrundsbild, container‑layout och enkel styling av flaggbilder.
- `script.js`: Lyssnar på knapp, gör `fetch` mot API, tolkar JSON och infogar `<img>` i gridet med `insertAdjacentHTML`.
