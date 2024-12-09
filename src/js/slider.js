const controls = document.querySelector('[data-pavigation]');
const slider = document.querySelector('[data-slider]');
const sliderText = document.querySelector('[data-slider-text]');

const handleSlider = event => {
  const target = event.target;

  if (target.tagName === 'BUTTON') {
    const index = target.dataset.video;
    const translateX = `translateX(-${index}00%)`;
    slider.style.transform = translateX;
    sliderText.style.transform = translateX;

    document.querySelectorAll('[data-video]').forEach(btn => {
      btn.classList.remove('active-btn');
    });
    target.classList.add('active-btn');
  }
};

controls.addEventListener('click', handleSlider);
