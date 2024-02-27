'use strict';

document.body.appendChild(createWarningDiv());

function createWarningDiv() {
    const userLang = navigator.language || navigator.userLanguage;
    const messages = {
        en: `To fully enjoy our site, please enable JavaScript in your browser. <a href='https://www.wikihow.com/Enable-Javascript'>Learn how</a>.`,
        fr: `Pour profiter pleinement de notre site, veuillez activer JavaScript dans votre navigateur. <a href='https://www.wikihow.com/Enable-Javascript'>Apprenez comment faire</a>.`
    };
    const message = messages[userLang.startsWith('fr') ? 'fr' : 'en'];

    const warningDiv = document.createElement('div');
    warningDiv.setAttribute('role', 'alert');
    warningDiv.classList.add('warning-div');
    warningDiv.innerHTML = message;

    const closeButton = document.createElement('button');
    closeButton.setAttribute('aria-label', userLang.startsWith('fr') ? 'Fermer le message d\'avertissement' : 'Close warning message');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = 'X';
    closeButton.onclick = () => warningDiv.style.display = 'none';
    warningDiv.appendChild(closeButton);

    return warningDiv;
}
