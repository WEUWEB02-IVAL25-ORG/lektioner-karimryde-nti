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