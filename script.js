let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

function openLetter() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('letter').style.display = 'block';
    showSlide(0);
}

function showLove(element) {
    const hearts = document.getElementById('hearts');
    for (let i = 0; i < 10; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart-fall';
        heart.innerHTML = '❤️';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.animationDelay = Math.random() * 2 + 's';
        hearts.appendChild(heart);
        setTimeout(() => heart.remove(), 3000);
    }
    alert('Aku cinta kamu lebih dari segalanya! 💕');
    element.style.animation = 'fadeOut 1s forwards';
    setTimeout(() => {
        element.parentElement.innerHTML = 'I <span class="clickable" onclick="showLove(this)">love</span> you sayang <span class="heart">💖</span>';
    }, 1000);
}