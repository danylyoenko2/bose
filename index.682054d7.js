const e=document.querySelector(".nav"),t=document.querySelector(".burger");t.addEventListener("click",(function(){e.classList.toggle("open"),t.classList.toggle("active"),document.querySelector(".header").classList.toggle("active"),document.querySelector(".hero").classList.toggle("active"),innerWidth<768&&document.querySelector("body").classList.toggle("no-scroll")}));const a=document.querySelector("[data-pavigation]"),c=document.querySelector("[data-slider]"),o=document.querySelector("[data-slider-text]");a.addEventListener("click",(e=>{const t=e.target;if("BUTTON"===t.tagName){const e=`translateX(-${t.dataset.video}00%)`;c.style.transform=e,o.style.transform=e,document.querySelectorAll("[data-video]").forEach((e=>{e.classList.remove("active-btn")})),t.classList.add("active-btn")}}));const s=document.querySelector("[data-slider-nav]"),r=document.querySelector("[data-container]");s.addEventListener("click",(e=>{const t=e.target;if("BUTTON"===t.tagName){const e=`translateX(-${t.dataset.slide}00%)`;r.style.transform=e,document.querySelectorAll("[data-slide]").forEach((e=>{e.classList.remove("active-btn")})),t.classList.add("active-btn")}}));
//# sourceMappingURL=index.682054d7.js.map
