
toggleMenu = () => (menu.classList.toggle('menu--open'));
console.log(toggleMenu)

const menu = document.querySelector('.menu');
console.log(menu);

const menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', toggleMenu);
console.log(menuButton);
