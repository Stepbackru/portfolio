import elemsForChangeThemeArr from '../data/theme.js';

class ChangeTheme {
  constructor() {
    this.themeButton = document.querySelector('.theme__item');
    this.logo = document.querySelector('.logo__icon');
    // this.getTheme = JSON.parse(localStorage.getItem('stepbackru')).theme;

    this.themeToggle = this.themeToggle.bind(this);
  }

  themeToggle(e) {
    this.setLocalStorageThemeInfo();
    const actualTheme = JSON.parse(localStorage.getItem('stepbackru')).theme;
    
    if (actualTheme) {
      this.changeElemsTheme();
      this.logo.src = './assets/images/lightTheme/icons/logo.svg';
    } else {
      this.changeElemsTheme();
      this.logo.src = './assets/icons/logo.svg';
    }
  }

  changeElemsTheme() {
    const items = [...document.querySelectorAll(`.${elemsForChangeThemeArr.join(',.')}`)];
    items.forEach((el) => {
      const classToChange = elemsForChangeThemeArr
        .filter((classes) => classes === [...el.classList]
          .find(elem => classes === elem));

      classToChange.forEach(elem => el.classList.toggle(`${elem}-lightTheme`));
    });
  }

  setLocalStorageThemeInfo() {
    const actualTheme = JSON.parse(localStorage.getItem('stepbackru')).theme;
    const data = JSON.stringify({
      'lang': 'en',
      'theme': !actualTheme ? 'light' : null,
    })
    localStorage.setItem('stepbackru', data);
  }

  subscribe() {
    this.themeButton.addEventListener('click', this.themeToggle);
  }
}

const changeTheme = new ChangeTheme();

export default changeTheme;
