(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-explore-open]"),
      closeModalBtn: document.querySelector("[data-modal-explore-close]"),
      modal: document.querySelector("[data-modal-explore]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();