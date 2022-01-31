import burgerMenu from './components/burgerMenu.js';
import seasonsChange from './components/seasonsChange.js';
import translatePage from './components/translatePage.js';
import changeTheme from './components/changeTheme.js';

window.onload = () => {
  const data = JSON.stringify({
    'lang': 'en',
    'theme': null,
  });

  if (!localStorage.getItem('stepbackru')) {
    localStorage.clear();
    localStorage.setItem('stepbackru', data);
  };

  const actualTheme = JSON.parse(localStorage.getItem('stepbackru')).theme;
  actualTheme ? changeTheme.changeElemsTheme() : null;

  burgerMenu.subscribe();
  seasonsChange.subscribe();
  translatePage.subscribe();
  changeTheme.subscribe();
}
