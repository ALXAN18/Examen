let audio = document.getElementById('audio');
let popupTemplate = document.getElementById('popup');
let warning = document.getElementById('warning');

audio.play();

setInterval(() => {
    let newPopup = popupTemplate.cloneNode(true);
    newPopup.style.display = 'block';

    newPopup.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
    newPopup.style.top = `${Math.random() * (window.innerHeight - 100)}px`;

    document.body.appendChild(newPopup);

    setTimeout(() => {
        newPopup.style.display = 'none';
    }, 2000);
}, 1000);

setInterval(() => {
    warning.style.opacity = warning.style.opacity == 0 ? 1 : 0;
}, 1000);
