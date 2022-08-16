import './src/styles/style.css';
import './src/index.css';
import index from './src/index';
import { today } from './src/modules/today';

document.querySelector('#app').innerHTML = index();

document.querySelector('#today').addEventListener('click', e => {
    today(e.target);
});