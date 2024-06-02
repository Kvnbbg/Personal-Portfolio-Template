"use strict";

// Day Night Toggle
function toggleTheme() {
  document.body.classList.toggle("night");
}

// Improved function to generate random integers
const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

// Optimized and improved error handling for fetching IP addresses
const updateDisplayWithIPAndCountry = async () => {
  const displayElement = document.getElementById("ip-display");
  if (!displayElement) {
    console.error("Element with id='ip-display' not found.");
    return;
  }

  try {
    const onVPN = Math.random() < 0.5; // 50% chance
    const content = onVPN
      ? getFakeIPWithCountryEmoji()
      : await getRealIPAddress();
    displayElement.textContent = content;
  } catch (error) {
    console.error("Error fetching or simulating IP:", error);
    displayElement.textContent = "Error fetching IP address";
  }
};

// Using fetch API with error checking for getting real IP address
const getRealIPAddress = async () => {
  const response = await fetch("https://api.ipify.org?format=json");
  if (!response.ok) throw new Error("Failed to fetch IP address");
  const data = await response.json();
  return data.ip;
};

// Simplified fake IP address generation
const getFakeIPWithCountryEmoji = () => {
  const fakeIP = Array.from({ length: 4 }, () => getRandomInt(0, 255)).join(
    ".",
  );
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
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
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
  yesButton.textContent = userLang.startsWith("fr")
    ? "Oui, j'ai JavaScript"
    : "Yes, I have JavaScript";
  yesButton.onclick = () => {
    warningDiv.style.display = "none";
    triggerFireworks();
  };

  const noButton = document.createElement("button");
  noButton.textContent = userLang.startsWith("fr")
    ? "Non, je n'ai pas JavaScript"
    : "No, I don't have JavaScript";
  noButton.onclick = () =>
    window.open("https://www.wikihow.com/Enable-Javascript", "_blank");

  warningDiv.appendChild(yesButton);
  warningDiv.appendChild(noButton);

  return warningDiv;
};

// Random math joke generator with mental calculations
const mathJokes = {
  en: [
    "Why did the student do multiplication problems on the floor? The teacher told him not to use tables.",
    "Why don't you do arithmetic in the jungle? Because if you add 4+4 you get ate.",
    "If you have 5 apples and you give away 2, how many apples do you have left?",
    "Why was the math book sad? Because it had too many problems.",
    "Why was the equal sign so humble? Because it knew it wasn’t less than or greater than anyone else.",
  ],
  fr: [
    "Pourquoi l'élève faisait-il des multiplications par terre? Parce que le professeur lui a dit de ne pas utiliser les tables.",
    "Pourquoi ne fait-on pas d'arithmétique dans la jungle? Parce que si vous ajoutez 4+4, vous obtenez mangé.",
    "Si vous avez 5 pommes et que vous en donnez 2, combien vous en reste-t-il?",
    "Pourquoi le livre de maths était-il triste? Parce qu'il avait trop de problèmes.",
    "Pourquoi le signe égal était-il si humble? Parce qu'il savait qu'il n'était ni inférieur ni supérieur à quiconque.",
  ],
};

// Developer jokes
const developerJokes = {
  en: [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "How many programmers does it take to change a light bulb? None, it's a hardware problem.",
    "Why do Java developers wear glasses? Because they don't C#.",
    "What is a programmer's favorite hangout place? Foo Bar.",
    "Why did the programmer go broke? Because he used up all his cache.",
  ],
  fr: [
    "Pourquoi les programmeurs préfèrent-ils le mode sombre? Parce que la lumière attire les bugs.",
    "Combien de programmeurs faut-il pour changer une ampoule? Aucun, c'est un problème matériel.",
    "Pourquoi les développeurs Java portent-ils des lunettes? Parce qu'ils ne voient pas en C#.",
    "Quel est l'endroit préféré des programmeurs? Foo Bar.",
    "Pourquoi le programmeur est-il devenu fauché? Parce qu'il a utilisé tout son cache.",
  ],
};

