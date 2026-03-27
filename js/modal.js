(() => {
  const refs = {
    openModalBtnHeader: ".header-btn",
    openModalBtnAbout: ".about-btn",
    openModalBtn_prices: ".prices-btn",
    closeModalBtn: "[data-modal-close]",
    modal: "[data-modal]",
  };

  function addListeners(selectors, event, handler) {
    Object.values(selectors).forEach(selector => {
      if (selector === selectors.modal) return;
        document.querySelector(selector).addEventListener(event, handler);
    });
  }

  function toggleModal() {
    document.querySelector(refs.modal).classList.toggle("is-hidden");
  }

  addListeners(refs, "click", toggleModal);
})();