(function () {
  var root = document.documentElement;
  root.classList.add('js');
  root.lang = 'es';

  /* Mobile menu -------------------------------------------------------- */
  var navToggle = document.getElementById('navToggle');
  var mobileNav = document.getElementById('mobileNav');
  function closeMobileNav() {
    mobileNav.hidden = true;
    navToggle.setAttribute('aria-expanded', 'false');
  }
  function openMobileNav() {
    mobileNav.hidden = false;
    navToggle.setAttribute('aria-expanded', 'true');
  }
  navToggle.addEventListener('click', function () {
    if (navToggle.getAttribute('aria-expanded') === 'true') closeMobileNav();
    else openMobileNav();
  });
  mobileNav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') closeMobileNav();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeMobileNav();
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 720) closeMobileNav();
  });

  /* Carousel: se mueve solo, sin controles visibles ------------------- */
  function initCarousel(root) {
    var track = root.querySelector('.carousel__track');
    var count = root.querySelectorAll('.carousel__slide').length;
    var index = 0;
    var timer = null;
    // Con el movimiento reducido preferido igual avanzamos (no hay botones
    // para hacerlo a mano), pero sin animación: salto directo entre fotos.
    var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function goTo(i, smooth) {
      index = (i + count) % count;
      track.scrollTo({ left: track.clientWidth * index, behavior: smooth === false ? 'auto' : 'smooth' });
    }
    function next() { goTo(index + 1, !reduceMotion); }
    function stop() { if (timer) { clearInterval(timer); timer = null; } }
    function start() { if (count > 1) timer = setInterval(next, 2000); }

    // Si el navegador reporta que la posición real del scroll quedó
    // desalineada (p. ej. el usuario deslizó con el dedo), la retomamos.
    function syncFromScroll() {
      index = Math.round(track.scrollLeft / track.clientWidth);
    }
    if ('onscrollend' in window) {
      track.addEventListener('scrollend', syncFromScroll);
    } else {
      var scrollTimer;
      track.addEventListener('scroll', function () {
        clearTimeout(scrollTimer);
        scrollTimer = setTimeout(syncFromScroll, 150);
      }, { passive: true });
    }

    root.addEventListener('mouseenter', stop);
    root.addEventListener('mouseleave', start);
    root.addEventListener('focusin', stop);
    root.addEventListener('focusout', start);
    window.addEventListener('resize', function () { goTo(index, false); });

    start();
  }
  Array.prototype.forEach.call(document.querySelectorAll('[data-carousel]'), initCarousel);

  /* Sticky header state --------------------------------------------- */
  var header = document.querySelector('.site-header');
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      header.classList.toggle('is-stuck', window.scrollY > 6);
      ticking = false;
    });
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Reveal on scroll ------------------------------------------------- */
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = document.querySelectorAll('[data-reveal], [data-reveal-self]');
  if (reduce || !('IntersectionObserver' in window)) {
    Array.prototype.forEach.call(reveals, function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    Array.prototype.forEach.call(reveals, function (el) { io.observe(el); });
  }

  /* Contact form: demo submit + aria-invalid sync ------------------- */
  var form = document.getElementById('cotizar');
  if (form) {
    var status = document.getElementById('formStatus');

    var syncAria = function (el) {
      if (!el || typeof el.matches !== 'function' || typeof el.checkValidity !== 'function') return;
      if (el.matches(':user-invalid')) el.setAttribute('aria-invalid', 'true');
      else el.removeAttribute('aria-invalid');
    };
    form.addEventListener('blur', function (e) { syncAria(e.target); }, true);
    form.addEventListener('input', function (e) {
      if (e.target.hasAttribute('aria-invalid')) syncAria(e.target);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      Array.prototype.forEach.call(form.elements, syncAria);

      if (!form.checkValidity()) {
        var bad = form.querySelector(':user-invalid') || form.querySelector(':invalid');
        if (bad && bad.focus) bad.focus();
        status.hidden = false;
        status.className = 'form__status is-err';
        status.textContent = 'Revise los campos marcados antes de enviar.';
        return;
      }

      status.hidden = false;
      status.className = 'form__status is-ok';
      status.textContent = 'Gracias. Esta es una versión de demostración, así que la solicitud no se envió. Cuando conectemos el correo de la empresa, el formulario quedará operativo.';
      form.reset();
    });
  }
})();