// Random math challenge generator
const generateMathChallenge = () => {
  const num1 = getRandomInt(1, 10);
  const num2 = getRandomInt(1, 10);
  const operators = ["+", "-", "*", "/"];
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const challenge = `${num1} ${operator} ${num2}`;
  const answer = eval(challenge).toFixed(2); // Rounded to 2 decimal places
  return { challenge, answer };
};

// State management for the math mini-game
let currentChallenge = null;
const userLang = navigator.language.startsWith("fr") ? "fr" : "en";

// Simplified chatbot response function with math challenges and jokes
function getChatbotResponse() {
  const userInput = document.getElementById("userInput")?.value.toLowerCase();
  const responseElement = document.getElementById("chatbotAnswer");

  if (!userInput || userInput.trim() === "") {
    responseElement.innerText =
      userLang === "en"
        ? "Please type something!"
        : "Veuillez taper quelque chose !";
    return;
  }

  let response;

  if (currentChallenge) {
    const userAnswer = parseFloat(userInput);
    if (
      !isNaN(userAnswer) &&
      userAnswer === parseFloat(currentChallenge.answer)
    ) {
      response =
        userLang === "en" ? "Correct! Well done!" : "Correct! Bien joué!";
      currentChallenge = null;
    } else {
      response =
        userLang === "en"
          ? `Incorrect. Try again: ${currentChallenge.challenge} = ?`
          : `Incorrect. Essayez encore : ${currentChallenge.challenge} = ?`;
    }
  } else if (Math.random() < 0.5) {
    const joke =
      developerJokes[userLang][
        getRandomInt(0, developerJokes[userLang].length)
      ];
    response = joke;
  } else {
    currentChallenge = generateMathChallenge();
    response =
      userLang === "en"
        ? `Let's play a math game! Solve this: ${currentChallenge.challenge} = ?`
        : `Jouons à un jeu de mathématiques ! Résolvez ceci : ${currentChallenge.challenge} = ?`;
  }

  responseElement.innerText = response;

  if (Math.random() < 0.2) {
    // 20% chance to trigger fireworks
    triggerFireworks();
  }
}

// Implementations of triggering fireworks as needed
function triggerFireworks() {
  const fireworksDiv = document.createElement("div");
  fireworksDiv.classList.add("fireworks-animation");

  const styles = ["red", "green", "blue", "yellow", "purple"];
  const randomStyle = styles[getRandomInt(0, styles.length - 1)];
  fireworksDiv.style.backgroundColor = randomStyle;

  fireworksDiv.style.position = "fixed";
  fireworksDiv.style.top = `${getRandomInt(10, 90)}%`;
  fireworksDiv.style.left = `${getRandomInt(10, 90)}%`;
  fireworksDiv.style.width = "50px";
  fireworksDiv.style.height = "50px";
  fireworksDiv.style.borderRadius = "50%";
  fireworksDiv.style.boxShadow = "0 0 20px 10px rgba(255, 255, 255, 0.7)";
  fireworksDiv.style.animation = "explode 1s ease-out";

  document.body.appendChild(fireworksDiv);

  setTimeout(() => {
    document.body.removeChild(fireworksDiv);
  }, 2000); // Adjust time according to your animation
}

// Adding fireworks animation CSS
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = `
  @keyframes explode {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(3); opacity: 0; }
  }
`;
document.head.appendChild(styleSheet);

// Initialization after DOM load
document.addEventListener("DOMContentLoaded", () => {
  embedYouTubeVideo();
  updateDisplayWithIPAndCountry();
  if (!document.querySelector(".warning-div")) {
    createWarningDiv();
  }
  document
    .getElementById("theme-toggle")
    .addEventListener("click", toggleTheme);
  document.getElementById("userInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      getChatbotResponse();
    }
  });
});
