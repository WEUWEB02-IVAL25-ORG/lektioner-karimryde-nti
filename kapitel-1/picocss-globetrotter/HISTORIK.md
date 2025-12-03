# Lektion PicoCSS Globetrotter — Historik och utveckling

## Intro
Denna lektion visar hur man arbetar med ett CSS‑ramverk (PicoCSS), växlar tema via `data-theme` på `<html>`, och använder `<dialog>` för modal feedback från ett formulär.

## Tidslinje
- 2025-09-23: "Tränat qs, innerHTML" — ändringar i `index.html` och `script.js` (bl.a. knappen för tema och grundläggande DOM‑val).

## Hur mappens innehåll växte fram
- `index.html`: Struktur med header/nav, artikelkort, formulär och `<dialog>`. PicoCSS via CDN.
- `style.css`: Enkel container‑styling.
- `script.js`: Lyssnar på knapp för tema‑växling, manipulerar `dataset.theme` och vissa inline‑stilar; lyssnar på formulär‑submit, visar modal och stänger den med `OK`.
