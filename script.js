
// Ensure the first section is visible when the page loads
window.addEventListener('load', () => {
    const firstSection = document.querySelector('section');
    if (firstSection) {
        firstSection.classList.add('show');
    }
});

// Efekty při scrollování
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 150) {
            section.classList.add('show');
        }
    });
});

// JavaScript for toggling the menu on mobile
function toggleMenu() {
    const menu = document.getElementById('menu');
    const toggle = document.querySelector('.menu-toggle');
    menu.classList.toggle('active');  // Toggle the menu visibility
    toggle.classList.toggle('active');  // Optionally add some style to the icon
}

document.getElementById("contact-icon").addEventListener("click", function () {
    const contactDetails = document.getElementById("contact-details");
    // Toggle visibility of the contact details
    if (contactDetails.style.display === "block") {
        contactDetails.style.display = "none";
    } else {
        contactDetails.style.display = "block";
    }
});




