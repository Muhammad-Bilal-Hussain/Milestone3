// dynamicScript.ts
// Get the form and listen for the submit event
var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission behavior
    // Collect data from form inputs
    var name = document.getElementById('name').value;
    var contact = document.getElementById('contact').value;
    var email = document.getElementById('email').value;
    var about = document.getElementById('about').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var experience = document.getElementById('experience').value;
    // Create an object to store form data
    var formData = {
        name: name,
        contact: contact,
        email: email,
        about: about,
        education: education,
        skills: skills,
        experience: experience
    };
    // Save form data to localStorage to share across pages
    localStorage.setItem('resumeData', JSON.stringify(formData));
    // Redirect to a new page to display the resume
    window.location.href = 'index1.html'; // Change to the output page
});
