"use strict";

// Warning Div for JavaScript
function createWarningDiv() {
  const userLang = navigator.language || navigator.userLanguage;
  const messages = {
    en: `JavaScript is required to fully enjoy our content. Please confirm: `,
    fr: `JavaScript est nécessaire pour profiter pleinement de notre contenu. Veuillez confirmer : `,
  };

  const message = messages[userLang.startsWith("fr") ? "fr" : "en"];
  const warningDiv = document.createElement("div");
  warningDiv.setAttribute("role", "alert");
  warningDiv.classList.add("warning-div");
  warningDiv.innerHTML = message;

  // Yes button
  const yesButton = document.createElement("button");
  yesButton.innerHTML = userLang.startsWith("fr")
    ? "Oui, j'ai JavaScript"
    : "Yes, I have JavaScript";
  yesButton.onclick = () => (warningDiv.style.display = "none");

  // No button
  const noButton = document.createElement("button");
  noButton.innerHTML = userLang.startsWith("fr")
    ? "Non, je n'ai pas JavaScript"
    : "No, I don't have JavaScript";
  noButton.onclick = () =>
    window.open("https://www.wikihow.com/Enable-Javascript", "_blank");

  warningDiv.appendChild(yesButton);
  warningDiv.appendChild(noButton);

  return warningDiv;
}

// Append the warning div only if JavaScript is enabled
if (!document.querySelector(".warning-div")) {
  document.body.appendChild(createWarningDiv());
}

// Language Model for the Portfolio Site [assets/js/language-switch.js]

// CHATBOT SCRIPT
function getChatbotResponse() {
  const userInput = document.getElementById("userInput").value.toLowerCase();
  let response = "";

  // Define responses to certain inputs
  if (userInput.includes("how are you")) {
    response = "I am fine, thank you! How can I assist you today?";
  } else if (userInput.includes("name")) {
    response = "I am a simple AI chatbot here to help you.";
  } else if (userInput.includes("thank you")) {
    response = "You're welcome!";
  } else {
    response = "Sorry, I am not sure how to respond to that.";
  }

  // Update the chatbot response in the HTML
  document.getElementById("chatbotAnswer").innerText = response;
}
