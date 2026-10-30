// AndHub Engineering PLC — dependency-free interactions.
const header = document.querySelector('.site-header');
const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

function closeMenu() {
  if (!menuButton || !mobileNav) return;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
  mobileNav.hidden = true;
  document.body.classList.remove('menu-open');
}

if (menuButton && mobileNav) {
  menuButton.addEventListener('click', () => {
    const opening = menuButton.getAttribute('aria-expanded') !== 'true';
    menuButton.setAttribute('aria-expanded', String(opening));
    menuButton.setAttribute('aria-label', opening ? 'Close navigation' : 'Open navigation');
    mobileNav.hidden = !opening;
    document.body.classList.toggle('menu-open', opening);
  });
  mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => { if (event.key === 'Escape') closeMenu(); });
  document.addEventListener('click', event => { if (!header.contains(event.target)) closeMenu(); });
  window.matchMedia('(min-width: 901px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
}

window.addEventListener('scroll', () => {
  header?.classList.toggle('header-scrolled', window.scrollY > 14);
}, { passive: true });

const filters = document.querySelectorAll('.filter-chip');
const cards = document.querySelectorAll('.project-card');
filters.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filters.forEach(chip => {
      const active = chip === button;
      chip.classList.toggle('active', active);
      chip.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => { card.hidden = filter !== 'all' && card.dataset.category !== filter; });
  });
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear().toString();

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -30px 0px', threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => {
    element.classList.add('can-reveal');
    observer.observe(element);
  });
}
