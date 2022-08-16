import './src/styles/style.css';
import './src/index.css';
import index from './src/index';
import { today } from './src/modules/today';

document.querySelector('#app').innerHTML = index();

document.querySelector('#today').addEventListener('click', e => {
    today(e.target);
});

document.body.onload = function() {
    const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (userPrefersDark) {
        document.documentElement.classList.replace('light', 'dark');
    }

    document.querySelector('#logo').addEventListener('click', () => {
        location.reload();
    });
};