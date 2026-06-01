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
const INTAKE_FORM_URL = 'https://www.fresha.com/en-GB/a/mukha-face-yoga-surbiton-101-ewell-road-pzogzeob?pId=2886400';

// ⬇️ PASTE FORMSPREE ENDPOINT HERE (e.g. https://formspree.io/f/xyzabc123)
const FORMSPREE_URL = 'YOUR_FORMSPREE_URL_HERE';

// Form submission → email Mona + show confirmation → open intake form in new tab
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

    // Hide the form, show confirmation message
    form.innerHTML = `
      <div style="text-align: center; padding: 2rem 1rem;">
        <div style="font-size: 2rem; margin-bottom: 1rem;">✦</div>
        <h3 style="font-family: 'Cormorant Garamond', serif; font-size: 1.6rem; font-weight: 400; color: #3D2E22; margin-bottom: 0.75rem;">Message received</h3>
        <p style="font-size: 0.9rem; color: #6B4E3D; line-height: 1.75; margin-bottom: 0.5rem;">Thank you for reaching out. Mona will be in touch shortly.</p>
        <p style="font-size: 0.9rem; color: #6B4E3D; line-height: 1.75; margin-bottom: 1.75rem;">In the meantime, please complete your health intake form so Mona can prepare for your treatment.</p>
        <p style="font-size: 0.8rem; color: #A8C49A; letter-spacing: 0.08em;" id="countdown-text">Opening your health form in <strong id="countdown">10</strong> seconds…</p>
        <a href="${INTAKE_FORM_URL}" target="_blank" rel="noopener"
          style="display: inline-block; margin-top: 1.25rem; font-family: 'Jost', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #5C7A52; border-bottom: 1px solid #C9A96E; padding-bottom: 2px;">
          Open form now →
        </a>
      </div>
    `;

    // Countdown then open in new tab
    let seconds = 10;
    const countdownEl = document.getElementById('countdown');
    const interval = setInterval(() => {
      seconds--;
      if (countdownEl) countdownEl.textContent = seconds;
      if (seconds <= 0) {
        clearInterval(interval);
        window.open(INTAKE_FORM_URL, '_blank');
        const countdownText = document.getElementById('countdown-text');
        if (countdownText) countdownText.textContent = 'Health form opened in a new tab.';
      }
    }, 1000);
  });
}
