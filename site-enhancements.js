
// ==========================
// Infomanagements - Site Enhancements
// Banner logic, mailto helper, IntersectionObserver entrances
// ==========================

(function () {
  const LS_KEYS = {
    SAFETY_DISMISSED: 'im_safety_dismissed_v1',
    COOKIE_ACK: 'im_cookie_ack_v1'
  };

  // 1) Safety banner show/hide
  const safety = document.querySelector('[data-safety-banner]');
  if (safety) {
    const dismissed = localStorage.getItem(LS_KEYS.SAFETY_DISMISSED) === '1';
    if (!dismissed) {
      safety.style.display = 'block';
    }
    const closeBtn = safety.querySelector('[data-close-safety]');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => {
        localStorage.setItem(LS_KEYS.SAFETY_DISMISSED, '1');
        safety.style.display = 'none';
      });
    }
  }

  // 2) IntersectionObserver for .reveal-up
  if ('IntersectionObserver' in window && matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });
    document.querySelectorAll('.reveal-up').forEach(el => io.observe(el));
  }

  // 3) Mailto helper — prefill common subjects
  document.querySelectorAll('[data-mailto]').forEach(el => {
    const to = el.getAttribute('data-mailto');
    const subject = encodeURIComponent(el.getAttribute('data-subject') || 'Hello from Infomanagements');
    const body = encodeURIComponent(el.getAttribute('data-body') || '');
    el.setAttribute('href', `mailto:${to}?subject=${subject}&body=${body}`);
  });

  // 4) Cookie / privacy notice (optional)
  const cookieBox = document.querySelector('[data-cookie-box]');
  if (cookieBox) {
    const ack = localStorage.getItem(LS_KEYS.COOKIE_ACK) === '1';
    if (!ack) cookieBox.style.display = 'block';
    const accept = cookieBox.querySelector('[data-cookie-accept]');
    if (accept) {
      accept.addEventListener('click', () => {
        localStorage.setItem(LS_KEYS.COOKIE_ACK, '1');
        cookieBox.style.display = 'none';
      });
    }
  }
})();
