const techLanguageContent = {
  en: {
    aboutMe: 'Developer Profile',
    location: 'Geographical Node: France',
    languages: 'Programming Dialects: Fluent in Python and JavaScript',
    switchTo: 'Initiate Communication, via the Chat Interface!',
    biography: `Initiating from a vector of relentless inquisitiveness and steadfast ardor, my trajectory in the digital sphere ignited with the concoction of elementary Python scripts. This nascent spark has since evolved into an unswerving expedition in quest of technological innovation and computational excellence. Python, as the lingua franca of my digital odyssey, with its eloquent syntax and dynamic semantics, has been my primary vehicle for traversing the intricacies of software architecture and algorithmic design. Drawing sustenance from luminaries like Steve Wozniak, heralded for his pioneering strides in hands-on innovation, and Steve Jobs, celebrated for his visionary prowess in technological entrepreneurship, my voyage mirrors a symbiosis of technical prowess and romanticism.`,
    currentlyOn: 'Ongoing Endeavors',
    activities: 'Engaged fervently in the exploration of emergent paradigms and the unraveling of algorithmic enigmas, my pursuits span the spectrum from web development, leveraging frameworks like Flask, to delving deep into the realms of data science, harnessing the power of libraries such as NumPy, Pandas, and TensorFlow.',
    githubInsights: '🚀',
    topLanguages: 'Dominant Lexicons',
    githubStats: 'Statistical Analyses',
    connect: 'Establish Contact',
    leisureContact: 'Interests & Avocations',
    professionalContact: 'Professional Liaison',
    reachOut: 'Desiring to partake in discussions pertaining to advanced Pythonic constructs, algorithmic intricacies, or eager for collaborative ventures? Do not hesitate to initiate contact via electronic mail or through the conduits of social media platforms.',
    year: `© ${new Date().getFullYear()} - Kevin Marville's Portfolio`
  },
  fr: {
    aboutMe: 'Profil de Développeur',
    location: 'Noeud Géographique : France',
    languages: 'Dialectes de Programmation : Maîtrise du Python et du JavaScript',
    switchTo: 'Entamer la Communication, via l\'Interface de Chat!',
    biography: `Émanant d'un vecteur d'insatiable curiosité et d'ardente passion, ma trajectoire dans la sphère numérique a pris son envol avec la conception de scripts Python élémentaires. Cette étincelle naissante a depuis évolué en une expédition inébranlable en quête d'innovation technologique et d'excellence computationnelle. Python, comme la lingua franca de mon odyssée numérique, avec sa syntaxe éloquente et sa sémantique dynamique, a été mon véhicule principal pour traverser les intrications de l'architecture logicielle et de la conception algorithmique. S'inspirant de luminaires tels que Steve Wozniak, célèbre pour ses avancées pionnières dans l'innovation pratique, et Steve Jobs, célébré pour sa maîtrise visionnaire de l'entrepreneuriat technologique, mon voyage reflète une symbiose de compétence technique et de romantisme.`,
    currentlyOn: 'Entreprises Actuelles',
    activities: 'Engagé ardemment dans l\'exploration de paradigmes émergents et le dévoilement d\'énigmes algorithmiques, mes activités couvrent le spectre du développement web, en tirant parti de framework tel que Flask, à l\'exploration des domaines de la science des données, en exploitant la puissance de bibliothèques telles que NumPy, Pandas et TensorFlow.',
    githubInsights: '🚀',
    topLanguages: 'Lexiques Dominants',
    githubStats: 'Analyses Statistiques',
    connect: 'Établir le Contact',
    leisureContact: 'Intérêts & Loisirs',
    professionalContact: 'Liaison Professionnelle',
    reachOut: 'Désirant participer à des discussions portant sur des concepts Python avancés, des intrications algorithmiques ou enthousiaste pour des ventures collaboratives ? N\'hésitez pas à entamer le contact via courrier électronique ou à travers les canaux des plateformes de médias sociaux.',
    year: `© ${new Date().getFullYear()} Portfolio de Kevin Marville`
  },
}

let currentLanguage = 'en'; // Default language set to English

function toggleLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'fr' : 'en';
  const button = document.getElementById("language-switch");
  button.classList.toggle("active");

  const iconElement = button.querySelector(".language-icon");
  const textElement = button.querySelector(".language-text");

  iconElement.textContent = currentLanguage === 'en' ? "💻" : "💡";
  textElement.textContent = techLanguageContent[currentLanguage].switchTo;
  console.log(`Language set to ${currentLanguage === 'en' ? 'English' : 'French'}.`);
  updateContent();
}

function updateContent() {
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.dataset.lang;
    element.textContent = techLanguageContent[currentLanguage][key];
  });
}

document.addEventListener('DOMContentLoaded', updateContent);

function improveMessage() {
  document.getElementById("importantMessage").style.display = "none";
}
