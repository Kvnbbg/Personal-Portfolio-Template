"use strict";

// Generates a random integer between min and max values
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Fetches real IP address or simulates a fake one with a country emoji
const updateDisplayWithIPAndCountry = async () => {
  const displayElement = document.getElementById("ip-display"); // Ensure an element with id="ip-display" exists in your HTML
  const onVPN = Math.random() < 0.5; // Simulate 50% chance of being "on VPN"

  try {
    const content = await (onVPN
      ? getFakeIPWithCountryEmoji()
      : getRealIPAddress());
    displayElement.textContent = content;
  } catch (error) {
    console.error("Error fetching or simulating IP:", error);
    displayElement.textContent = "Error fetching IP address";
  }
};

// Fetches the real IP address using the ipify API
const getRealIPAddress = async () => {
  const response = await fetch("https://api.ipify.org?format=json");
  const data = await response.json();
  return data.ip;
};

// Generates a fake IP address with a country emoji
const getFakeIPWithCountryEmoji = () => {
  const fakeIP = `${getRandomInt(0, 255)}.${getRandomInt(0, 255)}.${getRandomInt(0, 255)}.${getRandomInt(0, 255)}`;
  const countryEmojis = ["🇺🇸", "🇨🇦", "🇬🇧", "🇩🇪", "🇯🇵", "🇦🇺", "🇫🇷"];
  const randomEmoji = countryEmojis[getRandomInt(0, countryEmojis.length - 1)];
  return `${fakeIP} ${randomEmoji}`;
};

// Embeds a YouTube video
const embedYouTubeVideo = () => {
  const videoContainer = document.getElementById("video-container"); // Ensure an element with id="video-container" exists in your HTML
  const iframe = document.createElement("iframe");
  iframe.setAttribute("width", "560");
  iframe.setAttribute("height", "315");
  iframe.setAttribute("src", "https://www.youtube.com/embed/PE4JJ80QDNE");
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute(
    "allow",
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
  );
  iframe.setAttribute("allowfullscreen", true);
  videoContainer.appendChild(iframe);
};

// Creates a dynamic warning message for JavaScript enablement
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

  return warningDiv;
};

// Initialize functionalities after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  embedYouTubeVideo();
  updateDisplayWithIPAndCountry();
  if (!document.querySelector(".warning-div")) {
    document.body.appendChild(createWarningDiv());
  }
});

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
