// Typewriter Effect
const roles = ["Machine Learning Engineer", "Data Scientist", "NLP Specialist"];
let i = 0;
let j = 0;
let currentRole = '';
let isDeleting = false;

function typewriter() {
    const element = document.getElementById("typewriter");
    if (j < roles[i].length && !isDeleting) {
        currentRole += roles[i][j];
        j++;
    } else if (isDeleting && j > 0) {
        currentRole = currentRole.slice(0, -1);
        j--;
    } else {
        isDeleting = !isDeleting;
        i = (i + 1) % roles.length;
    }
    element.textContent = currentRole;
    setTimeout(typewriter, isDeleting ? 50 : 150);
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('.contact-form form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const email = form.querySelector('input[type="email"]').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address!');
        return;
    }
    alert('Message sent successfully!');
    form.reset();
});

// Start the typewriter effect when page loads
document.addEventListener('DOMContentLoaded', typewriter);