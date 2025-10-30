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

const btn = document.getElementById('btnTopo');

// mostra o botão quando rolar 300px
window.addEventListener('scroll', () => {
    btn.style.display = window.scrollY > 300 ? 'flex' : 'none';
});

// ação de voltar ao topo
btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});