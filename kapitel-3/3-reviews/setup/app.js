// local reviews data
const reviews = [
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        text:
            "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
        text:
            "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
        text:
            "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
            "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
        text:
            "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
];

// Select items
const image = document.querySelector('#person-img');
const author = document.querySelector('#author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set starting review
let currentReview = 0;

// Load initial review
const review = reviews[currentReview];
image.src = review.img;
author.textContent = review.name;
job.textContent = review.job;
info.textContent = review.text;

// Listen to buttons
nextBtn.addEventListener('click', function () {
    currentReview++;
    if (currentReview > 3) {
        currentReview = 0
    }
    const review = reviews[currentReview];
    image.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
})
prevBtn.addEventListener('click', function () {
    currentReview--;
    if (currentReview < 0) {
        currentReview = 3;
    }
    const review = reviews[currentReview];
    image.src = review.img;
    author.textContent = review.name;
    job.textContent = review.job;
    info.textContent = review.text;
})

/*
Extra uppgifter:

1. Slump utan upprepning
Gör “Surprise me!” så att den väljer en annan post än den som visas just nu. Hantera fallet när det bara finns en post.

2. Tangentbordsstyrning
Vänsterpil = föregående, högerpil = nästa, mellanslag = slumpa. Fungerar även när fokus ligger på knapparna.

3. Indikator “x av n”
Visa under bilden vilken post som visas, t.ex. “2/4”. Uppdateras vid alla byten.

4. Dynamisk alt-text
Sätt bildens alt-text utifrån namn och jobb varje gång posten byts.

5. aria-live för skärmläsare
Lägg in en dold live-region i HTML och uppdatera den med namn + jobb vid varje byte.

6. Fade-animation vid byte
Låt bild och texter fade:a ut/in vid byte med CSS-klasser och transitioner. Inga externa bibliotek.

7. Filtrera på yrkesroll
Lägg till en <select> där man kan välja roll (t.ex. “web designer”). Bläddra bara inom matchande poster. Fallback: alla poster.

8. Förladdning av bild + fallback
Förladda nästa bild innan den visas. Om den inte laddas: visa en enkel placeholder/fallback i stället.

9. Auto-play med paus
Gör att recensionerna byter automatiskt var 5:e sekund. Pausa när muspekaren är över kortet eller när sidan inte är aktiv.

10. Favoritmarkering
Lägg till en knapp “Spara favorit”. Visa en liten stjärna på favoriten och spara valet med localStorage.

11. Cykla runt korrekt
När man står på sista posten och trycker “nästa” → hoppa till första. När man står på första och trycker “föregående” → hoppa till sista.

12. Disable vid laddning
När en ny post laddas (t.ex. bild-förladdning), inaktivera knapparna kort och aktivera dem igen när allt är klart.

13. Tangent “Home” och “End”
Home = hoppa till första posten. End = hoppa till sista posten.

14. Räkna klick
Visa hur många gånger användaren bytt post under sessionen. Återställ när sidan laddas om.

15. Felmeddelande i sidan
Om något går fel (t.ex. bildfel), visa ett tydligt inline-meddelande över kortet. Inga alert()-rutor.

*/
