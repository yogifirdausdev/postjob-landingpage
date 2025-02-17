const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('#nav-links');
const navButtons = document.querySelector('#nav-buttons');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navButtons.classList.toggle('active');
});
