// Retrieve resume data from localStorage and parse it to an object
const resumeData: {
  name: string;
  contact: string;
  email: string;
  about: string;
  education: string;
  skills: string;
  language: string;
  experience: string;
} = JSON.parse(localStorage.getItem('resumeData') || '{}');

// Utility function to get an HTML element by ID with specific type
function getElementById<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Element with ID '${id}' not found.`);
  return element as T;
}

// Retrieve the image data URL from localStorage
const imageDataURL = localStorage.getItem('selectedImage');
const displayImage = document.getElementById('displayImage') as HTMLImageElement;

if (imageDataURL) {
    displayImage.src = imageDataURL;
    displayImage.style.display = 'block'; // Make image visible
}


// Display data in respective HTML elements
getElementById<HTMLHeadingElement>('displayName').textContent = resumeData.name;
getElementById<HTMLParagraphElement>('displayContact').textContent = "Contact: " + resumeData.contact;
getElementById<HTMLParagraphElement>('displayEmail').textContent = "Email: " + resumeData.email;
getElementById<HTMLParagraphElement>('displayAbout').textContent = resumeData.about;

// Education section: show each entry in a styled format
const educationContainer = getElementById<HTMLDivElement>('displayEducation');
resumeData.education.split('\n').forEach((edu: string) => {
  const eduElement = document.createElement('p');
  eduElement.style.textAlign = 'left';
  eduElement.innerHTML = edu + "<hr>";
  educationContainer.appendChild(eduElement);
});
// Skills section: show each entry in a styled format if present
const skillContainer = getElementById<HTMLUListElement>('displaySkillsContainer');

// Get non-empty skills, then add them with <hr> only between entries
const skills = resumeData.skills.split('\n').forEach((skl: string) => {
  const skillElement = document.createElement('li');
  skillElement.innerHTML = skl.trim();
  // skillElement.outerText = skl.trim();
  skillContainer.appendChild(skillElement);
});
// Language section: show each entry in a styled format if present
const languageContainer = getElementById<HTMLUListElement>('displayLanguageContainer');

// Get non-empty skills, then add them with <hr> only between entries
const language = resumeData.language.split('\n').forEach((lan: string) => {
  const languageElement = document.createElement('li');
  languageElement.innerHTML = lan.trim();
  languageContainer.appendChild(languageElement);
});

// Experience section: show each entry in a styled format
const expContainer = getElementById<HTMLDivElement>('displayExperience');
resumeData.experience.split('\n').forEach((exp: string) => {
  const expElement = document.createElement('p');
  expElement.style.textAlign = 'left';
  expElement.innerHTML = exp + "<hr>";
  expContainer.appendChild(expElement);
});

