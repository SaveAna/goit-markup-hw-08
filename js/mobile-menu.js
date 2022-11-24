(() => {
  const refs = {
    toggleMenuBtn: document.querySelector('[toggle]'),
    menu: document.querySelector('[menu]'),
    scroll: document.querySelector('[scroll]'),
  };

  refs.toggleMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('menu--open');
    refs.toggleMenuBtn.classList.toggle('burger-toggle--enabled');
    refs.scroll.classList.toggle('scroll-hidden');
    refs.toggleMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  }

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    refs.menu.classList.remove('menu--open');
    refs.scroll.classList.remove('scroll-hidden');
    refs.toggleMenuBtn.classList.remove('burger-toggle--enabled');
    refs.toggleMenuBtn.setAttribute('aria-expanded', false);
  });
})();
