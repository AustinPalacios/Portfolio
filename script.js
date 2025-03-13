// Smooth Scroll for Anchor Links
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href^="#"]'); // Find all anchor links

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor click behavior
            const targetId = link.getAttribute('href').substring(1); // Get the target ID
            const targetElement = document.getElementById(targetId); // Find the target element

            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth' // Smooth scroll effect
            });
        });
    });
});

// Toggle Navigation Menu for Mobile (Hamburger Menu)
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('open'); // Toggle the 'open' class on the navigation menu
});

// Simple Form Validation (Example for a Contact Form)
document.getElementById('contact-form').addEventListener('submit', (event) => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name.trim() === '' || email.trim() === '') {
        event.preventDefault(); // Prevent form submission
        alert('Please fill in both your name and email.');
    }
});