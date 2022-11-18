// (() => {
//   const refs = {
//     menuBtnRef: document.querySelector('[data-menu-button]'),
//     mobileMenuRef: document.querySelector('[data-menu]'),
//   };
// const menuBtnRef = document.querySelector('[data-menu-button]');
// const mobileMenuRef = document.querySelector('[data-menu]');

//   refs.menuBtnRef.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menuBtnRef.classList.toggle('menu-toggle--is-open');
//     refs.mobileMenuRef.classList.toggle('menu--is-open');
//   }
// })();
// menuBtnRef.addEventListener('click', () => {
//   const expanded = menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

//   menuBtnRef.classList.toggle('menu-toggle--is-open');
//   menuBtnRef.setAttribute('aria-expanded', !expanded);

//   mobileMenuRef.classList.toggle('menu--is-open');
//   });
// })();

// const refs = {
//   openModalBtn: document.querySelector('[data-modal-open]'),
//   closeModalBtn: document.querySelector('[data-modal-close]'),
//   modal: document.querySelector('[data-modal]'),
// openMenuBtn: document.querySelector('[menu-open]'),
// closeMenuBtn: document.querySelector('[menu-close]'),
// menu: document.querySelector('[menu]'),
// scroll: document.querySelector('[scroll]'),
// };

// refs.openMenuBtn.addEventListener('click', toggleMenu);
// refs.closeMenuBtn.addEventListener('click', toggleMenu);
// refs.openModalBtn.addEventListener('click', toggleModal);
// refs.closeModalBtn.addEventListener('click', toggleModal);

// function toggleMenu() {
//   refs.menu.classList.toggle('backdrop--hidden');
//   refs.scroll.classList.toggle('scroll-hidden');
// }

// function toggleModal() {
//   refs.modal.classList.toggle('backdrop--hidden');
//   refs.scroll.classList.toggle('scroll-hidden');
// }
