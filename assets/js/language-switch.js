// Object storing language-specific content tailored for a student's portfolio
const languageContent = {
  en: {
    aboutMe: 'About Me',
    location: 'Location: France',
    languages: 'Languages: Fluent in French and English',
    switchTo: 'Switch to French',
    biography: 'A journey from curiosity to passion, my adventure in technology started with creating simple scripts and has evolved into a pursuit of innovation and excellence. As a student, I am continuously expanding my knowledge and skills, aiming to contribute significantly to the tech industry.',
    currentlyOn: 'Current Projects',
    activities: 'Actively engaging in academic projects and personal exploration of new technologies, I am always on the lookout for opportunities to apply my learning in real-world scenarios.',
    githubInsights: 'GitHub Insights',
    topLanguages: 'Top Languages',
    githubStats: 'GitHub Stats',
    connect: 'Connect With Me',
    leisureContact: 'Hobbies & Interests',
    professionalContact: 'Professional Contact',
    reachOut: 'Interested in discussing technology, potential projects, or just want to say hi? Feel free to reach out via email or connect with me on social media.',
    year: `© ${new Date().getFullYear()} - Kevin Marville's Portfolio`
  },
  fr: {
    aboutMe: 'À Propos',
    location: 'Localisation : France',
    languages: 'Langues : Français et Anglais courants',
    switchTo: 'Switch to English',
    biography: 'D\'une curiosité à une passion, mon aventure technologique a commencé par la création de scripts simples et s\'est évoluée vers une quête d\'innovation et d\'excellence. En tant qu\'étudiant, je continue d\'élargir mes connaissances et compétences, visant à apporter une contribution significative à l\'industrie technologique.',
    currentlyOn: 'Projets Actuels',
    activities: 'Engagé activement dans des projets académiques et l\'exploration personnelle de nouvelles technologies, je suis constamment à la recherche d\'opportunités pour appliquer mon apprentissage dans des scénarios du monde réel.',
    githubInsights: 'Aperçus GitHub',
    topLanguages: 'Langages Principaux',
    githubStats: 'Statistiques GitHub',
    connect: 'Me Contacter',
    leisureContact: 'Loisirs & Intérêts',
    professionalContact: 'Contact Professionnel',
    reachOut: 'Intéressé par une discussion sur la technologie, des projets potentiels, ou juste envie de dire bonjour ? N\'hésitez pas à me contacter par e-mail ou à vous connecter avec moi sur les réseaux sociaux.',
    year: `© ${new Date().getFullYear()} - Portfolio de Kevin Marville`
  }
};

let currentLanguage = 'en'; // Default language set to English

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  const button = document.getElementById("language-switch");
  button.classList.toggle("active");

  const iconElement = button.querySelector(".language-icon");
  const textElement = button.querySelector(".language-text");

  iconElement.textContent = currentLanguage === 'en' ? "🇫🇷" : "🇬🇧";
  textElement.textContent = languageContent[currentLanguage].switchTo;
  console.log(`Language set to ${currentLanguage === 'en' ? 'English' : 'French'}.`);
  updateContent();
}

function updateContent() {
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.dataset.lang;
    element.textContent = languageContent[currentLanguage][key];
  });
}

document.addEventListener('DOMContentLoaded', updateContent);

function improveMessage() {
  document.getElementById("importantMessage").style.display = "none";
}
