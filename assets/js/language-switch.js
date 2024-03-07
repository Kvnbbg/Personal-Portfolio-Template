"use strict";

/**
 * Utility function to generate a random integer between min and max values.
 * @param {number} min - The minimum value.
 * @param {number} max - The maximum value.
 * @returns {number} A random integer between min and max.
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Fetches the real IP address from the ipify API or simulates a fake IP address with a country emoji.
 */
async function updateDisplayWithIPAndCountry() {
  const onVPN = Math.random() < 0.5; // 50% chance of being "on VPN"
  const displayElement = document.getElementById('date-time');
  
  try {
    if (!onVPN) {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      displayElement.textContent = `Your IP Address: ${data.ip}`;
    } else {
      const fakeIP = `${getRandomInt(0, 255)}.${getRandomInt(0, 255)}.${getRandomInt(0, 255)}.${getRandomInt(0, 255)}`;
      const countryEmojis = ['🇺🇸', '🇨🇦', '🇬🇧', '🇩🇪', '🇯🇵', '🇦🇺', '🇫🇷'];
      const randomEmoji = countryEmojis[getRandomInt(0, countryEmojis.length - 1)];
      displayElement.textContent = `Fake IP Address: ${fakeIP} ${randomEmoji}`;
    }
  } catch (error) {
    console.error('Error fetching or simulating IP:', error);
    displayElement.textContent = 'Error fetching IP address';
  }
}

window.onload = updateDisplayWithIPAndCountry;

/**
 * Creates a warning div that encourages users to enable JavaScript for a better experience.
 * @returns {HTMLElement} The created warning div.
 */

document.addEventListener('DOMContentLoaded', function() {
  embedYouTubeVideo();
  if (!document.querySelector(".warning-div")) {
    document.body.appendChild(createWarningDiv());
  }
});

function embedYouTubeVideo() {
  const videoUrl = 'https://www.youtube.com/embed/PE4JJ80QDNE';
  const iframe = document.createElement('iframe');
  iframe.setAttribute('src', videoUrl);
  iframe.setAttribute('width', '560');
  iframe.setAttribute('height', '315');
  iframe.setAttribute('frameborder', '0');
  iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
  iframe.setAttribute('allowfullscreen', true);
  document.body.insertBefore(iframe, document.body.firstChild);
}

function createWarningDiv() {
  const userLang = navigator.language || navigator.userLanguage;
  const messages = {
    en: "JavaScript is required to fully enjoy our content. Please confirm: ",
    fr: "JavaScript est nécessaire pour profiter pleinement de notre contenu. Veuillez confirmer : ",
  };

  const message = messages[userLang.startsWith("fr") ? "fr" : "en"];
  const warningDiv = document.createElement("div");
  warningDiv.setAttribute("role", "alert");
  warningDiv.classList.add("warning-div");
  warningDiv.textContent = message;

  const yesButton = document.createElement("button");
  yesButton.textContent = userLang.startsWith("fr") ? "Oui, j'ai JavaScript" : "Yes, I have JavaScript";
  yesButton.onclick = () => {
    warningDiv.style.display = "none";
    triggerFireworks();
  };

  const noButton = document.createElement("button");
  noButton.textContent = userLang.startsWith("fr") ? "Non, je n'ai pas JavaScript" : "No, I don't have JavaScript";
  noButton.onclick = () => window.open("https://www.wikihow.com/Enable-Javascript", "_blank");

  warningDiv.appendChild(yesButton);
  warningDiv.appendChild(noButton);

  return warningDiv;
}

function triggerFireworks() {
  // Example fireworks effect. Replace this with your own effect or library call.
  const fireworksDiv = document.createElement('div');
  fireworksDiv.classList.add('fireworks-animation');
  document.body.appendChild(fireworksDiv);

  setTimeout(() => {
    document.body.removeChild(fireworksDiv);
  }, 1000); // Adjust time according to your animation
}

/**
 * Handles user input in a chatbot interface, responding to common queries.
 */
function getChatbotResponse() {
  const userInput = document.getElementById("userInput").value.toLowerCase();
  let response;

  if (userInput.includes("how are you")) {
    response = "I am fine, thank you! How can I assist you today?";
  } else if (userInput.includes("name")) {
    response = "I am a simple AI chatbot here to help you.";
  } else if (userInput.includes("thank you")) {
    response = "You're welcome!";
  } else {
    response = "Sorry, I am not sure how to respond to that.";
  }

  document.getElementById("chatbotAnswer").innerText = response;
}
