'use strict';

/* ── Mobile nav ── */
function toggleNav() {
  const b = document.getElementById('navBurger');
  const l = document.getElementById('navLinks');
  b.classList.toggle('open');
  l.classList.toggle('open');
}

/* ── Newsletter subscribe ── */
function handleNewsletter(e) {
  e.preventDefault();
  const inp = document.getElementById('nlInput');
  const btn = e.target.querySelector('button');
  if (!inp || !inp.value.includes('@')) {
    inp.style.outline = '2px solid #b5341a';
    setTimeout(() => inp.style.outline = '', 2000);
    return;
  }
  const orig = btn.textContent;
  btn.textContent = '✓ Subscribed';
  btn.style.background = '#2e7d32';
  inp.value = '';
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 4000);
}

/* ── Contact form ── */
function handleContact(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type=submit]');
  const orig = btn.textContent;
  btn.textContent = '✓ Message sent — thanks!';
  btn.style.background = '#2e7d32';
  e.target.reset();
  setTimeout(() => { btn.textContent = orig; btn.style.background = ''; }, 5000);
}

/* ── Blog category filter ── */
function filterBlog(btn, cat) {
  document.querySelectorAll('.bf').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  document.querySelectorAll('.blog-card').forEach(c => {
    c.style.display = (cat === 'all' || c.dataset.cat === cat) ? '' : 'none';
  });
}

/* ── Scroll-reveal ── */
document.addEventListener('DOMContentLoaded', () => {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.animation = 'fadeUp .6s ease both';
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.recipe-card, .tip-card, .value-card, .cat-tile').forEach(el => {
    el.style.opacity = '0';
    io.observe(el);
  });
});
