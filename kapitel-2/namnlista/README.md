# Lektion Namnlista

## Intro
I den här lektionen lär du dig att lägga till nya saker i sidan när man klickar på en knapp. Målet är att läsa värdet från en textruta och skapa ett nytt list‑objekt med det namnet. Vi bygger en namnlista där du kan skriva in ett namn och lägga till det.

## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <script defer src="./script.js"></script>
</head>
<body>
    <div class="kontainer">
        <h1>Skapa namnlista</h1>
        <div class="kol-3">
            <label>Namn:</label>
            <input type="text" placeholder="Skriv ett namn">
            <button>Lägg till</button>
        </div>

        <p class="meddelande"></p>

        <h2>Namnlista</h2>
        <ul class="namnlista">
            <li>Alex</li>
        </ul>
    </div>
</body>
</html>
```

## CSS
```css
body {
    background: #f0f0f0;
    font-family: Arial, sans-serif;
}
.kontainer {
    width: 700px;
    margin: 2em auto;
    padding: 2em;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    text-align: center;
}
.kol-3 {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 10px;
}
.kol-4 {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 10px;
}
label {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 10px 0;
    padding: 0;
}
input, textarea {
    padding: 0.5em;
    border-radius: 0.3em;
    border: 1px solid #ccc;
    font-weight: bold;
    box-shadow: inset 0 2px 2px rgba(0, 0, 0, 0.1);
}
textarea {
    height: 10em;
    width: 100%;
}
button {
    padding: 0.7em;
    border-radius: 0.3em;
    border: none;
    font-weight: bold;
    background: #007bff;
    color: white;
    cursor: pointer;
}
img {
    width: 3em;
}
.total {
    background-color: #DDD;
    padding: 5px;
}
.namnlista {
    list-style-type: none;
}
```

## Javascript
```javascript
// Välja element vi ska använda
var rutaInput = document.querySelector('input');
var knappen = document.querySelector('button');
var rutaMeddelande = document.querySelector('.meddelande');
var listan = document.querySelector('.namnlista');

// Lyssna på knappens click-event
knappen.addEventListener('click', function () {
    
    // Läsa av input-rutan
    var namn = rutaInput.value;

    // Skjut in namnet i ul-listan - version 1
    // var html = '<li>' + namn + '</li>';
    // console.log(html);
    // listan.insertAdjacentHTML('afterbegin', html);

    // Skjut in namnet i ul-listan - version 2
    const li = document.createElement('li');
    li.textContent = namn;
    listan.appendChild(li);

    // Visa en bekräftelse till användaren
    rutaMeddelande.textContent = "La till " + namn;

    // Töm input-rutan
    rutaInput.value = "";
});
```
