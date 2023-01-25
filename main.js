const botaoMenu = document.querySelector('.menu-lateral');
const menu = document.querySelector('.nav-bar');

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('nav-bar-ativo');
})