function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

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

// Ensure the first section is visible when the page loads
window.addEventListener('load', () => {
    const firstSection = document.querySelector('section');
    if (firstSection) {
        firstSection.classList.add('show');
    }
});
