# Lektion Leaflet — Historik och utveckling

## Intro
Denna lektion använder Leaflet för att rendera kartor med OpenStreetMap‑tiles, lägga till markörer, popup, cirklar och polygoner.

## Tidslinje
- 2025-11-12: "Tränat på att använda andra js-bibliotek och läsa doc" — lade till `index.html`, `style.css`, `script.js` med grundläggande Leaflet‑exempel och overlays.

## Hur mappens innehåll växte fram
- `index.html`: Inkluderar Leaflet CSS/JS från CDN, en `div#map` som container och vår `script.js`.
- `style.css`: Sätter höjd/bredd för `#map` så Leaflet kan rendera korrekt.
- `script.js`: Skapar `L.map`, lägger till `tileLayer`, samt marker, popup, circle och polygon för att demonstrera olika overlay‑typer.
