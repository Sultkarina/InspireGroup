document.addEventListener('DOMContentLoaded', () => {
    const burgerMenuToggle = document.querySelector('.burger-menu-toggle');
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    
    burgerMenuToggle.addEventListener('click', (event) => {
        event.preventDefault();
        hamburgerMenu.classList.toggle('active');
    });
});
