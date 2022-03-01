(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-language-open]"),
      menu: document.querySelector("[data-language]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-open");
    }
  })();