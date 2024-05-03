const bodyHtml = document.querySelector('body');
const linksNav = document.querySelectorAll('.link')

class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.mobileMenu.addEventListener("click", () => this.handleClick());
    this.addLinkClickEvent();
  }

  handleClick() {
    [this.navList, this.mobileMenu, bodyHtml].forEach(elemento => elemento.classList.toggle(this.activeClass));
    // this.animateLinks(); // Se necessário, você pode chamar a função de animação aqui
  }

  addLinkClickEvent() {
    this.navLinks.forEach(link => {
      link.addEventListener("click", () => {
        this.removeActiveFromAll();
      });
    });
  }

  removeActiveFromAll() {
    [this.navList, this.mobileMenu, bodyHtml].forEach(elemento => elemento.classList.remove(this.activeClass));
    // Lógica adicional aqui, se necessário
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
