  (() => {
    const refs = {
      openMobileMenuBtn: document.querySelector("[data-menu-open]"),
      closeMobileMenuBtn: document.querySelector("[data-menu-close]"),
      mobileMenu: document.querySelector("[data-menu]"),
    };
  
    refs.openMobileMenuBtn.addEventListener("click", toggleMobileMenu);
    refs.closeMobileMenuBtn.addEventListener("click", toggleMobileMenu);
  
    function toggleMobileMenu() {
      refs.mobileMenu.classList.toggle("is-open");
    }
  })();
 
  