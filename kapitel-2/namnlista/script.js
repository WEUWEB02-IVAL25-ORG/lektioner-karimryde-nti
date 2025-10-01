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