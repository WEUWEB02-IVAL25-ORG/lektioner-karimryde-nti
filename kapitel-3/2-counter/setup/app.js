// Startvärde
let count = 0;

// Väljer element i HTML som vi arbetar med
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// Loopa igenom listan med knappar
btns.forEach(function (btn) {
    // Lyssnar på knappen
    btn.addEventListener('click', function (e) {
        // Vilka klasser har knappen?
        const styles = e.currentTarget.classList;
        if (styles.contains('decrease')) {
            count--;
        } else if (styles.contains('increase')) {
            count++;
        } else {
            count = 0;
        }

        // Färga siffran om neg eller pos
        if (count > 0) {
            value.style.color = 'green';
            value.textContent = '+' + count;
        } else if (count < 0) {
            value.style.color = 'red';
            value.textContent = count;
        } else {
            value.style.color = 'black';
            value.textContent = count;
        }
        
    })
});

/*
Extra uppgifter:

1. Byt språk på knapparna
Byt text till svenska: “Minska”, “Nollställ”, “Öka”.

2. Visa tecken framför talet
Lägg till “+” när talet är positivt.

3. Bakgrundsfärg på containern
Låt .container få svag grön bakgrund vid positivt, röd vid negativt.

4. Lägg till en “+5” och “–5”-knapp
Två extra knappar som ändrar med 5 i taget.

*/