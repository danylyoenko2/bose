const controls = document.querySelector("[data-slider-nav]");
const slider = document.querySelector("[data-container]");

const handleSlider = (event) => {
  const target = event.target;

  if (target.tagName === "BUTTON") {
    const index = target.dataset.slide;
    slider.style.transform = `translateX(-${index}00%)`;

    document.querySelectorAll("[data-slide-nav]").forEach((btn) => {
      btn.classList.remove("active");
    });
    target.classList.add("active");
  }
};
controls.addEventListener("click", handleSlider);