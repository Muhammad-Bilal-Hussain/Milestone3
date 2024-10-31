var addMoreEducationButton = document.getElementById('addMoreEducation');
var addMoreSkillsButton = document.getElementById('addMoreSkills');
var addMoreExperienceButton = document.getElementById('addMoreExperience');
var educationFieldsContainer = document.getElementById('educationFields');
var skillsFieldsContainer = document.getElementById('skillsFields');
var experienceFieldsContainer = document.getElementById('experienceFields');
// Function to create new field and delete button
function createNewField(container, placeholder) {
    var newField = document.createElement('input');
    var fieldWrapper = document.createElement('div');
    var delBtn = document.createElement('button');
    newField.type = 'text';
    newField.style.marginTop = '10px';
    newField.placeholder = placeholder;
    newField.required = false;
    delBtn.innerText = 'Delete';
    delBtn.style.marginLeft = '10px';
    delBtn.addEventListener('click', function () {
        container.removeChild(fieldWrapper);
    });
    fieldWrapper.appendChild(newField);
    fieldWrapper.appendChild(delBtn);
    container.appendChild(fieldWrapper);
}
// Event listeners for adding new fields
addMoreEducationButton.addEventListener('click', function () { return createNewField(educationFieldsContainer, 'Enter Next Education'); });
addMoreSkillsButton.addEventListener('click', function () { return createNewField(skillsFieldsContainer, 'Enter Next Skill'); });
addMoreExperienceButton.addEventListener('click', function () { return createNewField(experienceFieldsContainer, 'Enter Next Experience'); });
// Form submission and data collection
var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var about = document.getElementById('about').value;
    var collectInputValues = function (container) {
        var inputs = container.getElementsByTagName('input');
        var values = '';
        for (var i = 0; i < inputs.length; i++) {
            values += inputs[i].value + '\n <hr>';
        }
        return values;
    };
    var education = collectInputValues(educationFieldsContainer);
    var skills = collectInputValues(skillsFieldsContainer);
    var experience = collectInputValues(experienceFieldsContainer);
    var formData = {
        name: name,
        contact: contact,
        email: email,
        about: about,
        education: education,
        skills: skills,
        experience: experience
    };
    localStorage.setItem('resumeData', JSON.stringify(formData));
    window.location.href = 'index1.html';
});
