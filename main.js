const container = document.querySelector('.container');
const slider = document.querySelector('.slider');

slider.style.display = 'none';

function PlayClick() {
    var audio = new Audio('Y2mate.mx - Vigilante Crusade (192 kbps).mp3');
    audio.play();
    audio.loop = true;
    audio.volume = 0.5;

    container.style.display = 'none';
    slider.style.display = 'grid';
}

document.addEventListener('keydown', function(event) {
    if (event.code == 'ArrowRight') {
        showSlides(slideIndex += 1);
       
    }
    if (event.code == 'ArrowLeft') {
        showSlides(slideIndex -= 1);
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function showSlides(n) {
    let slides = document.getElementsByClassName("item");

    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    for (let slide of slides) {
        slide.style.display = "none";
    }

    slides[slideIndex - 1].style.display = "grid";    
}