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

// ⬇️ PASTE FORMSPREE ENDPOINT HERE (e.g. https://formspree.io/f/xyzabc123)
const FORMSPREE_URL = 'YOUR_FORMSPREE_URL_HERE';

// Form submission → send enquiry to Mona via Formspree
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
      // Still show confirmation even if email fails
    }

    // Show confirmation message
    form.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="font-size: 2rem; margin-bottom: 1rem;">✦</div>
        <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 400; color: #3D2E22; margin-bottom: 0.75rem;">Message received</h3>
        <p style="font-size: 0.9rem; color: #6B4E3D; line-height: 1.75; margin-bottom: 0.5rem;">Thank you for reaching out. Mona will be in touch shortly.</p>
        <p style="font-size: 0.9rem; color: #6B4E3D; line-height: 1.75; margin-bottom: 1.75rem;">Ready to book? Head to Fresha to choose your treatment, date and time.</p>
        <a href="https://www.fresha.com/en-GB/a/mukha-face-yoga-surbiton-101-ewell-road-pzogzeob?pId=2886400" target="_blank" rel="noopener"
          style="display: inline-block; margin-top: 0.5rem; font-family: 'Jost', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #5C7A52; border-bottom: 1px solid #C9A96E; padding-bottom: 2px;">
          Book on Fresha →
        </a>
      </div>
    `;
  });
}
