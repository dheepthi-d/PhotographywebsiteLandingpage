const hamb = document.querySelector('#mobile-menu');
const hambLinks = document.querySelector('.navbar_menu');

//Menu
const menu = () => {
    hamb.classList.toggle('is-active');
    hambLinks.classList.toggle('active');
}

hamb.addEventListener('click', menu);