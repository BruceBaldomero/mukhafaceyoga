// Mukha Face Yoga — redesign behaviour (homepage)
document.documentElement.classList.add('js');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Mobile menu
(function () {
  const btn = document.getElementById('bar-menu');
  const menu = document.getElementById('menu');
  if (!btn || !menu) return;
  const set = open => {
    menu.hidden = !open;
    btn.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
    btn.parentElement.parentElement.style.position = open ? 'fixed' : '';
  };
  btn.addEventListener('click', () => set(menu.hidden));
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && !menu.hidden) { set(false); btn.focus(); } });
})();

// Entrances: heading, then text, then picture, staggered as each part arrives.
// Anything already above the fold line is shown at once, so a fast scroll never leaves content hidden.
(function () {
  const parts = [];
  document.querySelectorAll('main section, .foot').forEach(section => {
    if (section.classList.contains('hero')) return;
    section.querySelectorAll('.head, .lead, .statement, .tr-intro, .tr, .chip, .fi-answer, figure, .mona-tile, .rv, .jr, .q, .faq-facts, .visit-card, .form, .res-center, .card-back, .write-text p')
      .forEach(el => { el.classList.add('rise'); parts.push(el); });
  });
  let pending = parts.slice();
  const reveal = () => {
    const line = window.innerHeight * 0.92;
    let n = 0;
    pending = pending.filter(el => {
      if (el.getBoundingClientRect().top > line) return true;
      el.style.transitionDelay = (reduceMotion ? 0 : Math.min(n++, 6) * 75) + 'ms';
      el.classList.add('in');
      return false;
    });
    if (!pending.length) window.removeEventListener('scroll', onScroll);
  };
  let ticking = false;
  const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(() => { ticking = false; reveal(); }); } };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  reveal();
})();

// Treatments: the open row decides the photograph
(function () {
  const rows = [...document.querySelectorAll('.tr')];
  const imgs = [...document.querySelectorAll('.tr-img')];
  if (!rows.length) return;
  const show = key => imgs.forEach(img => img.classList.toggle('is-on', img.dataset.for === key));
  rows.forEach(row => {
    row.addEventListener('toggle', () => {
      if (!row.open) return;
      rows.forEach(r => { if (r !== row) r.open = false; });
      show(row.dataset.key);
    });
    const summary = row.querySelector('summary');
    summary.addEventListener('mouseenter', () => show(row.dataset.key));
    summary.addEventListener('focus', () => show(row.dataset.key));
  });
  document.querySelector('.tr-list').addEventListener('mouseleave', () => {
    const open = rows.find(r => r.open);
    if (open) show(open.dataset.key);
  });
})();

