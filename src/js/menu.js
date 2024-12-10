'use strict';

const menu = document.querySelector('.nav');
const btn = document.querySelector('.burger');
const link = document.querySelector('.menu__link');

btn.addEventListener('click', function () {
  menu.classList.toggle('open');
  btn.classList.toggle('active');

  document.querySelector('.header').classList.toggle('active');
  document.querySelector('.hero').classList.toggle('active');

  if (innerWidth < 768) {
    document.querySelector('body').classList.toggle('no-scroll');
  }

  document.querySelectorAll('.menu__link').forEach(link => {
    link.addEventListener('click', function () {
      menu.classList.remove('open');
      btn.classList.remove('active');

      document.querySelector('.header').classList.remove('active');
      document.querySelector('.hero').classList.remove('active');
      document.querySelector('body').classList.remove('no-scroll');
    });
  });
});
