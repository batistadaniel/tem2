const menuBtn = document.getElementById('toggleMenu');
const sideMenu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const icon = menuBtn.querySelector('.icon');

menuBtn.addEventListener('click', () => {
    const isOpen = sideMenu.classList.toggle('open');
    overlay.classList.toggle('show', isOpen);

    // troca o ícone
    icon.src = isOpen
        ? 'https://img.icons8.com/?size=28&id=8112&format=png&color=eb4034' // X
        : 'https://img.icons8.com/?size=30&id=36389&format=png&color=eb4034'; // menu
});

overlay.addEventListener('click', closeMenu);
sideMenu.addEventListener('click', closeMenu)
document.querySelectorAll('#menu a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

function closeMenu() {
    sideMenu.classList.remove('open');
    overlay.classList.remove('show');
    icon.src = 'https://img.icons8.com/?size=28&id=36389&format=png&color=eb4034';
}
