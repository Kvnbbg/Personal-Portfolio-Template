'use strict';

document.body.appendChild(createWarningDiv());

function createWarningDiv() {
    const userLang = navigator.language || navigator.userLanguage;
    const messages = {
        en: `If you see the Korean word for "happiness" on our site, it's because JavaScript is not activated in your browser. To fully enjoy our content in English or French, please enable JavaScript. <a href='https://www.wikihow.com/Enable-Javascript' target='_blank'>Learn how</a>.`,
        fr: `Si vous voyez le mot coréen pour "bonheur" sur notre site, c'est parce que JavaScript n'est pas activé dans votre navigateur. Pour profiter pleinement de notre contenu en anglais ou en français, veuillez activer JavaScript. <a href='https://www.wikihow.com/Enable-Javascript'>Apprenez comment faire</a>.`
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

// Language Model for the Portfolio Site [assets/js/language-switch.js]

// CHATBOT SCRIPT 
function getChatbotResponse() {
    const userInput = document.getElementById('userInput').value.toLowerCase();
    let response = '';
  
    // Define responses to certain inputs
    if (userInput.includes('how are you')) {
      response = 'I am fine, thank you! How can I assist you today?';
    } else if (userInput.includes('name')) {
      response = 'I am a simple AI chatbot here to help you.';
    } else if (userInput.includes('thank you')) {
      response = 'You\'re welcome!';
    } else {
      response = 'Sorry, I am not sure how to respond to that.';
    }
  
    // Update the chatbot response in the HTML
    document.getElementById('chatbotAnswer').innerText = response;
  }
  