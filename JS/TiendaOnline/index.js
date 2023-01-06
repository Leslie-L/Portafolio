const menuDesplegable = document.querySelector(".navbar-email");
const menuDesplegableAbierto = document.querySelector(".desktop-menu");
const menuMobil = document.querySelector("#menuMobil");
const menuMobolAbierto = document.querySelector(".mobile-menu");

menuDesplegable.addEventListener('click',showMenuDesplegable);
menuMobil.addEventListener('click',showMenuMobil);

function showMenuDesplegable() {
    menuDesplegableAbierto.classList.toggle("hide");

}
function showMenuMobil() {
    menuMobolAbierto.classList.toggle("hide");

}