// Nav scroll effect
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 24);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('nav-mobile');
hamburger?.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  document.body.style.overflow = open ? 'hidden' : '';
});
document.querySelectorAll('#nav-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});
