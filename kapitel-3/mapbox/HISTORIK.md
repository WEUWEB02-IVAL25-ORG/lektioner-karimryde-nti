# Lektion Mapbox — Historik och utveckling

## Intro
Denna lektion introducerar Mapbox GL JS för att visa en interaktiv karta över Stockholm, lägga till markörer och popup‑fönster samt styra zoom och center.

## Tidslinje
- 2025-11-11: "Tränat på mapbox" — lade till `index.html`, `style.css`, `script.js` med grundläggande karta, markör och popup.

## Hur mappens innehåll växte fram
- `index.html`: Grundstruktur för sidan, laddar Mapbox GL JS och vår `script.js`, samt en `div#karta` som kartans container.
- `style.css`: Sätter höjd/bredd för kart‑containern och enkel layout för sidan.
- `script.js`: Initierar kartan med `mapboxgl.Map`, centrerar på Stockholm, lägger till markörer och popup. Access‑token konfigureras överst.
