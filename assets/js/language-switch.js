"use strict";

const techLanguageContent = {
  en: {
    welcome: "Welcome to My Digital Universe✨",
    aboutMe: "Developer Profile",
    latestPostTitle: "Latest Post: The Future of Web Development",
    latestPostDesc: "Read my latest article discussing emerging trends in web development, the transformative impact of AI, and future web technologies.",
    trendingPostTitle: "Trending Post: The Rise of AI in Web Design",
    trendingPostDesc: "Discover how AI is revolutionizing UX design, its various applications, and the future of AI-driven web development.",
    location: "Geographical Node: France",
    languages: "Programming Dialects: Proficient in Python, JavaScript, and a multitude of other programming languages to meet client needs and advance research initiatives.",
    switchTo: "Start communicating with my virtual clone via the chat interface! (I assure you, my virtual clone is just as friendly as I am!)",
    biography: `Driven by an insatiable curiosity and ardent passion, my journey in the digital sphere began with designing basic Python scripts. This initial spark evolved into an unwavering quest for technological research.`,
    currentlyOn: "Current Ventures",
    activities: `I am deeply involved in exploring emerging paradigms and deciphering algorithmic enigmas. My path encompasses web development, using frameworks such as Flask, three.js, PHP, Node.js, React, and Flutter with Dart; data science with libraries like NumPy, Pandas, and TensorFlow; cloud computing on platforms like Heroku for architecting scalable and resilient web applications; DevOps, employing tools like Jira, Trello for Agile Scrum, Docker, Kubernetes, and Jenkins for continuous integration and deployment, ensuring high availability and seamless application delivery; UX/UI design, crafting engaging interfaces using Figma and Canva. I also appreciate various operating systems, including Linux, Windows, and Apple.`,
    githubInsights: "🚀 GitHub Insights",
    topLanguages: "Top Languages",
    githubStats: "Statistical Analyses",
    connect: "Connect with Me",
    leisureContact: "Interests & Hobbies",
    professionalContact: "Professional Liaison",
    reachOut: "Feel free to contact me via my social networks or by leaving a comment.",
    year: `© ${new Date().getFullYear()} Portfolio of Kevin J. MARVILLE`,
  },
  fr: {
    welcome: "Bienvenue dans Mon Univers Numérique✨",
    aboutMe: "Profil de Développeur",
    latestPostTitle: "Dernier Article: L'avenir du Développement Web",
    latestPostDesc: "Ouvrez mon dernier article discutant des tendances émergentes en développement web, de l'impact transformateur de l'IA et des technologies web futures.",
    trendingPostTitle: "Article Tendance: L'Ascension de l'IA dans le Design Web",
    trendingPostDesc: "Découvrez comment l'IA révolutionne le design UX, ses diverses applications et l'avenir du développement web piloté par l'IA.",
    location: "Noeud Géographique : France",
    languages: "Dialectes de Programmation : Compétence en Python, JavaScript, et une myriade d'autres langages de programmation pour répondre aux besoins des clients et faire avancer les initiatives de recherche.",
    switchTo: "Entamer la communication avec mon clone virtuel via l'interface de chat ! (Je vous assure, mon clone virtuel est aussi sympathique que moi !)",
    biography: `Émanant d'un vecteur d'insatiable curiosité et d'ardente passion, ma trajectoire dans la sphère numérique a pris son envol avec la conception de scripts Python élémentaires. Cette étincelle initiale s'est transformée en une quête inébranlable de recherche technologique.`,
    currentlyOn: "Entreprises Actuelles",
    activities: `Je suis profondément impliqué dans l'exploration de paradigmes émergents et le déchiffrage des énigmes algorithmiques. Mon parcours englobe le développement web, utilisant des frameworks tels que Flask, three.js, PHP, Node.js, React, et Flutter avec Dart, pour me plaire à la science des données avec des bibliothèques comme NumPy, Pandas et TensorFlow; le cloud computing, en utilisant des plateformes comme Heroku pour architecturer des applications web évolutives et résilientes; le domaine du DevOps, j'utilise des outils comme Jira, Trello pour Agile Scrum, Docker, Kubernetes et Jenkins pour l'intégration et le déploiement continus, garantissant une haute disponibilité et une livraison transparente des applications; le design UX/UI, je crée des interfaces engageantes en utilisant Figma et Canva. J'apprécie également divers systèmes d'exploitation, y compris Linux, Windows et Apple.`,
    githubInsights: "🚀 Insights GitHub",
    topLanguages: "Lexiques Dominants",
    githubStats: "Analyses Statistiques",
    connect: "Établir le Contact",
    leisureContact: "Intérêts & Loisirs",
    professionalContact: "Liaison Professionnelle",
    reachOut: "N'hésitez pas à me contacter via mes réseaux sociaux ou en y laissant un commentaire.",
    year: `© ${new Date().getFullYear()} Portfolio de Kevin, J MARVILLE`,
  },
};

let currentLanguage = "en"; // Default language set to English

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "fr" : "en";
  const languageSwitch = document.getElementById("language-switch");
  languageSwitch.classList.toggle("active");

  const iconElement = document.getElementById("language-icon");
  const textElement = document.getElementById("language-text");

  iconElement.textContent = currentLanguage === "en" ? "💻" : "💡";
  textElement.textContent = techLanguageContent[currentLanguage].switchTo;
  console.log(`Language set to ${currentLanguage === "en" ? "English" : "French"}.`);
  updatePageContent();
}

function updatePageContent() {
  // Query all elements with a 'data-lang' attribute to update their content
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (techLanguageContent[currentLanguage][key]) {
      element.textContent = techLanguageContent[currentLanguage][key];
    }
  });

  // Update language switch button appearance
  updateLanguageSwitchAppearance();
}

function updateLanguageSwitchAppearance() {
  // Remove 'active' class from all language switches
  document.querySelectorAll("#language-switch").forEach((element) => {
    element.classList.remove("active");
  });
  // Add 'active' class to the current language switch
  const activeSwitch = Array.from(
    document.querySelectorAll("#language-switch")
  ).find((element) =>
    element.textContent
      .trim()
      .includes(currentLanguage === "en" ? "English" : "Français")
  );
  if (activeSwitch) {
    activeSwitch.classList.add("active");
  }
}

// Initialize event listeners for language switching
function initializeLanguageSwitchListeners() {
  document.querySelectorAll("#language-switch").forEach((button) => {
    const lang = button.textContent.includes("English") ? "en" : "fr";
    button.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default link action
      updateLanguage(lang); // Update the page language
    });
  });
}

// DOMContentLoaded to ensure the DOM is fully loaded before attaching listeners
document.addEventListener("DOMContentLoaded", () => {
  initializeLanguageSwitchListeners(); // Set up the event listeners for language switching
  updatePageContent(); // Initial call to set the page content based on the default language
});
