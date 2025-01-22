document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const sliderTrack = document.querySelector('.slider-track');
    const sliderItems = document.querySelectorAll('.slider-item');
    let currentIndex = 0;

    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? sliderItems.length - 1 : currentIndex - 1;
        updateSliderPosition();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === sliderItems.length - 1) ? 0 : currentIndex + 1;
        updateSliderPosition();
    });

    function updateSliderPosition() {
        const offset = -currentIndex * 100;
        sliderTrack.style.transform = `translateX(${offset}%)`;
    }
});
