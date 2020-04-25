var musicas = document.querySelectorAll('.musica');
ajeitaTamanho();

window.addEventListener('resize', ajeitaTamanho);

function ajeitaTamanho() {
    for (i = 0; i < musicas.length; i++) {
        musicas[i].style.height = (musicas[i].offsetWidth * 1.04) + 'px';
    }
}