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

/*  BACKUP PARA REDIRECIONAMENTO  */
// function irParaSecao(secao, ev) {
//     if (ev) ev.preventDefault(); // evita comportamento padrão do <a>

//     const id = String(secao);
//     const pathname = window.location.pathname;
//     const origin = window.location.origin;

//     // Se já estivermos na home (index.html ou raiz '/'), só dá scroll
//     const estaNaHome = pathname.endsWith('/index.html') || pathname === '/' || pathname === '';

//     if (estaNaHome) {
//         const el = document.getElementById(id);
//         if (el) {
//             el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//             // atualiza a hash sem recarregar (opcional)
//             history.replaceState(null, '', '#' + id);
//             return;
//         }
//     }

//     // Se não estamos na home, constrói URL absoluta para evitar problemas com base/href
//     // Tenta primeiro /index.html#id (funciona em maioria dos hosts/local)
//     const urlIndex = origin + '/index.html#' + id;
//     // Fallback: /#id (quando o site usa index como rota raiz)
//     const urlRoot = origin + '/#' + id;

//     // Usa location.assign para criar entrada no histórico (pode usar replace se preferir)
//     // Primeiro tenta index.html
//     window.location.assign(urlIndex);

//     // Como fallback caso o servidor sirva a home sem "index.html", tentamos trocar para root
//     // depois de curto intervalo (normalmente não é necessário, mas cobre alguns servidores)
//     setTimeout(() => {
//         // Se por algum motivo ainda estivermos na mesma página, tenta root
//         if (!window.location.hash || window.location.hash !== '#' + id) {
//             window.location.assign(urlRoot);
//         }
//     }, 600);
// }
