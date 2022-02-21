// Mostrar e esconder a barra de pesquisa
document.querySelector('#botaoPesquisar').addEventListener('click', function(){
    const caixaPesquisa = document.querySelector('#caixa-pesquisa');
    if (caixaPesquisa.style.display != 'flex') {
        caixaPesquisa.style.display = 'flex';
    } else {
        caixaPesquisa.style.display = 'none';
    }
});