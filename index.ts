// Grab the elements from the DOM
const toggleSkillsBtn = document.getElementById('toggleSkillsBtn') as HTMLButtonElement;
const skillsSection = document.getElementById('skills-section') as HTMLElement;

// Set the initial visibility state of the skills section
let isSkillsVisible = true;

// Add a click event listener to the button to toggle the visibility of the skills section
toggleSkillsBtn.addEventListener('click', () => {
    if (isSkillsVisible) {
        skillsSection.style.display = 'none'; // Hide the section
        toggleSkillsBtn.textContent = 'Show Skills'; // Update button text
    } else {
        skillsSection.style.display = 'block'; // Show the section
        toggleSkillsBtn.textContent = 'Hide Skills'; // Update button text
    }

    // Toggle the state
    isSkillsVisible = !isSkillsVisible;
});
