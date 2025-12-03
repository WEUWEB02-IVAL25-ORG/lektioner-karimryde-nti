# Lektion Flaggor

## Intro
I den här lektionen tränar du på att hämta data från en server (internet) med `fetch` och sedan visa det på sidan. Målet är att förstå hur man väntar på svar och ritar ut en bild. Vi bygger en sida med knappar som hämtar och visar flaggor.

## HTML
```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Ladda flaggor</title>
  <!-- Bootstrap ger färdiga klasser för grid och knappar -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
  <!-- Vår egen stilfil för färger, typsnitt och bakgrund -->
  <link rel="stylesheet" href="./style.css">
</head>
<body>
  <div class="container">
    <h1>Alla världens flaggor</h1>

    <!-- Responsivt grid: 2 kolumner på mobil, fler på större skärmar -->
    <div class="grid-6 row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 g-3"></div>

    <!-- Knapparna vi kopplar till JavaScript i senare delar -->
    <div class="d-flex gap-2 justify-content-center">
      <button id="btn-one" class="btn btn-primary">Hämta en flagga</button>
      <button id="btn-many" class="btn btn-primary">Hämta 18 flaggor</button>
      <button id="btn-clear" class="btn btn-outline-secondary">Rensa</button>
    </div>
  </div>

  <!-- Vår JavaScript-fil med all logik -->
  <script src="./script.js"></script>
</body>
</html>
```

## CSS
```css
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro|Damion|Roboto+Slab&display=swap");

body {
  background: url("https://images.unsplash.com/photo-1514454529242-9e4677563e7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80") fixed;
  background-size: 1900px;
}

.container {
  width: 700px;
  padding: 2em;
  margin: 1em auto;
  min-height: 89vh;
  background: #ffffff6e;
  border-radius: 5px;
  font-family: 'Roboto Slab', serif;
  border: 1px solid #a0a0a0;
  box-shadow: 1px 1px 4px #686868;
  text-align: center;
}

h1 {
  color: #ffffff;
  font-size: 3em;
  margin: 0;
  text-shadow: 1px 1px 1px #5c5c5c;
}

.grid-6 { 
  padding: 1.5rem 0;
}

/* Gör flaggbilder snygga i Bootstrap‑kolumner */
.grid-6 img {
  background: #fff;
  border: 1px solid #ccc;
  padding: 0.25rem;
  border-radius: 6px;
}
```

## Javascript
```javascript
// Element vi använder
let divbox = document.querySelector('.grid-6');
let knapp1 = document.querySelector('#btn-one');

// Lyssna på knappen
knapp1.addEventListener('click', function () {
    console.log('Klicka på knappen');
    
    // Göra ett anrop mot servern
    fetch('http://10.151.168.5:8081/flags/random')
    // Sedan tolka svaret som JSON
    .then(svar => {
        //console.log(svar);
        return svar.json()
    })
    // Sedan plocka det data vi intresserade av..
    .then(data => {
        console.log(data.name, data.code, data.svgUrl);
        
        // Bildens url
        let urlBilden = 'http://10.151.168.5:8081' + data.svgUrl;
        console.log(urlBilden);
        
        // Infoga bilden i divboxen
        divbox.insertAdjacentHTML("beforeend", 
            '<img src="' + urlBilden + '" alt="' + data.name + '">' 
        )
    })
});
```
