(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-language-tab-open]"),
      menu: document.querySelector("[data-language-tab]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-open");
    }
  })();