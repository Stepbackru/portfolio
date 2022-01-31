import translateArr from '../data/translate.js';

class TranslatePage {
  constructor() {
    this.langBlock = document.querySelector('.lang');
    this.langBtns = [...this.langBlock.childNodes].filter((el) => el.dataset);

    this.languageToggle = this.languageToggle.bind(this);
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  languageToggle(e) {
    if (e.target.classList.contains('lang__item')) {
      this.changeLanguage(e)
      this.activeLangBtnToggle(e);
    }
  }

  changeLanguage(e) {
    const dataLang = e.target.dataset.lang;
    const basicLang = dataLang === 'en' ? 'ru' : 'en';
    const pageContent = [...document.querySelectorAll('body *')]
      .filter((el) => !el.children.length && Object.values(translateArr[basicLang])
        .find(item => item === el.textContent));
    const keysArr = pageContent.map((el) => {
      return this.findKeyByValue(translateArr[basicLang], el.textContent);
    });

    pageContent.forEach((el, ind) => 
      el.textContent = translateArr[dataLang][keysArr[ind]]);
    this.setLocalStorageThemeInfo(dataLang);
  }

  renderPageLanguage() {
    const dataLang = JSON.parse(localStorage.getItem('stepbackru')).lang;
    const basicLang = dataLang === 'en' ? 'ru' : 'en';
    const pageContent = [...document.querySelectorAll('body *')]
      .filter((el) => !el.children.length && Object.values(translateArr[basicLang])
        .find(item => item === el.textContent));
    const keysArr = pageContent.map((el) => {
      return this.findKeyByValue(translateArr[basicLang], el.textContent);
    });

    pageContent.forEach((el, ind) => 
      el.textContent = translateArr[dataLang][keysArr[ind]]);
  }
  
  setLocalStorageThemeInfo(dataLang) {
    const actualTheme = JSON.parse(localStorage.getItem('stepbackru')).theme;
    const data = JSON.stringify({
      'lang': dataLang === 'en' ? 'en' : 'ru',
      'theme': !actualTheme ? null : actualTheme,
    })
    localStorage.setItem('stepbackru', data);
  }

  findKeyByValue(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }

  activeLangBtnToggle(e) {
    const getTheme = JSON.parse(localStorage.getItem('stepbackru')).theme;
    this.langBtns.forEach((el) => { el.classList.remove(`${!getTheme ? 'lang__item_active' : 'lang__item_active-lightTheme'}`) });
    e.target.classList.add(`${!getTheme ? 'lang__item_active' : 'lang__item_active-lightTheme'}`);
  }

  subscribe() {
    this.langBlock.addEventListener('click', this.languageToggle);
  }
}

const translatePage = new TranslatePage();

export default translatePage;
