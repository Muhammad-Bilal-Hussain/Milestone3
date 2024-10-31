const addMoreEducationButton = document.getElementById('addMoreEducation') as HTMLButtonElement;
const addMoreSkillsButton = document.getElementById('addMoreSkills') as HTMLButtonElement;
const addMoreExperienceButton = document.getElementById('addMoreExperience') as HTMLButtonElement;

const educationFieldsContainer = document.getElementById('educationFields') as HTMLDivElement;
const skillsFieldsContainer = document.getElementById('skillsFields') as HTMLDivElement;
const experienceFieldsContainer = document.getElementById('experienceFields') as HTMLDivElement;

// Function to create new field and delete button
function createNewField(container: HTMLDivElement, placeholder: string) {
    const newField = document.createElement('input');
    const fieldWrapper = document.createElement('div');
    const delBtn = document.createElement('button');

    newField.type = 'text';
    newField.style.marginTop = '10px';
    newField.placeholder = placeholder;
    newField.required = false;

    delBtn.innerText = 'Delete';
    delBtn.style.marginLeft = '10px';
    delBtn.addEventListener('click', () => {
        container.removeChild(fieldWrapper);
    });

    fieldWrapper.appendChild(newField);
    fieldWrapper.appendChild(delBtn);
    container.appendChild(fieldWrapper);
}

// Event listeners for adding new fields
addMoreEducationButton.addEventListener('click', () => createNewField(educationFieldsContainer, 'Enter Next Education'));
addMoreSkillsButton.addEventListener('click', () => createNewField(skillsFieldsContainer, 'Enter Next Skill'));
addMoreExperienceButton.addEventListener('click', () => createNewField(experienceFieldsContainer, 'Enter Next Experience'));

// Form submission and data collection
const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', (event: Event) => {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const contact = (document.getElementById('contact') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const about = (document.getElementById('about') as HTMLTextAreaElement).value;

    const collectInputValues = (container: HTMLDivElement) => {
        const inputs = container.getElementsByTagName('input');
        let values = '';
        for (let i = 0; i < inputs.length; i++) {
            values += (inputs[i] as HTMLInputElement).value + '\n <hr>';
        }
        return values;
    };

    const education = collectInputValues(educationFieldsContainer);
    const skills = collectInputValues(skillsFieldsContainer);
    const experience = collectInputValues(experienceFieldsContainer);

    const formData = {
        name,
        contact,
        email,
        about,
        education,
        skills,
        experience
    };

    localStorage.setItem('resumeData', JSON.stringify(formData));
    window.location.href = 'index1.html';
});
