import elemsForChangeThemeArr from '../data/theme.js';

class ChangeTheme {
  constructor() {
    this.themeButton = document.querySelector('.theme__item');
    this.logo = document.querySelector('.logo__icon');

    this.themeToggle = this.themeToggle.bind(this);
  }

  themeToggle(e) {
    const items = [...document.querySelectorAll(`.${elemsForChangeThemeArr.join(',.')}`)];
    items.forEach((el) => {
      const classToChange = elemsForChangeThemeArr
        .filter((classes) => classes === [...el.classList]
          .find(elem => classes === elem));

      console.log(classToChange)
      classToChange.forEach(elem => el.classList.toggle(`${elem}-lightTheme`));
    });

    if (e.target.classList.contains('theme__item-lightTheme')) {
      this.logo.src = './assets/images/lightTheme/icons/logo.svg';
    } else {
      this.logo.src = './assets/icons/logo.svg';
    }
  }

  subscribe() {
    this.themeButton.addEventListener('click', this.themeToggle);
  }
}

const changeTheme = new ChangeTheme();

export default changeTheme;
