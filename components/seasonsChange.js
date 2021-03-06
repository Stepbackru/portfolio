class SeasonsChange {
  constructor() {
    this.filterBlock = document.querySelector('.portfolio__filter');
    this.filterBtns = [...this.filterBlock.childNodes].filter((el) => el.dataset);
    this.portfolioImages = [...document.querySelectorAll('.portfolio__image')];
    
    this.seasonToggle = this.seasonToggle.bind(this);
    this.activeFilterBtnToggle = this.activeFilterBtnToggle.bind(this);
  }

  seasonToggle(e) {
    if (e.target.hasAttribute('data-season')) {
      this.portfolioImages.forEach((el, ind) => {
        el.src = `./assets/images/portfolio/seasons/${e.target.dataset.season}/${ind + 1}.jpg`;
      });
      this.activeFilterBtnToggle(e);
    }
  }

  activeFilterBtnToggle(e) {
    const getTheme = JSON.parse(localStorage.getItem('stepbackru')).theme;
    this.filterBtns.forEach((el) => { el.classList.remove(`${!getTheme ? 'btn_active' : 'btn_active-lightTheme'}`) });
    e.target.classList.add(`${!getTheme ? 'btn_active' : 'btn_active-lightTheme'}`);
  }

  subscribe() {
    this.filterBlock.addEventListener('click', this.seasonToggle);
  }
}

const seasonsChange = new SeasonsChange();

export default seasonsChange;
