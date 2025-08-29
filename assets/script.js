
const btn = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
if (btn) btn.addEventListener('click', () => menu.classList.toggle('open'));
