(() => {
  const refs = {
    openMenuBtn: document.querySelector('[menu-open]'),
    closeMenuBtn: document.querySelector('[menu-close]'),
    menu: document.querySelector('[menu]'),
    scroll: document.querySelector('[scroll]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('backdrop--hidden');
    refs.scroll.classList.toggle('scroll-hidden');
  }
})();
