# Lektion Varukorg — Historik och utveckling

## Intro
Denna lektion tränar DOM‑manipulation: välja element med `querySelector` och `querySelectorAll`, läsa/skriva värden i `input`/`p`, uppdatera summor och beräkna totalsumma.

## Tidslinje
- 2025-09-23: "Tränat qs, innerHTML" — skapade `index.html`, `style.css` och tom `script.js` (grundlayout för varukorg).
- 2025-09-24: "Tränat på välja element med qs, på att ändra innehållet i input eller p" — fyllde på `script.js` med händelsehantering för plus/minus och uppdateringar.
- 2025-09-30: "Tränat på välja flera element på en gång med querySelectorAll()" — förbättringar i `index.html`/`style.css`, lade till summeringslogik och totalberäkning.

## Hur mappens innehåll växte fram
- `index.html`: Grid‑struktur för varor, pris, antal och summa; knappar för att ändra antal; en totalruta.
- `style.css`: Layout och grundutseende (grid, typografi, knappar, bilder, totalruta).
- `script.js`: Hämtar första radens element, initierar värden, plus/minus‑lyssnare, samt total‑summering över alla `.pris` via `querySelectorAll`.
