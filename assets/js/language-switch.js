// Object storing professionally tailored language-specific content
const languageContent = {
  en: {
    aboutMe: 'Professional Overview',
    location: 'Location: Strategically Based in France',
    languages: 'Languages: Proficient in French and English',
    switchTo: 'French Translation Available',
    biography: 'Embarking on a technological odyssey from a young age, I have transformed my early curiosity into a profound professional passion. My inaugural project, a Visual Basic script on Windows XP, laid the groundwork for a career characterized by continuous learning, innovation, and a commitment to excellence. Today, I leverage my extensive experience to develop solutions that merge creativity with technology, driving progress in the digital landscape.',
    currentlyOn: 'Current Endeavors 💡',
    activities: 'With an unwavering focus on the future, I am currently engaged in pioneering projects that challenge the status quo and set new benchmarks in technology. My approach is holistic, integrating cross-disciplinary expertise to foster innovation and deliver impactful results.',
    githubInsights: 'GitHub Insights 📊',
    topLanguages: 'Primary Programming Languages',
    githubStats: 'GitHub Performance Metrics',
    connect: 'Connect with Me 💻',
    leisureContact: 'Interests Beyond Coding',
    professionalContact: 'Professional Inquiries',
    reachOut: 'I welcome discussions on technological advancements, potential collaborations, or any professional inquiries. Please feel free to contact me via email or connect on social media platforms.',
    year: `© ${new Date().getFullYear()} - Kevin Marville's Portfolio`
  },
  fr: {
    aboutMe: 'Aperçu Professionnel',
    location: 'Localisation : Stratégiquement basé en France',
    languages: 'Langues : Maîtrise du Français et de l\'Anglais',
    switchTo: 'Traduction en Anglais Disponible',
    biography: 'Lancé dans une odyssée technologique dès mon plus jeune âge, j\'ai transformé ma curiosité initiale en une passion professionnelle profonde. Mon premier projet, un script Visual Basic sous Windows XP, a jeté les bases d\'une carrière caractérisée par un apprentissage continu, l\'innovation et un engagement envers l\'excellence. Aujourd\'hui, je mets à profit mon expérience étendue pour développer des solutions qui fusionnent créativité et technologie, stimulant le progrès dans le paysage numérique.',
    currentlyOn: 'Projets Actuels 💡',
    activities: 'Avec un focus inébranlable sur l\'avenir, je suis actuellement engagé dans des projets pionniers qui remettent en question le statu quo et établissent de nouveaux repères technologiques. Mon approche est holistique, intégrant une expertise interdisciplinaire pour favoriser l\'innovation et fournir des résultats impactants.',
    githubInsights: 'Aperçus GitHub 📊',
    topLanguages: 'Langages de Programmation Principaux',
    githubStats: 'Métriques de Performance GitHub',
    connect: 'Se Connecter 💻',
    leisureContact: 'Intérêts au-delà du Codage',
    professionalContact: 'Demandes Professionnelles',
    reachOut: 'Je suis ouvert aux discussions sur les avancées technologiques, les collaborations potentielles ou toute demande professionnelle. N\'hésitez pas à me contacter par e-mail ou à vous connecter sur les plateformes de réseaux sociaux.',
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
