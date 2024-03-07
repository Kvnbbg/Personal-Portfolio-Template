"use strict";

// Improved function to generate random integers
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// Optimized and improved error handling for fetching IP addresses
const updateDisplayWithIPAndCountry = async () => {
  const displayElement = document.getElementById("ip-display");
  if (!displayElement) {
    console.error("Element with id='ip-display' not found.");
    return;
  }

  try {
    const onVPN = Math.random() < 0.5; // 50% chance
    const content = onVPN ? getFakeIPWithCountryEmoji() : await getRealIPAddress();
    displayElement.textContent = content;
  } catch (error) {
    console.error("Error fetching or simulating IP:", error);
    displayElement.textContent = "Error fetching IP address";
  }
};

// Using fetch API with error checking for getting real IP address
const getRealIPAddress = async () => {
  const response = await fetch("https://api.ipify.org?format=json");
  if (!response.ok) throw new Error('Failed to fetch IP address');
  const data = await response.json();
  return data.ip;
};

// Simplified fake IP address generation
const getFakeIPWithCountryEmoji = () => {
  const fakeIP = Array.from({length: 4}, () => getRandomInt(0, 255)).join('.');
  const countryEmojis = ["🇺🇸", "🇨🇦", "🇬🇧", "🇩🇪", "🇯🇵", "🇦🇺", "🇫🇷"];
  const randomEmoji = countryEmojis[getRandomInt(0, countryEmojis.length - 1)];
  return `${fakeIP}, ${randomEmoji}`;
};

// Embed YouTube video with more robust element checking
const embedYouTubeVideo = () => {
  const videoContainer = document.getElementById("video-container");
  if (!videoContainer) {
    console.error("Element with id='video-container' not found.");
    return;
  }

  const iframe = document.createElement("iframe");
  iframe.width = "560";
  iframe.height = "315";
  iframe.src = "https://www.youtube.com/embed/PE4JJ80QDNE";
  iframe.frameBorder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowFullscreen = true;
  videoContainer.appendChild(iframe);
};

// Improved dynamic warning message creation
const createWarningDiv = () => {
  const userLang = navigator.language || navigator.userLanguage;
  const messages = {
    en: "JavaScript is required to fully enjoy our content. Please enable it in your browser settings.",
    fr: "JavaScript est nécessaire pour profiter pleinement de notre contenu. Veuillez l'activer dans les paramètres de votre navigateur.",
  };

  const message = messages[userLang.startsWith("fr") ? "fr" : "en"];
  const warningDiv = document.createElement("div");
  warningDiv.setAttribute("role", "alert");
  warningDiv.classList.add("warning-div");
  warningDiv.textContent = message;
  document.body.appendChild(warningDiv);

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
};

// Initialization after DOM load
document.addEventListener("DOMContentLoaded", () => {
  embedYouTubeVideo();
  updateDisplayWithIPAndCountry();
  if (!document.querySelector(".warning-div")) {
    createWarningDiv();
  }
});

// Simplified chatbot response function
function getChatbotResponse() {
  const userInput = document.getElementById("userInput")?.value.toLowerCase();
  let response;

  if (userInput?.includes("how are you")) {
    response = "I am fine, thank you! How can I assist you today?";
  } else if (userInput?.includes("name")) {
    response = "I am a simple AI chatbot here to help you.";
  } else if (userInput?.includes("thank you")) {
    response = "You're welcome!";
  } else {
    response = "Sorry, I am not sure how to respond to that.";
  }

  const answerElement = document.getElementById("chatbotAnswer");
  if (answerElement) answerElement.innerText = response;
}

// implmentations of triggering fireworks as needed
function triggerFireworks() {
  // Example fireworks effect. Replace this with other effect or library call.
  const fireworksDiv = document.createElement("div");
  fireworksDiv.classList.add("fireworks-animation");
  document.body.appendChild(fireworksDiv);

  setTimeout(() => {
    document.body.removeChild(fireworksDiv);
  }, 1000); // Adjust time according to your animation
}