// Define an object to store language-specific content
const languageContent = {
  en: {
    welcome: 'Welcome to my portfolio',
    aboutMe: 'About Me',
    location: 'Location: France',
    languages: 'Languages: Good in conversational French 🇫🇷 and English 🇬🇧',
    portfolio: 'Portfolio: Check out my Portfolio',
    certifications: 'Certifications',
    biography: 'My journey began in childhood when I started programming with friends, creating our first program in Visual Basic for batch file on Windows XP. Since then, my fascination with the intersection of art and technology has only grown. I am a self-taught programmer and I want programming for over 10 years. I am a passionate and I am always looking for new challenges and opportunities to learn new things.',
    currentlyOn: 'Currently On 💡',
    activities: 'Currently, I am working on enhancing my skills and exploring various programming languages. Additionally, I am actively contributing to the development of bookish-octo-invention, and seeking collaboration opportunities for AI integration in terminal systems.',
    githubInsights: 'My GitHub Insights 📊',
    topLanguages: 'Top Languages',
    githubStats: 'GitHub Stats',
    connect: 'Connect 💻',
    reachOut: 'Feel free to reach out to me via email or social media. I\'m always open to new opportunities and collaborations.',
    email: 'Email: kevinmarville@gmail.com',
    linkedin: 'Follow me on Linkedin',
    koFi: 'Support me on Ko-fi',
    soundCloud: 'Kvnbbg on SoundCloud',
    twitch: 'Follow me on Twitch',
    youtube: 'My YouTube Channel',
    twitter: 'Follow me on Twitter',
    year: `&copy; ${new Date().getFullYear()} Portfolio of /Kvnbbg - Kevin Marville`
  },
  fr: {
    welcome: 'Bienvenue sur mon portfolio',
    aboutMe: 'À propos de moi',
    location: 'Localisation : France',
    languages: 'Langues : Bonne compréhension du français 🇫🇷 et de l\'anglais 🇬🇧',
    portfolio: 'Portfolio : Découvrez mon portfolio',
    certifications: 'Certifications',
    biography: 'Mon parcours a commencé dans l\'enfance lorsque j\'ai commencé à programmer avec des amis, créant notre premier programme en Visual Basic pour fichier batch sur Windows XP. Depuis lors, ma fascination pour l\'intersection de l\'art et de la technologie n\'a fait que croître. Je suis un programmeur autodidacte et je veux programmer depuis plus de 10 ans. Je suis passionné et je suis toujours à la recherche de nouveaux défis et opportunités pour apprendre de nouvelles choses.',
    currentlyOn: 'Actuellement en 💡',
    activities: 'Actuellement, je travaille sur le renforcement de mes compétences et explore divers langages de programmation. De plus, je contribue activement au développement de bookish-octo-invention, et je cherche des opportunités de collaboration pour l\'intégration de l\'IA dans les systèmes de terminal.',
    githubInsights: 'Mes statistiques GitHub 📊',
    topLanguages: 'Langages les plus utilisés',
    githubStats: 'Statistiques GitHub',
    connect: 'Connectez-vous 💻',
    reachOut: 'N\'hésitez pas à me contacter par e-mail ou sur les réseaux sociaux. Je suis toujours ouvert à de nouvelles opportunités et collaborations.',
    email: 'Email : kevinmarville@gmail.com',
    linkedin: 'Suivez-moi sur Linkedin',
    koFi: 'Soutenez-moi sur Ko-fi',
    soundCloud: 'Kvnbbg sur SoundCloud',
    twitch: 'Suivez-moi sur Twitch',
    youtube: 'Ma chaîne YouTube',
    twitter: 'Suivez-moi sur Twitter',
    year: `&copy; ${new Date().getFullYear()} Portfolio de /Kvnbbg - Kevin Marville`
  }
};

// Set the default language to English
let currentLanguage = 'en';

function toggleLanguage() {
  // Toggle between English and French
  currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
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
