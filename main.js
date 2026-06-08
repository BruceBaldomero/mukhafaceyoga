// Nav scroll effect
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Hamburger menu
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
  });
  // Close on link click
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    }
  });
}

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

// Testimonials carousel
const carouselTrack = document.getElementById('carousel-track');
const carouselPrev = document.getElementById('carousel-prev');
const carouselNext = document.getElementById('carousel-next');
const carouselDots = document.querySelectorAll('.carousel-dot');

if (carouselTrack && carouselPrev && carouselNext) {
  let current = 0;
  const total = carouselTrack.children.length;

  function goToSlide(index) {
    current = (index + total) % total;
    carouselTrack.style.transform = `translateX(-${current * 100}%)`;
    carouselDots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  carouselPrev.addEventListener('click', () => goToSlide(current - 1));
  carouselNext.addEventListener('click', () => goToSlide(current + 1));
  carouselDots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));

  // Touch swipe support
  let touchStartX = 0;
  const carouselWrap = document.querySelector('.carousel-track-wrap');
  if (carouselWrap) {
    carouselWrap.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    carouselWrap.addEventListener('touchend', e => {
      const diff = touchStartX - e.changedTouches[0].clientX;
      if (Math.abs(diff) > 30) goToSlide(diff > 0 ? current + 1 : current - 1);
    }, { passive: true });
  }
}

// Contact form — submits to Formspree, replaces form with confirmation
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Sending…';
    btn.disabled = true;

    let success = false;
    try {
      const res = await fetch('https://formspree.io/f/mzdqzgzd', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: new FormData(form)
      });
      success = res.ok;
    } catch (_) {}

    if (success) {
      // Replace form with confirmation — prevents resubmission
      form.outerHTML = `
        <div class="form-success">
          <div class="form-success-icon">✦</div>
          <h3>Message received</h3>
          <p>Thank you for reaching out. Mona will be in touch shortly.</p>
          <p>Ready to book? Head to Fresha to choose your treatment, date and time.</p>
          <a href="https://www.fresha.com/en-GB/a/mukha-face-yoga-surbiton-101-ewell-road-pzogzeob?pId=2886400" target="_blank" rel="noopener" class="btn-service" style="margin-top:1rem; display:inline-block;">
            Book on Fresha →
          </a>
        </div>
      `;
    } else {
      // Show error but re-enable form
      btn.textContent = 'Get in Touch';
      btn.disabled = false;
      const err = form.querySelector('[data-fs-error]');
      if (err) {
        err.textContent = 'Something went wrong. Please try again or email mukha.faceyoga@gmail.com directly.';
      }
    }
  });
}