// Finder: where do you hold it?
(function () {
  const chips = [...document.querySelectorAll('.chip')];
  const results = [...document.querySelectorAll('.fi-result')];
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

// Reviews: six to begin with, all fourteen on request
(function () {
  const btn = document.getElementById('rv-all');
  const row = document.getElementById('rv-row');
  if (!btn || !row) return;
  btn.addEventListener('click', () => {
    row.classList.add('all');
    btn.setAttribute('aria-expanded', 'true');
    btn.hidden = true;
    row.querySelectorAll('.rv.rise:not(.in)').forEach(el => el.classList.add('in'));
  });
})();

// Journal: play the video cover while it is on screen, open posts in a dialog
(function () {
  const modal = document.getElementById('jr-modal');
  if (!modal) return;
  const media = document.getElementById('jr-modal-media');
  const title = document.getElementById('jr-modal-title');
  const caption = document.getElementById('jr-modal-caption');
  const date = document.getElementById('jr-modal-date');
  const disclaimer = document.getElementById('jr-modal-disclaimer');

  const cover = document.querySelector('.jr-video');
  if (cover && !reduceMotion) {
    new IntersectionObserver(([e]) => { e.isIntersecting ? cover.play().catch(() => {}) : cover.pause(); }, { threshold: 0.4 }).observe(cover);
  }

  const open = card => {
    title.textContent = card.dataset.title || '';
    caption.textContent = card.dataset.caption || '';
    date.textContent = card.dataset.date || '';
    disclaimer.textContent = card.dataset.disclaimer || '';
    disclaimer.hidden = !card.dataset.disclaimer;
    media.innerHTML = '';
    if (card.dataset.type === 'video') {
      const v = document.createElement('video');
      v.src = card.dataset.video; v.controls = true; v.muted = true; v.loop = true; v.playsInline = true; v.autoplay = !reduceMotion;
      media.appendChild(v);
    } else {
      const names = card.dataset.slides.split(',');
      const track = document.createElement('div');
      track.className = 'jr-slides';
      names.forEach((n, i) => {
        const img = new Image();
        img.src = `images/journal/${n}.webp`;
        img.alt = `${card.dataset.title}, slide ${i + 1} of ${names.length}`;
        img.loading = 'lazy';
        track.appendChild(img);
      });
      const nav = document.createElement('div');
      nav.className = 'jr-nav';
      const count = document.createElement('span');
      count.textContent = `1 / ${names.length}`;
      const mk = (label, dir) => {
        const b = document.createElement('button');
        b.className = 'arrow'; b.textContent = dir < 0 ? '←' : '→'; b.setAttribute('aria-label', label);
        b.addEventListener('click', () => track.scrollBy({ left: dir * track.clientWidth, behavior: reduceMotion ? 'auto' : 'smooth' }));
        return b;
      };
      track.addEventListener('scroll', () => { count.textContent = `${Math.round(track.scrollLeft / track.clientWidth) + 1} / ${names.length}`; }, { passive: true });
      nav.append(mk('Previous slide', -1), mk('Next slide', 1), count);
      media.append(track, nav);
    }
    modal.showModal();
  };
  document.querySelectorAll('.jr').forEach(card => card.addEventListener('click', () => open(card)));
  document.getElementById('jr-modal-close').addEventListener('click', () => modal.close());
  modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
  modal.addEventListener('close', () => { const v = media.querySelector('video'); if (v) v.pause(); });
})();

// The name responds to the scroll: the wordmark settles as the first screen leaves,
// and the footer name grows into place as it arrives
(function () {
  if (reduceMotion) return;
  const mark = document.getElementById('wordmark');
  const footName = document.querySelector('.foot-name');
  const heroPhoto = document.querySelector('.hero-photo img');
  let ticking = false;
  const update = () => {
    ticking = false;
    const vh = window.innerHeight;
    const y = window.scrollY;
    const p = Math.min(1, y / vh);
    if (mark) mark.style.transform = `scale(${1 - p * 0.06})`;
    if (heroPhoto) heroPhoto.style.transform = `translateY(${p * 8}%) scale(${1 + p * 0.04})`;
    if (footName) {
      const r = footName.getBoundingClientRect();
      const q = Math.max(0, Math.min(1, (vh - r.top) / r.height));
      footName.style.transform = `scale(${0.94 + q * 0.06})`;
    }
  };
  window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
})();

// Contact form — submits to Formspree, replaces form with confirmation
(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;
  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    const label = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    let ok = false;
    try {
      const res = await fetch('https://formspree.io/f/mzdqzgzd', { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
      ok = res.ok;
    } catch (_) {}
    if (ok) {
      const done = document.createElement('div');
      done.className = 'form-done';
      done.innerHTML = `
        <h3 class="head head--small">Message received</h3>
        <p>Thank you for reaching out. Mona will be in touch shortly.</p>
        <p>Ready to book? Head to Fresha to choose your treatment, date and time.</p>
        <a href="https://www.fresha.com/en-GB/a/mukha-face-yoga-surbiton-101-ewell-road-pzogzeob?pId=2886400" target="_blank" rel="noopener" class="btn">Book on Fresha →</a>`;
      form.replaceWith(done);
    } else {
      btn.textContent = label;
      btn.disabled = false;
      const err = form.querySelector('[data-fs-error]');
      if (err) err.textContent = 'Something went wrong. Please try again or email mukha.faceyoga@gmail.com directly.';
    }
  });
})();
