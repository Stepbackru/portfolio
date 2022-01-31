import elemsForChangeThemeArr from '../data/theme.js';

class ChangeTheme {
  constructor() {
    this.themeButton = document.querySelector('.theme__item');

    this.themeToggle = this.themeToggle.bind(this);
  }

  themeToggle(e) {
    elemsForChangeThemeArr.forEach((el) => {
      const item = document.querySelector(`.${el}`);

      item.classList.toggle(`${el}-lightTheme`);
    });
  }

  subscribe() {
    this.themeButton.addEventListener('click', this.themeToggle);
  }
}

const changeTheme = new ChangeTheme();

export default changeTheme;
