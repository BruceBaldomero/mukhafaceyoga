const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The phone's back gesture (and Esc) closes an open layer instead of leaving the page.
// Uses CloseWatcher where the browser has it, and a history entry elsewhere.
function watchClose(onClose) {
  if ('CloseWatcher' in window) {
    try { const w = new CloseWatcher(); w.onclose = onClose; return { done: () => w.destroy() }; } catch (_) {}
  }
  history.pushState({ mukhaLayer: true }, '');
  const onPop = () => { window.removeEventListener('popstate', onPop); onClose(); };
  window.addEventListener('popstate', onPop);
  return { done: () => { window.removeEventListener('popstate', onPop); if (history.state && history.state.mukhaLayer) history.back(); } };
}

// Nav state on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

// Hamburger menu: closes with Esc, the back gesture, tapping a link or tapping outside
const hamburger = document.getElementById('nav-hamburger');
const mobileMenu = document.getElementById('mobile-menu');
if (hamburger && mobileMenu) {
  let watcher = null;
  const closeMenu = (fromWatcher) => {
    if (mobileMenu.hidden) return;
    mobileMenu.hidden = true;
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.setAttribute('aria-label', 'Open menu');
    const w = watcher; watcher = null;
    if (w && fromWatcher !== true) w.done();
  };
  const openMenu = () => {
    mobileMenu.hidden = false;
    hamburger.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    hamburger.setAttribute('aria-label', 'Close menu');
    watcher = watchClose(() => { watcher = null; closeMenu(true); });
  };
  hamburger.addEventListener('click', () => (mobileMenu.hidden ? openMenu() : closeMenu()));
  mobileMenu.addEventListener('click', e => {
    const link = e.target.closest('a');
    if (!link) return;
    // let an in-page link land after the history entry is gone
    if (watcher && !('CloseWatcher' in window) && link.hash && link.pathname === location.pathname) {
      e.preventDefault();
      closeMenu();
      setTimeout(() => { location.hash = link.hash; }, 60);
      return;
    }
    closeMenu();
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && !mobileMenu.hidden) { closeMenu(); hamburger.focus(); }
  });
  document.addEventListener('click', e => {
    if (!mobileMenu.hidden && !nav.contains(e.target) && !mobileMenu.contains(e.target)) closeMenu();
  });
}

// The nav marks the section you are reading with a short gold line
(function () {
  const links = [...document.querySelectorAll('.nav-links a')].filter(a => a.hash && document.querySelector(a.hash));
  if (!links.length || !('IntersectionObserver' in window)) return;
  const byId = new Map(links.map(a => [a.hash.slice(1), a]));
  const spy = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      links.forEach(a => a.removeAttribute('aria-current'));
      const link = byId.get(e.target.id);
      if (link) link.setAttribute('aria-current', 'true');
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  byId.forEach((_, id) => spy.observe(document.getElementById(id)));
})();

// Dark mode: follows the system until the visitor picks, then remembers the choice
(function () {
  const root = document.documentElement;
  const toggles = document.querySelectorAll('[data-theme-toggle]');
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  const isDark = () => root.dataset.theme ? root.dataset.theme === 'dark' : system.matches;
  const sync = () => {
    const dark = isDark();
    toggles.forEach(t => {
      t.setAttribute('aria-pressed', dark);
      if (!t.classList.contains('theme-toggle--menu')) t.setAttribute('aria-label', dark ? 'Light mode' : 'Dark mode');
      const label = t.querySelector('[data-i18n]');
      const tr = key => (window.mukhaT && window.mukhaT(key)) || null;
      if (label) label.textContent = dark ? (tr('nav.theme.light') || 'Light mode') : (tr('nav.theme') || 'Dark mode');
    });
    document.querySelectorAll('meta[name="theme-color"]').forEach(m => {
      if (root.dataset.theme) { m.content = dark ? '#1C1512' : '#F7F3EE'; m.removeAttribute('media'); }
    });
  };
  toggles.forEach(t => t.addEventListener('click', () => {
    root.dataset.theme = isDark() ? 'light' : 'dark';
    try { localStorage.setItem('mukha_theme', root.dataset.theme); } catch (_) {}
    sync();
  }));
  system.addEventListener('change', sync);
  document.addEventListener('mukha:lang', sync);
  sync();
})();

// Fade up on scroll: each part rises as it enters; cards in a row arrive one after another
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
      // once it has arrived, hand transitions back to the element's own hover and press states
      entry.target.addEventListener('transitionend', () => {
        entry.target.classList.remove('reveal', 'visible');
        entry.target.style.removeProperty('--i');
      }, { once: true });
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

