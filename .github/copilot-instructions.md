# Projektinstruktioner: WEUWEB01 – Webbutveckling 1

Lektionsarkiv för gymnasiekursen **Webbutveckling 1** (TE23A). Mappen innehåller material som läraren gått igenom, kodat på tavlan och förklarat för eleverna – eleverna har sedan skrivit och testat koden. Varje undermapp representerar en lektion och fungerar som ett arkiv över vad som faktiskt gjorts i kursen. Lektionerna är organiserade i kapitel och täcker progressivt HTML, CSS och grundläggande JavaScript. AI används som pedagogiskt hjälpmedel.

## Språk och ton

- Allt instruktionsmaterial, README-filer och kommentarer skrivs på **svenska**.
- Rubriker följer **meningsversal** – bara det första ordet börjar med stor bokstav (undantag: egennamn).
- Exempel: `## Nya begrepp` (inte `## Nya Begrepp`).

## Pedagogisk strategi

Se [GEMINI.md](../GEMINI.md) för fullständiga AI-riktlinjer. Sammanfattning:

- **Extrem repetition:** Varje nytt koncept övas 3–5 gånger och repeteras i kommande lektioner.
- **Visuell feedback:** Praktiska, roliga exempel som ändrar färger, bilder och texter.
- **Hård begränsning (kapitel 8):** Tillåtna JavaScript-koncept är *enbart* `let`, `if`/`else`, `querySelector`, `.textContent`, `.value`, `.classList`, `Number()`, `prompt()`, `alert()`, namngivna funktioner via `onclick`. Inga loopar, arrayer, objekt eller `addEventListener`.

## Kursinnehåll per kapitel

| Kapitel | Ämne |
|---------|------|
| kapitel-1 | HTML-grunder, rubriker, stycken, länkar, grundläggande CSS |
| kapitel-2 | Bilder, `<figure>`/`<figcaption>`, layoutövningar |
| kapitel-3 | `<div>`-boxar, CSS-klasser, flersidig navigering |
| kapitel-4 | Flersidig webbplats, gemensam navbar, `.aktiv`-klass |
| kapitel-6 | CSS Grid, kortmönster (`.rutnat`), komplexa layouter |
| kapitel-7 | Holy Grail-layout, responsiv design, `fr`-enheter |
| kapitel-8 | JavaScript-introduktion, DOM-manipulation, händelser |

## HTML-konventioner

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sidtitel</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- innehåll -->
    <script src="script.js"></script>  <!-- alltid sist i body -->
</body>
</html>
```

- `<script>` placeras alltid **sist i `<body>`**, aldrig i `<head>`.
- `lang="en"` är standard; använd `lang="sv"` när sidan explicit är på svenska.
- Aktiv nav-länk markeras med `class="aktiv"` (inte CSS-pseudoklassen `:active`).

## CSS-konventioner

- Ingen extern reset/normalisering i kapitel 1–4. Från kapitel 6 används en enkel reset:
  ```css
  html { box-sizing: border-box; }
  *, *:before, *:after { box-sizing: inherit; }
  body, h1, h2, h3, h4, h5, h6, p, ul { margin: 0; padding: 0; }
  img { width: 100%; }
  ```
- Centrering via `.kontainer { width: Xpx; margin: auto; }`.
- CSS Grid-namngivna areas skrivs på **svenska**: `sidhuvud`, `innehåll`, `sidebar`, `sidfot`.
- Google Fonts importeras överst i CSS-filen: `@import url('...')`.
- Klasser namnges på svenska i kebab-case: `.meny`, `.inlagg`, `.rutnat`, `.aktiv`.

## Fil- och mappstruktur

- Alla fil- och mappnamn är **gemener, kebab-case**, utan mellanslag.
- Standardfiler per lektion: `index.html`, `style.css`, `script.js`, `README.md`.
- Bilder samlas i mappen `bilder/`.
- Flersidig navigation använder `sida1.html`, `sida2.html`, osv.

## README-format per lektion

```markdown
**Sammanfattning:** Tränat på [begrepp].

[Eventuell källkod eller anteckningar]
```

## JavaScript (kapitel 8)

- Använd alltid `let` (inte `const` eller `var`).
- Händelsehantering sker via `onclick`-attribut i HTML, inte `addEventListener`.
- DOM-manipulation via `document.querySelector()` och `.textContent`/`.value`/`.classList`.
- Enkel logik med `if`/`else if`/`else`.
