(function () {
  var CONSENT_KEY = 'mukha_cookie_consent';
  var GA_ID = 'G-H3P3RFG4P5';

  function loadGA() {
    if (window.__gaLoaded) return;
    window.__gaLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  var consent = localStorage.getItem(CONSENT_KEY);
  if (consent === 'accepted') { loadGA(); return; }
  if (consent === 'declined') return;

  var banner = document.getElementById('cookie-banner');
  if (!banner) return;
  banner.classList.add('visible');

  document.getElementById('cookie-accept').addEventListener('click', function () {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    banner.classList.remove('visible');
    loadGA();
  });

  document.getElementById('cookie-decline').addEventListener('click', function () {
    localStorage.setItem(CONSENT_KEY, 'declined');
    banner.classList.remove('visible');
  });
})();
