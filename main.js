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

// ⬇️ PASTE MONA'S HEALTH INTAKE FORM URL HERE
const INTAKE_FORM_URL = 'www.instagram.com/mukhafaceyoga';

// ⬇️ PASTE FORMSPREE ENDPOINT HERE (e.g. https://formspree.io/f/xyzabc123)
const FORMSPREE_URL = 'YOUR_FORMSPREE_URL_HERE';

// Form submission → email Mona + open intake form in new tab
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
    } catch (_) {
      // Still open the intake form even if email fails
    }

    btn.textContent = 'Sent ✓ Opening health form…';
    btn.style.background = '#5C7A52';
    window.open(INTAKE_FORM_URL, '_blank');
  });
}
