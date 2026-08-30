const header = document.querySelector('.nav-shell');
const menu = document.querySelector('.menu');
const navLinks = document.querySelector('#navLinks');
const revealItems = document.querySelectorAll('.reveal');

window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 30));
menu.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menu.setAttribute('aria-expanded', open);
});
navLinks.addEventListener('click', () => {
  navLinks.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: .12 });
revealItems.forEach(item => observer.observe(item));
document.querySelector('#year').textContent = new Date().getFullYear();