const revealTargets = '.section-header, .about-grid, .services-category-label, .service-card, .finder-ask, .finder-answer, .chip, .ba-photo, .ba-center, .testimonials-carousel, .cta-card, .journal-scatter, .contact-text, .contact-form, .gallery-preview-item';
if (!reduceMotion) {
  document.querySelectorAll(revealTargets).forEach(el => {
    if (el.closest('.scene-hero') || el.closest('.scene-steps')) return;
    // stagger siblings of the same kind (cards in a row, chips, photos)
    const siblings = [...el.parentElement.children].filter(c => c.matches(revealTargets));
    const i = siblings.indexOf(el);
    if (i > 0) el.style.setProperty('--i', Math.min(i, 5));
    el.classList.add('reveal');
    revealObserver.observe(el);
  });
}

// Where do you hold it? Picking a feeling shows where Mona would usually begin
(function () {
  const chips = [...document.querySelectorAll('.finder .chip')];
  const results = [...document.querySelectorAll('.finder-result')];
  if (!chips.length) return;
  const pick = chip => {
    chips.forEach(c => { const on = c === chip; c.setAttribute('aria-checked', on); c.tabIndex = on ? 0 : -1; });
    results.forEach(r => r.classList.toggle('is-on', r.dataset.result === chip.dataset.pick));
  };
  chips.forEach((chip, i) => {
    chip.tabIndex = i === 0 ? 0 : -1;
    chip.addEventListener('click', () => pick(chip));
    chip.addEventListener('keydown', e => {
      const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key];
      if (!step) return;
      e.preventDefault();
      const next = chips[(i + step + chips.length) % chips.length];
      next.focus();
      pick(next);
    });
  });
})();

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

// Seek video cover thumbnails to a good frame
document.querySelectorAll('.journal-cover-video').forEach(v => {
  v.addEventListener('loadedmetadata', () => { v.currentTime = 2; });
});

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
    mediaEl.classList.toggle('journal-modal-media--video', type === 'video');

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
      prevBtn.textContent = '←';
      prevBtn.setAttribute('aria-label', 'Previous slide');

      const nextBtn = document.createElement('button');
      nextBtn.className = 'insight-btn insight-btn--next';
      nextBtn.textContent = '→';
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

// Contact form — checks the fields, submits once to Formspree, then keeps the thank-you in view
const form = document.getElementById('contact-form');
if (form) {
  const t = key => (window.mukhaT && window.mukhaT(key)) || null;
  const summary = form.querySelector('#form-summary');
  const fields = [
    { el: form.querySelector('#name'), ok: v => v.trim().length > 0, label: () => t('form.name') || 'Name' },
    { el: form.querySelector('#email'), ok: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()), label: () => t('form.email') || 'Email' },
  ];
  const mark = (f, bad) => {
    f.el.closest('.form-row').classList.toggle('has-error', bad);
    f.el.setAttribute('aria-invalid', bad ? 'true' : 'false');
  };
  fields.forEach(f => f.el.addEventListener('input', () => { if (f.el.getAttribute('aria-invalid') === 'true') mark(f, !f.ok(f.el.value)); }));
  let sending = false;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (sending) return; // a double tap sends once
    const missing = fields.filter(f => !f.ok(f.el.value));
    fields.forEach(f => mark(f, missing.includes(f)));
    if (missing.length) {
      const names = missing.map(f => f.label()).join(' & ');
      summary.textContent = (t('form.err.summary') || 'Please check:') + ' ' + names + '.';
      missing[0].el.focus();
      return;
    }
    summary.textContent = '';
    const btn = form.querySelector('button[type="submit"]');
    const label = btn.textContent;
    sending = true;
    btn.textContent = t('form.sending') || 'Sending…';
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
      const done = document.createElement('div');
      done.className = 'form-success';
      done.setAttribute('tabindex', '-1');
      done.innerHTML = `
        <div class="form-success-icon">✦</div>
        <h3>${t('form.done.title') || 'Message received'}</h3>
        <p>${t('form.done.p1') || 'Thank you for reaching out. Mona will be in touch shortly.'}</p>
        <p>${t('form.done.p2') || 'Ready to book? Head to Fresha to choose your treatment, date and time.'}</p>
        <a href="https://www.fresha.com/en-GB/a/mukha-face-yoga-surbiton-101-ewell-road-pzogzeob?pId=2886400" target="_blank" rel="noopener" class="btn-service" style="margin-top:1rem; display:inline-block;">
          ${t('contact.book') || 'Book on Fresha →'}
        </a>`;
      form.replaceWith(done);
      done.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
      done.focus({ preventScroll: true });
    } else {
      sending = false;
      btn.textContent = label;
      btn.disabled = false;
      summary.textContent = t('form.err.send') || 'Something went wrong. Please try again or email mukha.faceyoga@gmail.com directly.';
    }
  });
}
