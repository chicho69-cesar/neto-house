import './src/styles/style.css';
import './src/index.css';

import index from './src/index';
// import { message } from './src/modules/message';

document.querySelector('#app').innerHTML = index();

/* document.querySelector('#open-modal').addEventListener('click', () => {
  message();
}); */

document.body.onload = function() {
	const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
	
	if (userPrefersDark) {
		document.documentElement.classList.replace('light', 'dark');
	}
};