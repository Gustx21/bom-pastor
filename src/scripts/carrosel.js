// This script is used to show a carousel of images with next and previous buttons.

const slides = document.querySelectorAll('.overlay');
let currentSlide = 0;
let carouselInterval;
showSlide(currentSlide);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    showSlide((currentSlide + 1) % slides.length);
}

function startCarousel() {
    carouselInterval = setInterval(nextSlide, 7000);
}

function stopCarousel() {
    clearInterval(carouselInterval);
}

if (slides.length) {
    startCarousel();
    nextSlide();
} else {
    stopCarousel();
}