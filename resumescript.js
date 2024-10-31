// Retrieve resume data from localStorage and parse it to an object
var resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
// Utility function to get an HTML element by ID with specific type
function getElementById(id) {
    var element = document.getElementById(id);
    if (!element)
        throw new Error("Element with ID '".concat(id, "' not found."));
    return element;
}
// Display data in respective HTML elements
getElementById('displayName').textContent = resumeData.name;
getElementById('displayContact').textContent = "Contact: " + resumeData.contact;
getElementById('displayEmail').textContent = "Email: " + resumeData.email;
getElementById('displayAbout').textContent = resumeData.about;
// getElementById<HTMLParagraphElement>('displaySkils').textContent = resumeData.skills;
// Education section: show each entry in a styled format
var educationContainer = getElementById('displayEducation');
resumeData.education.split('\n').forEach(function (edu) {
    var eduElement = document.createElement('p');
    eduElement.style.textAlign = 'left';
    eduElement.innerHTML = edu + "<hr>";
    educationContainer.appendChild(eduElement);
});
// skills section: show each entry in a styled format
var skillContainer = getElementById('displaySkils');
resumeData.skills.split('\n').forEach(function (skl) {
    var skillElement = document.createElement('p');
    skillElement.style.textAlign = 'left';
    skillElement.innerHTML = skl + "<hr>";
    skillContainer.appendChild(skillElement);
});
// Education section: show each entry in a styled format
var expContainer = getElementById('displayExperience');
resumeData.experience.split('\n').forEach(function (exp) {
    var expElement = document.createElement('p');
    expElement.style.textAlign = 'left';
    expElement.innerHTML = exp + "<hr>";
    expContainer.appendChild(expElement);
});
// getElementById<HTMLParagraphElement>('displayExperience').textContent = resumeData.experience;
