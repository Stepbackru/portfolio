import translateArr from '../data/translate.js';

class TranslatePage {
  constructor() {
    this.langBlock = document.querySelector('.lang');
    
    this.languageToggle = this.languageToggle.bind(this);
  }

  languageToggle(e) {
    if (e.target.classList.contains('lang__item')) {
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
    }
  }

  findKeyByValue(obj, value) {
    return Object.keys(obj).find(key => obj[key] === value);
  }

  subscribe() {
    this.langBlock.addEventListener('click', this.languageToggle);
  }
}

const translatePage = new TranslatePage();

export default translatePage;
