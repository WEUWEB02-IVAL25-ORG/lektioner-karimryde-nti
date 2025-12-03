# Lektion PicoCSS Globetrotter

## Intro
I den här lektionen använder vi ett färdigt stilbibliotek (PicoCSS) för att få en snygg sida snabbt. Du lär dig också att byta tema (ljust/mörkt) och visa en enkel tack‑ruta med en dialog. Målet är att se hur HTML, CSS och lite JavaScript kan samarbeta. Vi bygger en enkel rese‑sida med kort, formulär och en tack‑dialog.

## HTML
```html
<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Globetrotter</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css">
    <link rel="stylesheet" href="style.css">
    <script defer src="script.js"></script>
</head>
<body>
    <div class="container">
        <header>
            <div class="grid">
                <h1>Globetrotter</h1>
                <button>Växla tema</button>
            </div>
            <nav>
                <ul>
                    <li><a href="#">Hem</a></li>
                    <li><a href="#">Resmål</a></li>
                    <li><a href="#">Boka</a></li>
                    <li><a href="#">Kontakt</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <div class="grid">
                <article>
                    <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="">
                    <h2>Upptäck naturen</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum perspiciatis sed debitis
                        excepturi nulla adipisci quibusdam quis, quaerat ab in suscipit aliquam, laborum deleniti quae
                        voluptatem, et repudiandae odit labore.</p>
                </article>
                <article>
                    <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="">
                    <h2>Stad och kultur</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente exercitationem sit repellendus
                        harum rem aperiam optio asperiores nihil possimus ad hic odio, dicta libero earum voluptatem qui
                        quibusdam consequuntur quasi.</p>
                </article>
                <article>
                    <img src="https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="">
                    <h2>Sol och bad</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur non debitis temporibus,
                        blanditiis facere accusamus harum numquam reiciendis. Numquam sed doloribus molestiae nihil quia
                        fugit odio något ducimus repudiandae molestias?</p>
                </article>
            </div>
            <form>
                <fieldset>
                    <label>Namn<input name="name" placeholder="Ditt namn" autocomplete="name" /></label>
                    <label>Email<input type="email" name="email" placeholder="Din email" autocomplete="email" /></label>
                    <label>Meddelande<textarea name="meddelande" id="meddelande" rows="3"></textarea></label>
                </fieldset>
                <input type="submit" value="Skicka" />
            </form>
        </main>
        <footer>
            <p>&copy; 2025 Globetrotter Inc</p>
        </footer>
    </div>
    <dialog>
        <article>
            <h2>Tack för ditt meddelande</h2>
            <p></p>
            <footer>
                <button>OK</button>
            </footer>
        </article>
    </dialog>
</body>
</html>
```

## CSS
```css
body {
    /* background-color: #d9d9d9; */
}
.container {
    width: 800px;
    padding: 20px;
    /* background-color: #fff; */
}
```

## Javascript
```javascript
// Välja vad vi skall lyssna på
// Välja knappen-elementet
let knapp = document.querySelector('button');

// Välja HTML-elementet
let minHtml = document.documentElement;

// Välja kontainern
let kontainer = document.querySelector('.container');

// Välj rubriken
let rubrik = document.querySelector('h1');

// Lyssna på 'click' på knappen
knapp.addEventListener('click', function () {
    console.log("Du klickade på knappen!");

    // Om temat "light" så blir den "dark"
    if (minHtml.dataset.theme == "light") {
        minHtml.dataset.theme = "dark";
        kontainer.style.backgroundColor = "darkblue";
        rubrik.style.color = "red";
        rubrik.style.fontSize = "50px";
        rubrik.style.fontFamily = "sans-serif";
    } else {
        minHtml.dataset.theme = "light";
        kontainer.style.backgroundColor = "blue";
        rubrik.style.color = "red";
        rubrik.style.fontSize = "30px";
        rubrik.style.fontFamily = "serif";
    }
});
///////////////////////////////////////////////////

// Välj textrutorna
let fnamn = document.querySelector('input');
let femail = document.querySelector('input[type="email"]');
let fmeddelande = document.querySelector('textarea');

// Välj formulärknappen (input)
let fknapp = document.querySelector('input[type="submit"]');

// Välja dialog och knappen i dialog
var modal = document.querySelector('dialog');
var modalOk = document.querySelector('dialog button');
var modalText = document.querySelector('dialog p');

// Lyssna på "click"-event (händelse)
fknapp.addEventListener("click", function (e) {
    // Hindra att sidand laddas om
    e.preventDefault();

    // Läs av det som står i textrutorna och lägg i en variabel
    let ftext = fnamn.value + "<br>" + femail.value + "<br>" + fmeddelande.value;

    // Skriv ut bekräftelse
    modalText.innerHTML = "Du skrev:<br>" + ftext;

    // Visa modal
    modal.showModal();
});

// Vid klick på knappen modalOK
// modal.close()
modalOk.addEventListener('click', function () {
    modal.close();
})
```
