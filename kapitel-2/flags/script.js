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