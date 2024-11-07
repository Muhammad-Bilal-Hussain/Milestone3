// Retrieve resume data from localStorage and parse it to an object
var resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
// Utility function to get an HTML element by ID with specific type
function getElementById(id) {
    var element = document.getElementById(id);
    if (!element)
        throw new Error("Element with ID '".concat(id, "' not found."));
    return element;
}
// Retrieve the image data URL from localStorage
var imageDataURL = localStorage.getItem('selectedImage');
var displayImage = document.getElementById('displayImage');
if (imageDataURL) {
    displayImage.src = imageDataURL;
    displayImage.style.display = 'block'; // Make image visible
}
// Display data in respective HTML elements
getElementById('displayName').textContent = resumeData.name;
getElementById('displayContact').textContent = "Contact: " + resumeData.contact;
getElementById('displayEmail').textContent = "Email: " + resumeData.email;
getElementById('displayAbout').textContent = resumeData.about;
// Education section: show each entry in a styled format
var educationContainer = getElementById('displayEducation');
resumeData.education.split('\n').forEach(function (edu) {
    var eduElement = document.createElement('p');
    eduElement.style.textAlign = 'left';
    eduElement.innerHTML = edu + "<hr>";
    educationContainer.appendChild(eduElement);
});
// Skills section: show each entry in a styled format if present
var skillContainer = getElementById('displaySkillsContainer');
// Get non-empty skills, then add them with <hr> only between entries
var skills = resumeData.skills.split('\n').forEach(function (skl) {
    var skillElement = document.createElement('li');
    skillElement.innerHTML = skl.trim();
    // skillElement.outerText = skl.trim();
    skillContainer.appendChild(skillElement);
});
// Language section: show each entry in a styled format if present
var languageContainer = getElementById('displayLanguageContainer');
// Get non-empty skills, then add them with <hr> only between entries
var language = resumeData.language.split('\n').forEach(function (lan) {
    var languageElement = document.createElement('li');
    languageElement.innerHTML = lan.trim();
    languageContainer.appendChild(languageElement);
});
// Experience section: show each entry in a styled format
var expContainer = getElementById('displayExperience');
resumeData.experience.split('\n').forEach(function (exp) {
    var expElement = document.createElement('p');
    expElement.style.textAlign = 'left';
    expElement.innerHTML = exp + "<hr>";
    expContainer.appendChild(expElement);
});
