# Lektion Summera

## Intro
I den här lektionen tränar du på att läsa flera saker från sidan och räkna ihop dem. Målet är att hitta alla siffror i en lista, göra om dem till tal och summera. Vi bygger en enkel sida som räknar ihop tal i en lista och visar resultatet.

## HTML
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="kontainer">
        <ul>
            <li>12</li>
            <li>23</li>
            <li>34</li>
            <li>45</li>
        </ul>
        <p></p>
    </div>
    <script src="./script.js"></script>
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
input {
    width: 3em;
}
img {
    width: 3em;
}
.total {
    background-color: #DDD;
    padding: 5px;
}
```

## Javascript
```javascript
// Välja elementen
// Alla <li> och en <p>
var rutaP = document.querySelector('p');
var rutorLi = document.querySelectorAll('li');

// För varje <li>
var summa = 0;
rutorLi.forEach(function (li) {

    // Skriv ut innehållet av li
    console.log(li.textContent);
    
    // Addera
    summa += Number(li.textContent);
});

// Skriv ut
rutaP.textContent = summa;
```
