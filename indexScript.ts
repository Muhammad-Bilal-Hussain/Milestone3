// dynamicScript.ts

// Get the form and listen for the submit event
const form = document.querySelector('form') as HTMLFormElement;

form.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // Prevent default form submission behavior

  // Collect data from form inputs
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const contact = (document.getElementById('contact') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const about = (document.getElementById('about') as HTMLTextAreaElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;

  // Create an object to store form data
  const formData = {
    name,
    contact,
    email,
    about,
    education,
    skills,
    experience
  };

  // Save form data to localStorage to share across pages
  localStorage.setItem('resumeData', JSON.stringify(formData));

  // Redirect to a new page to display the resume
  window.location.href = 'resumeOutput.html'; // Change to the output page
});
