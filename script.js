// Function to toggle navigation menu on mobile
function toggleMenu() {
    var navLinks = document.querySelector('.navigation-links');
    navLinks.classList.toggle('show');
}

// Function to trigger animation when section becomes visible
function animateSection(sectionId, animationClass) {
    const section = document.querySelector(sectionId);
    if (section) {
        section.classList.add(animationClass);
    }
}

// Function to handle smooth scrolling and animation
function scrollToSection(sectionId, animationClass = '') {
    const section = document.querySelector(sectionId);
    if (section) {
        if (animationClass) {
            section.scrollIntoView({ behavior: 'smooth' });
            setTimeout(() => {
                animateSection(sectionId, animationClass);
            }, 500); // Adjust the delay to match the scroll duration
        } else {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {






    const navigationLinks = document.querySelectorAll('.link-item');
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href'); // Get the target section id
            scrollToSection(targetId, 'animate-left'); // Call scrollToSection function with animation
        });
    });
    
    
    const contactButton = document.querySelector('.contact-button');
    contactButton.addEventListener('click', function() {
        const targetId = '#contact';
        scrollToSection(targetId, 'animate-right');
    });


});
