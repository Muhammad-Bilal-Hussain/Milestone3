// Retrieve resume data from localStorage and parse it to an object
const resumeData: {
  name: string;
  contact: string;
  email: string;
  about: string;
  education: string;
  skills: string;
  experience: string;
} = JSON.parse(localStorage.getItem('resumeData') || '{}');

// Utility function to get an HTML element by ID with specific type
function getElementById<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) throw new Error(`Element with ID '${id}' not found.`);
  return element as T;
}

// Display data in respective HTML elements
getElementById<HTMLHeadingElement>('displayName').textContent = resumeData.name;
getElementById<HTMLParagraphElement>('displayContact').textContent = "Contact: " + resumeData.contact;
getElementById<HTMLParagraphElement>('displayEmail').textContent = "Email: " + resumeData.email;
getElementById<HTMLParagraphElement>('displayAbout').textContent = resumeData.about;
// getElementById<HTMLParagraphElement>('displaySkils').textContent = resumeData.skills;

// Education section: show each entry in a styled format
const educationContainer = getElementById<HTMLDivElement>('displayEducation');
resumeData.education.split('\n').forEach((edu: string) => {
  const eduElement = document.createElement('p');
  eduElement.style.textAlign = 'left';
  eduElement.innerHTML = edu + "<hr>";
  educationContainer.appendChild(eduElement);
});
// skills section: show each entry in a styled format
const skillContainer = getElementById<HTMLDivElement>('displaySkils');
resumeData.skills.split('\n').forEach((skl: string) => {
  const skillElement = document.createElement('p');
  skillElement.style.textAlign = 'left';
  skillElement.innerHTML = skl + "<hr>";
  skillContainer.appendChild(skillElement);
});
// Education section: show each entry in a styled format
const expContainer = getElementById<HTMLDivElement>('displayExperience');
resumeData.experience.split('\n').forEach((exp: string) => {
  const expElement = document.createElement('p');
  expElement.style.textAlign = 'left';
  expElement.innerHTML = exp + "<hr>";
  expContainer.appendChild(expElement);
});

// getElementById<HTMLParagraphElement>('displayExperience').textContent = resumeData.experience;
