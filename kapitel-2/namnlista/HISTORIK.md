# Lektion Namnlista — Historik och utveckling

## Intro
Denna lektion tränar på att läsa från ett input‑fält, skapa och infoga DOM‑element (`<li>`) dynamiskt, samt ge användarfeedback via text i sidan.

## Tidslinje
- 2025-10-01 08:56: "Börjat på dynamisk namnlista" — lade till `index.html`, `style.css` och skapade tom `script.js`.
- 2025-10-01 09:43: "Tränat på infoga element" — fyllde på `script.js` med logik: läsa inmatning, skapa `<li>`, lägga till i listan och visa bekräftelse.

## Hur mappens innehåll växte fram
- `index.html`: Enkel layout med rubrik, en rad med label/input/knapp, en meddelanderuta och en `<ul>` som mål för nya namn.
- `style.css`: Grid‑layout för formulärraden, grundtypografi och resets för listan.
- `script.js`: Lyssnar på knappens `click`, läser värdet från input, skapar ett nytt `<li>` med `document.createElement`, appenderar till `<ul>` och skriver ut bekräftelse i `.meddelande`. Rensar input efter infogning.
