const menuDesplegable = document.querySelector(".navbar-email");
const menuDesplegableAbierto = document.querySelector(".desktop-menu");


menuDesplegable.addEventListener('click',showMenuDesplegable);


function showMenuDesplegable() {
    menuDesplegableAbierto.classList.toggle("hide");
}