let audio = document.getElementById('audio');
let popupTemplate = document.getElementById('popup');
let warning = document.getElementById('warning');


document.addEventListener('DOMContentLoaded', () => {
    audio.volume = 1.0;
    audio.play().catch(error => {
        console.log('Autoplay bloqueado, esperando interacción del usuario...');
    });

    
    setTimeout(() => {
        audio.play();
    }, 1000);
});


setInterval(() => {
    showPopup();
}, 1000);


setInterval(() => {
    warning.style.opacity = warning.style.opacity == 0 ? 1 : 0;
}, 1000);


document.addEventListener('click', () => {
    audio.play();
    showPopup();
});

function showPopup() {
    let newPopup = popupTemplate.cloneNode(true);
    newPopup.style.display = 'block';

    let randomX = Math.random() * (window.innerWidth - 200);
    let randomY = Math.random() * (window.innerHeight - 100);
    newPopup.style.left = `${randomX}px`;
    newPopup.style.top = `${randomY}px`;

    document.body.appendChild(newPopup);

    setTimeout(() => {
        newPopup.remove();
    }, 2000);
}
