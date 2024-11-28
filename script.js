
// Ensure the first two sections are visible when the page loads
// window.addEventListener('load', () => {
//     const sections = document.querySelectorAll('section');
//     if (sections.length > 0) {
//         sections[0].classList.add('show');
//     }
//     if (sections.length > 1) {
//         sections[1].classList.add('show');
//     }
// });
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    if (sections.length > 0) {
        sections[0].classList.add('show');
    }
    if (sections.length > 1) {
        sections[1].classList.add('show');
    }
});


// Efekty při scrollování
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 25) {
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

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});


// Ukázat nebo skrýt tlačítko podle pozice stránky
window.addEventListener('scroll', () => {
    const backToTop = document.getElementById('back-to-top');
    if (window.scrollY > 200) { // Zobrazit tlačítko po scrollnutí dolů o 200px
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

// Posunout stránku zpět nahoru
document.getElementById('back-to-top').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});



