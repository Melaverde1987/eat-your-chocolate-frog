(() => {
  const refs = {
    openModalBtn2: document.querySelector('[data-hero-open]'),
    openModalBtn: document.querySelector('[data-modal-order-open]'),
    closeModalBtn: document.querySelector('[data-modal-order-close]'),
    modal: document.querySelector('[data-modal-order]'),
  };

  refs.openModalBtn2.addEventListener('click', toggleModal);
  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();
