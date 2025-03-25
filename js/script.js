// richiamo gli elementi su cui lavorare:

const immagine = document.querySelector('.img');
const button = document.querySelector('.btn');

// Corpo del programma:

button.addEventListener('click', function () {
    immagine.src = "./img/yellow_lamp.png"
});