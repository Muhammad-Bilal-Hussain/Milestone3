// resumeScript.ts
// Retrieve data from localStorage
var resumeData = JSON.parse(localStorage.getItem('resumeData') || '{}');
// Get the element where the resume will be displayed
var resumeContent = document.getElementById('resumeContent');
// Display the data if it exists
if (resumeData) {
    resumeContent.innerHTML = "\n    <p><strong>Name:</strong> ".concat(resumeData.name, "</p>\n    <p><strong>Contact:</strong> ").concat(resumeData.contact, "</p>\n    <p><strong>Email:</strong> ").concat(resumeData.email, "</p>\n    <p><div class=\"resumeheading\">About:</div><br> ").concat(resumeData.about.replace(/\n/g, '<br>'), "</p>\n    <p><div class=\"resumeheading\">Education:</div><br> ").concat(resumeData.education.replace(/\n/g, '<br>'), "</p>\n    <p><div class=\"resumeheading\">Skills:</div><br> ").concat(resumeData.skills.replace(/\n/g, '<br>'), "</p>\n    <p><div class=\"resumeheading\">Experience:</div><br>").concat(resumeData.experience.replace(/\n/g, '<br>'), "</p>\n  ");
}
