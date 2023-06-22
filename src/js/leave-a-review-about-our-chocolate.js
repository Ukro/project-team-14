(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-reviews-modal-open]"),
    closeModalBtn: document.querySelector("[data-reviews-modal-close]"),
    modal: document.querySelector("[data-reviews-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();