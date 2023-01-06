const menuDesplegable = document.querySelector(".navbar-email");
const menuDesplegableAbierto = document.querySelector(".desktop-menu");
const menuMobil = document.querySelector("#menuMobil");
const menuMobolAbierto = document.querySelector(".mobile-menu");
const productDetalCart = document.querySelector(".navbar-shopping-cart");
const productDetalCartAbierto = document.querySelector(".product-detail");

menuDesplegable.addEventListener('click',showMenuDesplegable);
menuMobil.addEventListener('click',showMenuMobil);
productDetalCart.addEventListener('click',showCart);

function showMenuDesplegable() {
    menuDesplegableAbierto.classList.toggle("hide");
    if(!productDetalCartAbierto.classList.contains("hide"))
        productDetalCartAbierto.classList.add("hide");
}
function showMenuMobil() {
    menuMobolAbierto.classList.toggle("hide");
}
function showCart() {
    productDetalCartAbierto.classList.toggle("hide");
    if(!menuDesplegableAbierto.classList.contains("hide"))
        menuDesplegableAbierto.classList.add("hide");
    if(!menuMobolAbierto.classList.contains("hide"))
        menuMobolAbierto.classList.add("hide");
}