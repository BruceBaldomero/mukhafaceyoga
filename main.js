// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Smooth-reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.service-card, .about-grid, .contact-grid').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// ⬇️ PASTE MONA'S HEALTH INTAKE FORM URL HERE TOMORROW
const INTAKE_FORM_URL = 'https://www.instagram.com/mukhafaceyoga/';

// Form submission → redirect to health intake form
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Redirecting to health form…';
    btn.style.background = '#5C7A52';
    btn.disabled = true;
    setTimeout(() => {
      window.location.href = INTAKE_FORM_URL;
    }, 1500);
  });
}
