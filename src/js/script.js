// Seleciona elementos
const menuBtn = document.getElementById('btn-menu-header');
const sideMenu = document.getElementById('menu-lateral');
const overlay = document.getElementById('overlay');

// Abre/fecha o menu
menuBtn.addEventListener('click', () => {
  const isOpen = sideMenu.classList.toggle('open');
  overlay.classList.toggle('show', isOpen);
  document.body.classList.toggle('menu-open', isOpen);

  // Alterna o ícone
  const icon = menuBtn.querySelector('.icon');
  if (icon) {
    icon.src = isOpen
      ? 'https://img.icons8.com/?size=36&id=8112&format=png&color=ffffff' // ícone X
      : 'https://img.icons8.com/?size=36&id=36389&format=png&color=ffffff'; // ícone menu
  }
});

// Fecha o menu ao clicar fora
overlay.addEventListener('click', closeMenu);

// Fecha o menu ao clicar em um link
document.querySelectorAll('#menu-lateral a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

function closeMenu() {
  sideMenu.classList.remove('open');
  overlay.classList.remove('show');
  document.body.classList.remove('menu-open');

  const icon = menuBtn.querySelector('.icon');
  if (icon) {
    icon.src = 'https://img.icons8.com/?size=36&id=36389&format=png&color=ffffff';
  }
}
