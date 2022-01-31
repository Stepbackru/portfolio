import burgerMenu from './components/burgerMenu.js';
import seasonsChange from './components/seasonsChange.js';
import translatePage from './components/translatePage.js';
import changeTheme from './components/changeTheme.js';

window.onload = () => {
  burgerMenu.subscribe();
  seasonsChange.subscribe();
  translatePage.subscribe();
  changeTheme.subscribe();
}
