class BurgerMenu {
  constructor() {
    this.menu = document.querySelector('.menu');  
    this.burgerBtn = document.querySelector('.burger__btn');
    this.menuLinks = [...document.querySelectorAll('.menu__link')];
    
    this.menuToggle = this.menuToggle.bind(this);
  }

  menuToggle() {
    this.burgerBtn.classList.toggle('burger__btn_open');
    this.menu.classList.toggle('menu_open');
  }

  subscribe() {
    this.burgerBtn.addEventListener('click', this.menuToggle);
    this.menuLinks.forEach((el) => {
      el.addEventListener('click', this.menuToggle)
    })
  }
}

const burgerMenu = new BurgerMenu();

export default burgerMenu;
