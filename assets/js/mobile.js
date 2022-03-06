const buttonMobile = document.querySelector(".botao-menu-mobile");
const menuMobileShowAndHide = document.querySelector(".container-menu-mobile");
let buttonMobileActivity = "true";
let menuMobileShowAndHideActivity = "true";
buttonMobile.addEventListener("click", () => {
    buttonMobile.classList.toggle("ativo", buttonMobileActivity);
    menuMobileShowAndHide.classList.toggle("ativo", menuMobileShowAndHideActivity);
    buttonMobileActivity = !buttonMobileActivity;
    menuMobileShowAndHideActivity = !menuMobileShowAndHideActivity;
})