const e=document.querySelector(".nav"),t=document.querySelector(".burger");t.addEventListener("click",(function(){e.classList.toggle("open"),t.classList.toggle("active"),document.querySelector(".header").classList.toggle("active"),document.querySelector(".hero").classList.toggle("active"),innerWidth<768&&document.querySelector("body").classList.toggle("no-scroll")}));const c=document.querySelector("[data-pavigation]"),o=document.querySelector("[data-slider]"),a=document.querySelector("[data-slider-text]");c.addEventListener("click",(e=>{const t=e.target;if("BUTTON"===t.tagName){const e=`translateX(-${t.dataset.video}00%)`;o.style.transform=e,a.style.transform=e,document.querySelectorAll("[data-video]").forEach((e=>{e.classList.remove("active-btn")})),t.classList.add("active-btn")}}));
//# sourceMappingURL=index.358be9ec.js.map
