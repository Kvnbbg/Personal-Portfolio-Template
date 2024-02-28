const techLanguageContent = {
  en: {
    aboutMe: "Developer Profile",
    location: "Geographical Node: France",
    languages: "Programming Dialects: Fluent in Python and JavaScript",
    switchTo: "Initiate Communication, via the Chat Interface!",
    biography: `Initiating from a vector of relentless inquisitiveness and steadfast ardor, my trajectory in the digital sphere ignited with the concoction of elementary Python scripts. This nascent spark has since evolved into an unswerving expedition in quest of technological innovation and computational excellence. Python, as the lingua franca of my digital odyssey, with its eloquent syntax and dynamic semantics, has been my primary vehicle for traversing the intricacies of software architecture and algorithmic design. Drawing sustenance from luminaries like Steve Wozniak, heralded for his pioneering strides in hands-on innovation, and Steve Jobs, celebrated for his visionary prowess in technological entrepreneurship, my voyage mirrors a symbiosis of technical prowess and romanticism.`,
    currentlyOn: "Ongoing Endeavors",
    activities: `I am passionately engaged in exploring emerging paradigms and unraveling algorithmic mysteries. My journey spans from web development, leveraging frameworks such as Flask, to diving into the realms of data science with libraries like NumPy, Pandas, and TensorFlow. Beyond these, I am eager to extend my endeavors into cloud computing, aiming to utilize platforms like Heroku to architect scalable and resilient web applications. In the domain of DevOps, I will employ tools such as Docker, Kubernetes, and Jenkins for continuous integration and deployment in the future, ensuring high availability and seamless delivery of applications. My interest in blockchain technology and decentralized applications (dApps) inspires me to explore Ethereum smart contracts and platforms like Solana, aiming to contribute to the evolving landscape of secure digital transactions. As an emerging member of the open-source community, I am committed to contributing to projects that foster innovation, sharing knowledge, and collaborating on solutions that push the boundaries of technology.`,

    githubInsights: "🚀",
    topLanguages: "Dominant Lexicons",
    githubStats: "Statistical Analyses",
    connect: "Establish Contact",
    leisureContact: "Interests & Avocations",
    professionalContact: "Professional Liaison",
    reachOut:
      "Desiring to partake in discussions pertaining to advanced Pythonic constructs, algorithmic intricacies, or eager for collaborative ventures? Do not hesitate to initiate contact via electronic mail or through the conduits of social media platforms.",
    year: `© ${new Date().getFullYear()} - Kevin Marville's Portfolio`,
  },
  fr: {
    aboutMe: "Profil de Développeur",
    location: "Noeud Géographique : France",
    languages:
      "Dialectes de Programmation : Maîtrise du Python et du JavaScript",
    switchTo: "Entamer la Communication, via l'Interface de Chat!",
    biography: `Émanant d'un vecteur d'insatiable curiosité et d'ardente passion, ma trajectoire dans la sphère numérique a pris son envol avec la conception de scripts Python élémentaires. Cette étincelle naissante a depuis évolué en une expédition inébranlable en quête d'innovation technologique et d'excellence computationnelle. Python, comme la lingua franca de mon odyssée numérique, avec sa syntaxe éloquente et sa sémantique dynamique, a été mon véhicule principal pour traverser les intrications de l'architecture logicielle et de la conception algorithmique. S'inspirant de luminaires tels que Steve Wozniak, célèbre pour ses avancées pionnières dans l'innovation pratique, et Steve Jobs, célébré pour sa maîtrise visionnaire de l'entrepreneuriat technologique, mon voyage reflète une symbiose de compétence technique et de romantisme.`,
    currentlyOn: "Entreprises Actuelles",
    activities: `Je suis passionnément engagé dans l'exploration de paradigmes émergents et dans le démêlage des mystères algorithmiques. Mon parcours s'étend du développement web, avec l'utilisation de frameworks tels que Flask, à l'approfondissement dans les domaines de la science des données grâce à des bibliothèques comme NumPy, Pandas et TensorFlow. Au-delà de ces domaines, je suis désireux d'étendre mes efforts vers le cloud computing, avec l'objectif d'utiliser des plateformes comme Heroku pour architecturer des applications web scalables et résilientes. Dans le domaine du DevOps, j'emploierai à l'avenir des outils tels que Docker, Kubernetes et Jenkins pour l'intégration continue et le déploiement continu, garantissant une haute disponibilité et une livraison sans faille des applications. Mon intérêt pour la technologie blockchain et les applications décentralisées (dApps) m'inspire à explorer les contrats intelligents Ethereum et des plateformes comme Solana, dans le but de contribuer au paysage en évolution des transactions numériques sécurisées. En tant que nouveau membre de la communauté open-source, je m'engage à contribuer à des projets qui favorisent l'innovation, partageant des connaissances et collaborant sur des solutions qui repoussent les limites de la technologie.`,
    githubInsights: "🚀",
    topLanguages: "Lexiques Dominants",
    githubStats: "Analyses Statistiques",
    connect: "Établir le Contact",
    leisureContact: "Intérêts & Loisirs",
    professionalContact: "Liaison Professionnelle",
    reachOut:
      "Désirant participer à des discussions portant sur des concepts Python avancés, des intrications algorithmiques ou enthousiaste pour des ventures collaboratives ? N'hésitez pas à entamer le contact via courrier électronique ou à travers les canaux des plateformes de médias sociaux.",
    year: `© ${new Date().getFullYear()} Portfolio de Kevin Marville`,
  },
};

let currentLanguage = "en"; // Default language set to English

function toggleLanguage() {
  currentLanguage = currentLanguage === "en" ? "fr" : "en";
  const a = document.getElementById("language-switch");
  a.classList.toggle("active");

  // const iconElement = button.querySelector(".language-icon");
  // const textElement = button.querySelector(".language-text");

  iconElement.textContent = currentLanguage === "en" ? "💻" : "💡";
  textElement.textContent = techLanguageContent[currentLanguage].switchTo;
  console.log(
    `Language set to ${currentLanguage === "en" ? "English" : "French"}.`
  );
  updateContent();
}

// Assuming the existing techLanguageContent and currentLanguage variables are defined globally as shown

// This function is designed to be more generic, avoiding direct manipulation within the toggle function
function updateLanguage(lang) {
  currentLanguage = lang; // Update the current language based on the passed argument
  updatePageContent(); // Call the function to update the page content according to the new language
  console.log(`Language set to ${lang}.`); // Log the language change for debugging
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
