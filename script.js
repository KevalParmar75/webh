let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

// Event listeners for manual navigation
document.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    showSlide(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
});

// Function for automatic sliding
function autoSlide() {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    showSlide(currentIndex);
}

// Set interval for automatic sliding (every 3 seconds)
let autoSlideInterval = setInterval(autoSlide, 3000);

// Pause on hover
const carousel = document.querySelector('.carousel');
carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
carousel.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(autoSlide, 3000);
});

// Keyboard navigation
document.addEventListener('keydown', (event) => {
    if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
        showSlide(currentIndex);
    } else if (event.key === "ArrowRight") {
        currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }
});

// Initial display
showSlide(currentIndex);

// Reveal on scroll functionality
document.addEventListener('DOMContentLoaded', function () {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        reveals.forEach(reveal => {
            const elementTop = reveal.getBoundingClientRect().top;

            // Check if the element is in the viewport
            if (elementTop < windowHeight - 50) { // Adjust 50 to fine-tune when it reveals
                reveal.classList.add('active');
            } else {
                reveal.classList.remove('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Call it once to check on load
});

// Hamburger menu functionality
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    const sidePanel = document.getElementById('side-panel');
    if (sidePanel.classList.contains('open')) {
        sidePanel.classList.remove('open');
    } else {
        sidePanel.classList.add('open');
    }
});
