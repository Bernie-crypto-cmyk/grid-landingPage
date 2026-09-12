const menuButton = document.querySelector('.menu-button');
const menuList = document.querySelector('.menu-list');
const header = document.querySelector('header');
const menuButtonClose = document.querySelector('.menu-button-close');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('menuListActive');
    header.classList.toggle('header-active');
    menuButton.classList.toggle('menu-button-active');
    menuButtonClose.classList.toggle('menu-button-close-active');
});

menuButtonClose.addEventListener('click', () => {
    menuList.classList.remove('menuListActive');
    header.classList.remove('header-active');
    menuButton.classList.remove('menu-button-active');
    menuButtonClose.classList.remove('menu-button-close-active');
});