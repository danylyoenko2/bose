!function(){"use strict";var e=document.querySelector(".nav"),t=document.querySelector(".burger");document.querySelector(".menu__link");t.addEventListener("click",(function(){e.classList.toggle("open"),t.classList.toggle("active"),document.querySelector(".header").classList.toggle("active"),document.querySelector(".hero").classList.toggle("active"),innerWidth<768&&document.querySelector("body").classList.toggle("no-scroll"),document.querySelectorAll(".menu__link").forEach((function(c){c.addEventListener("click",(function(){e.classList.remove("open"),t.classList.remove("active"),document.querySelector(".header").classList.remove("active"),document.querySelector(".hero").classList.remove("active"),document.querySelector("body").classList.remove("no-scroll")}))}))}));var c=document.querySelector("[data-pavigation]"),a=document.querySelector("[data-slider]"),r=document.querySelector("[data-slider-text]");c.addEventListener("click",(function(e){var t=e.target;if("BUTTON"===t.tagName){var c=t.dataset.video,o="translateX(-".concat(c,"00%)");a.style.transform=o,r.style.transform=o,document.querySelectorAll("[data-video]").forEach((function(e){e.classList.remove("active-btn")})),t.classList.add("active-btn")}}));var o=document.querySelector("[data-slider-nav]"),n=document.querySelector("[data-container]");o.addEventListener("click",(function(e){var t=e.target;if("BUTTON"===t.tagName){var c=t.dataset.slide,a="translateX(-".concat(c,"00%)");n.style.transform=a,document.querySelectorAll("[data-slide]").forEach((function(e){e.classList.remove("active-btn")})),t.classList.add("active-btn")}}))}();
//# sourceMappingURL=index.232aa536.js.map