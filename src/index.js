import './styles.css';

import itemsTemplate from '../templates/menu-template.hbs';

import menu from './menu.json';

const markup = itemsTemplate(menu);

const menuList = document.querySelector('.js-menu');


menuList.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.querySelector('body');




const switcher = document.querySelector('#theme-switch-toggle');
switcher.addEventListener('change', switchTheme);

function switchTheme() {
    if (body.className !== Theme.DARK) {
        switchToDark();
        return body.className
    };
    if (body.className !== Theme.LIGHT) {
        switchToLight();
        return body.className
    };
    
};

const choosedTheme = localStorage.getItem('theme');
body.classList.add(choosedTheme);
if (body.className === Theme.DARK) {
     switcher.setAttribute('checked', true);
};

function switchToLight() {
    body.classList.remove(Theme.DARK)
    body.classList.add(Theme.LIGHT);
    localStorage.setItem('theme', body.className);
};



function switchToDark() {
    body.classList.remove(Theme.LIGHT);
    body.classList.add(Theme.DARK);
    localStorage.setItem('theme', body.className);
};

