const e=document.querySelector(".nav"),t=document.querySelector(".burger");document.querySelector(".menu__link");t.addEventListener("click",(function(){e.classList.toggle("open"),t.classList.toggle("active"),document.querySelector(".header").classList.toggle("active"),document.querySelector(".hero").classList.toggle("active"),innerWidth<768&&document.querySelector("body").classList.toggle("no-scroll"),document.querySelectorAll(".menu__link").forEach((c=>{c.addEventListener("click",(function(){e.classList.remove("open"),t.classList.remove("active"),document.querySelector(".header").classList.remove("active"),document.querySelector(".hero").classList.remove("active"),document.querySelector("body").classList.remove("no-scroll")}))}))}));const c=document.querySelector("[data-pavigation]"),o=document.querySelector("[data-slider]"),a=document.querySelector("[data-slider-text]");c.addEventListener("click",(e=>{const t=e.target;if("BUTTON"===t.tagName){const e=`translateX(-${t.dataset.video}00%)`;o.style.transform=e,a.style.transform=e,document.querySelectorAll("[data-video]").forEach((e=>{e.classList.remove("active-btn")})),t.classList.add("active-btn")}}));const r=document.querySelector("[data-slider-nav]"),s=document.querySelector("[data-container]");r.addEventListener("click",(e=>{const t=e.target;if("BUTTON"===t.tagName){const e=`translateX(-${t.dataset.slide}00%)`;s.style.transform=e,document.querySelectorAll("[data-slide]").forEach((e=>{e.classList.remove("active-btn")})),t.classList.add("active-btn")}}));
//# sourceMappingURL=index.21aebfeb.js.map