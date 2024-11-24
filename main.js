var currentIndex = 0;
var slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

function playSlides() {
    if (document.getElementById('play').textContent === 'Play') {
        document.getElementById('play').textContent = 'Pause';
        slideInterval = setInterval(nextSlide, 1000);
    } else {
        document.getElementById('play').textContent = 'Play';
        clearInterval(slideInterval);
    }
}

function stopSlides() {
    clearInterval(slideInterval);
    document.getElementById('play').textContent = 'Play';
    currentIndex = 0;
    showSlide(currentIndex);
}

document.getElementById('prev').addEventListener('click', prevSlide);
document.getElementById('next').addEventListener('click', nextSlide);
document.getElementById('play').addEventListener('click', playSlides);
document.getElementById('stop').addEventListener('click', stopSlides);

showSlide(currentIndex);
