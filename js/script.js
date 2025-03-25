// richiamo gli elementi su cui lavorare:

const immagine = document.querySelector('.img');
const button = document.querySelector('.btn');

// Corpo del programma:

// button.addEventListener('click', function () {
//     immagine.src = "./img/yellow_lamp.png"
// });

// corpo del programma bonus:

const lampadinaAccesa = "./img/yellow_lamp.png";
const lampadinaSpenta = "./img/white_lamp.png";

button.addEventListener('click', function () {
   if (immagine.src.includes("white_lamp.png")) {
    immagine.src = lampadinaAccesa;
    button.innerText = 'Spegni'
   }
   else{
    immagine.src = lampadinaSpenta;
    button.innerText = 'accendi'
    
   }
});