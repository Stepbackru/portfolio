import burgerMenu from './components/burgerMenu.js';
import seasonsChange from './components/seasonsChange.js';

window.onload = () => {
  burgerMenu.subscribe();
  seasonsChange.subscribe();
}
