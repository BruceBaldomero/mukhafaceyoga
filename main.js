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

// Journal magazine scatter — modal
(function () {
  const modal = document.getElementById('journal-modal');
  if (!modal) return;

  const backdrop = document.getElementById('journal-modal-backdrop');
  const closeBtn = document.getElementById('journal-modal-close');
  const mediaEl  = document.getElementById('journal-modal-media');
  const titleEl  = document.getElementById('journal-modal-title');
  const captionEl = document.getElementById('journal-modal-caption');
  const disclaimerEl = document.getElementById('journal-modal-disclaimer');
  const dateEl   = document.getElementById('journal-modal-date');

  function openModal(cover) {
    const type       = cover.dataset.type;
    const title      = cover.dataset.title || '';
    const caption    = cover.dataset.caption || '';
    const disclaimer = cover.dataset.disclaimer || '';
    const date       = cover.dataset.date || '';

    titleEl.textContent   = title;
    captionEl.textContent = caption;
    dateEl.textContent    = date;
    disclaimerEl.textContent = disclaimer;
    disclaimerEl.style.display = disclaimer ? '' : 'none';

    mediaEl.innerHTML = '';

    if (type === 'video') {
      const video = document.createElement('video');
      video.src = cover.dataset.video || '';
      video.controls = true;
      video.muted = true;
      video.loop = true;
      video.setAttribute('playsinline', '');
      video.className = 'journal-modal-video';
      mediaEl.appendChild(video);
    } else {
      const slidesData = cover.querySelector('.journal-cover-slides');
      if (!slidesData) return;
      const imgs  = Array.from(slidesData.querySelectorAll('img'));
      const total = imgs.length;
      let current = 0;

      const wrap  = document.createElement('div');
      wrap.className = 'journal-modal-slides-wrap';

      const track = document.createElement('div');
      track.className = 'journal-modal-slides';

      imgs.forEach(img => {
        const slide = document.createElement('div');
        slide.className = 'journal-modal-slide';
        const newImg = new Image();
        newImg.src = img.src;
        newImg.alt = img.alt;
        newImg.loading = 'lazy';
        slide.appendChild(newImg);
        track.appendChild(slide);
      });

      wrap.appendChild(track);

      const prevBtn = document.createElement('button');
      prevBtn.className = 'insight-btn insight-btn--prev';
      prevBtn.innerHTML = '<i class="fa fa-chevron-left"></i>';
      prevBtn.setAttribute('aria-label', 'Previous slide');

      const nextBtn = document.createElement('button');
      nextBtn.className = 'insight-btn insight-btn--next';
      nextBtn.innerHTML = '<i class="fa fa-chevron-right"></i>';
      nextBtn.setAttribute('aria-label', 'Next slide');

      const counter = document.createElement('span');
      counter.className = 'insight-counter';
      counter.textContent = `1 / ${total}`;

      function goTo(index) {
        current = (index + total) % total;
        track.style.transform = `translateX(-${current * 100}%)`;
        counter.textContent = `${current + 1} / ${total}`;
      }

      prevBtn.addEventListener('click', () => goTo(current - 1));
      nextBtn.addEventListener('click', () => goTo(current + 1));

      let startX = 0;
      wrap.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
      wrap.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 30) goTo(diff > 0 ? current + 1 : current - 1);
      }, { passive: true });

      mediaEl.appendChild(wrap);
      mediaEl.appendChild(prevBtn);
      mediaEl.appendChild(nextBtn);
      mediaEl.appendChild(counter);
    }

    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    const video = mediaEl.querySelector('video');
    if (video) { video.pause(); video.src = ''; }
  }

  document.querySelectorAll('.journal-cover').forEach(cover => {
    cover.addEventListener('click', () => openModal(cover));
  });

  backdrop?.addEventListener('click', closeModal);
  closeBtn?.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
  });
})();

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
