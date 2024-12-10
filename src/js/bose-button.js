const controls = document.querySelector('[data-slider-nav]');
const slider = document.querySelector('[data-container]');

const handleSlider = event => {
  const target = event.target;

  if (target.tagName === 'BUTTON') {
    const index = target.dataset.slide;
    const translateX = `translateX(-${index}00%)`;
    slider.style.transform = translateX;

    document.querySelectorAll('[data-slide]').forEach(btn => {
      btn.classList.remove('active-btn');
    });
    target.classList.add('active-btn');
  }
};

controls.addEventListener('click', handleSlider);
