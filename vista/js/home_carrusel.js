const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');
const imagesContainer = document.querySelector('.imagen');
const totalImages = document.querySelectorAll('.img').length;
let currentIndex = 0;

nextButton.addEventListener('click', () => {
    if (currentIndex < totalImages - 3) { 
        currentIndex++;
        updateCarousel();
    }
});

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) { 
        currentIndex--;
        updateCarousel();
    }
});

function updateCarousel() {
    const offset = -currentIndex * (100 / 3); 
    imagesContainer.style.transform = `translateX(${offset}%)`;
    updateButtonStates(); 
}

function updateButtonStates() {
    if (currentIndex === 0) {
        prevButton.classList.add('disabled');
        prevButton.style.backgroundImage = "url('')"; 
    } else {
        prevButton.classList.remove('disabled');
        prevButton.style.backgroundImage = "url('./img/home/IzquierdaAzul.png')"; 
    }

    if (currentIndex >= totalImages - 3) {
        nextButton.classList.add('disabled');
        nextButton.style.backgroundImage = "url('')";
    } else {
        nextButton.classList.remove('disabled');
        nextButton.style.backgroundImage = "url('./img/home/DerechaAzul.png')"; 
    }
}

updateButtonStates();