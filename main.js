import './src/styles/style.css';
import './src/index.css';
import index from './src/index';
import { today } from './src/modules/today';
import loadoInfo from './src/modules/load-info';

document.querySelector('#app').innerHTML = index();

document.querySelector('#today').addEventListener('click', e => {
    today(e.target);
});

document.querySelectorAll('article').forEach(article => {
    article.addEventListener('click', e => {
        loadoInfo(e.target);
    });
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