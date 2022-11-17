(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    openMenuBtn: document.querySelector('[menu-open]'),
    closeMenuBtn: document.querySelector('[menu-close]'),
    menu: document.querySelector('[menu]'),
    scroll: document.querySelector('[scroll]'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleMenu() {
    refs.menu.classList.toggle('backdrop--hidden');
    refs.scroll.classList.toggle('scroll-hidden');
  }

  function toggleModal() {
    refs.modal.classList.toggle('backdrop--hidden');
    refs.scroll.classList.toggle('scroll-hidden');
  }
})();
