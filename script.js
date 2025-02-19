let audio = document.getElementById('audio');
let popupTemplate = document.getElementById('popup');
let warning = document.getElementById('warning');
let startButton = document.getElementById('startButton');

startButton.addEventListener('click', () => {
    audio.play();
    startButton.style.display = 'none';
});

setInterval(() => {
    audio.play();
}, 5000);

setInterval(() => {
    showPopup();
}, 1000);

function showPopup() {
    let newPopup = popupTemplate.cloneNode(true);
    newPopup.style.display = 'block';

    let randomX = Math.random() * window.innerWidth - 200;
    let randomY = Math.random() * window.innerHeight - 100;
    newPopup.style.left = `${randomX}px`;
    newPopup.style.top = `${randomY}px`;

    document.body.appendChild(newPopup);

    setTimeout(() => {
        newPopup.style.display = 'none';
    }, 2000);
}

setInterval(() => {
    warning.style.opacity = warning.style.opacity == 0 ? 1 : 0;
}, 1000);
