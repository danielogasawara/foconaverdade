let show = true;

const botaoPesquisar = document.querySelector('.search-button');
const barraDePesquisa = document.querySelector('.container-searchbar')

botaoPesquisar.addEventListener('click', () => {
    barraDePesquisa.classList.toggle("show", show)
    show = !show;
})