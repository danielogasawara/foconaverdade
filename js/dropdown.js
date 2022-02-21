// Mostrar e esconder a barra de pesquisa
document.querySelector('#botaoPesquisar').addEventListener('click', esconderOumostrar);
function esconderOumostrar() {
    let barradepesquisa = document.querySelector('#caixa-pesquisa');
    if (barradepesquisa.style.display == 'none') {
        barradepesquisa.style.display = 'flex';
    } else {
        barradepesquisa.style.display = 'none';
    }
}