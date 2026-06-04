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

document.querySelectorAll('.service-card, .about-grid, .contact-grid, .section-header, .services-category, .quote-strip blockquote, .hero-inner').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Formspree initialisation — runs after the CDN script loads
window.formspree = window.formspree || function () { (formspree.q = formspree.q || []).push(arguments); };
formspree('initForm', { formElement: '#contact-form', formId: 'mzdqzgzd' });
