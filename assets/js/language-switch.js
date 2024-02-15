// Define an object to store language-specific content
const languageContent = {
  en: {
    aboutMe: 'About Me',
    location: 'Location: France',
    languages: 'Languages: Good in French and English',
    switchTo: 'Traduction en Français disponible!',
    biography: 'Passionate, my journey began in childhood when I started programming with friends, creating our first script in Visual Basic .batch file on Windows XP.',
    currentlyOn: 'Currently On 💡',
    activities: 'Attentive to new opportunities and collaborations, I am contributing.',
    githubInsights: 'My GitHub Insights 📊',
    topLanguages: 'Top Languages',
    githubStats: 'GitHub Stats',
    connect: 'Connect 💻',
    leisureContact: 'My Leisure',
    professionalContact: 'Professional Contact',
    reachOut: 'Feel free to reach out to me via email or social media.',
    year: `©  ${new Date().getFullYear()} Portfolio of /Kvnbbg - Kevin Marville`
  },
  fr: {
    aboutMe: 'À propos de moi',
    location: 'Localisation : France',
    languages: 'Langues : Bon en Français et en Anglais',
    switchTo: 'Switch to English available!',
    biography: 'Passionné, mon parcours commence dans l\'enfance, avec des amis, créant notre premier script Visual Basic en .batch sur Windows XP.',
    currentlyOn: 'En ce moment 💡',
    activities: 'Attentif à de nouvelles opportunités et collaborations, je contribue.',
    githubInsights: 'Mes statistiques GitHub 📊',
    topLanguages: 'Les langages que j\'utilise le plus sont:',
    githubStats: 'Statistiques GitHub',
    connect: 'Se connecter à moi 💻',
    leisureContact: 'Mes Loisirs',
    professionalContact: 'Contact Pro',
    reachOut: 'N\'hésitez pas à me contacter par e-mail ou sur les réseaux sociaux.',
    year: `© ${new Date().getFullYear()} Portfolio de /Kvnbbg - Kevin Marville`
  }
};
// Set the default language to English
let currentLanguage = 'en';

function toggleLanguage() {
  // Toggle between English and French
  currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';

  // Get the button element
  var button = document.getElementById("language-switch");

  // Toggle the 'active' class
  button.classList.toggle("active");

  // Get the language icon and text elements
  var iconElement = button.querySelector(".language-icon");
  var textElement = button.querySelector(".language-text");

  // Check if the button is active to determine the language
  if (button.classList.contains("active")) {
      // Set language to French
      iconElement.textContent = "🇬🇧🇺🇸🇨🇦";
      textElement.textContent = 
      "Switch to English";
      console.log("Switched to French!");
  } else {
      // Set language to English
      iconElement.textContent = "🇫🇷🇨🇦";
      textElement.textContent = "Passer en Français";
      console.log("Switched to English!");
  }
  updateContent();
}

function updateContent() {
  // Get all elements with a data-lang attribute
  const elementsToUpdate = document.querySelectorAll('[data-lang]');

  // Update the content based on the current language
  elementsToUpdate.forEach(element => {
    const key = element.dataset.lang;
    if (languageContent[currentLanguage][key]) {
      element.textContent = languageContent[currentLanguage][key];
    }
  });
}
// Initial content update on page load
updateContent();

// Cybermalveillance
    function improveMessage() {
        var importantMessage = document.getElementById("importantMessage");
        importantMessage.style.display = "none";
    }
