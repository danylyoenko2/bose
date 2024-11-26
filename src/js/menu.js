'use strict';

const menu = document.querySelector('.nav');
const btn = document.querySelector('.burger');

btn.addEventListener('click', function () {
  menu.classList.toggle('open');
  btn.classList.toggle('active');

  document.querySelector('.header').classList.toggle('active');
  document.querySelector('.hero').classList.toggle('active');

  if (innerWidth < 768) {
    document.querySelector('body').classList.toggle('no-scroll');
  }
});
