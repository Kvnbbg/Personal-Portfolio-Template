// Define an object to store language-specific content
const languageContent = {
  en: {
    aboutMe: 'About Me',
    location: 'Location: France',
    languages: 'Languages: Good in French 🇫🇷 and English 🇬🇧',
    biography: 'As a passionate, m journey began in childhood when I started programming with friends, creating our first program in Visual Basic for batch file on Windows XP.',
    currentlyOn: 'Currently On 💡',
    activities: 'Additionally, I am actively contributing to the development of bookish-octo-invention, and seeking collaboration opportunities.',
    githubInsights: 'My GitHub Insights 📊',
    topLanguages: 'Top Languages',
    githubStats: 'GitHub Stats',
    connect: 'Connect 💻',
    reachOut: 'Feel free to reach out to me via email or social media. I\'m always open to new opportunities and collaborations.',
    year: `©  ${new Date().getFullYear()} Portfolio of /Kvnbbg - Kevin Marville`
  },
  fr: {
    aboutMe: 'À propos de moi',
    location: 'Localisation : France',
    languages: 'Langues : Bon en Français 🇫🇷 et en Anglais 🇬🇧',
    biography: 'Passioné, mon parcours a commencé dans l\'enfance lorsque j\'ai commencé à programmer avec des amis, créant notre premier programme en Visual Basic pour fichier batch sur Windows XP.',
    currentlyOn: 'Actuellement en 💡',
    activities: 'De plus, je contribue activement au développement de bookish-octo-invention, et je cherche des opportunités de collaboration.',
    githubInsights: 'Mes statistiques GitHub 📊',
    topLanguages: 'Langages les plus utilisés',
    githubStats: 'Statistiques GitHub',
    connect: 'Connectez-vous 💻',
    reachOut: 'N\'hésitez pas à me contacter par e-mail ou sur les réseaux sociaux. Je suis toujours ouvert à de nouvelles opportunités et collaborations.',
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
      iconElement.textContent = "🇫🇷";
      textElement.textContent = "Switch to French";
      console.log("Switched to French");
  } else {
      // Set language to English
      iconElement.textContent = "🇬🇧";
      textElement.textContent = "Switch to English";
      console.log("Switched to English");
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
