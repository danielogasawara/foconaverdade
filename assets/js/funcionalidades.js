let show = true;
// Controla o aparecimento e a ocultação da barra de pesquisa
const botaoPesquisar = document.querySelector(".search-button");
const barraDePesquisa = document.querySelector(".container-searchbar");

botaoPesquisar.addEventListener("click", () => {
  barraDePesquisa.classList.toggle("show", show);
  show = !show;
});
// Voltar ao topo
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
