const menuDesplegable = document.querySelector(".navbar-email");
const menuDesplegableAbierto = document.querySelector(".desktop-menu");
const menuMobil = document.querySelector("#menuMobil");
const menuMobolAbierto = document.querySelector(".mobile-menu");
const productDetalCart = document.querySelector(".navbar-shopping-cart");
const productDetalCartAbierto = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container');

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

async function datosProductos() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data =  await  response.json();
    for (const item of data) {
        const divPrincipal = document.createElement('div');
        divPrincipal.classList.add('product-card');

        const imagen = document.createElement('img');
        imagen.src=item['image'];

        const divInfoProd = document.createElement('div');
        divInfoProd.classList.add('product-info');

        const divAgrupador =  document.createElement('div');
        const pPrice = document.createElement('p');
        pPrice.textContent = '$' + item['price'];
        const pTitel = document.createElement('p');
        pTitel.textContent =  item['title'];
        divAgrupador.appendChild(pPrice);
        divAgrupador.appendChild(pTitel)

        const figura = document.createElement('figure');
        const imgIcon = document.createElement('img');
        imgIcon.src="./icons/bt_add_to_cart.svg";
        figura.appendChild(imgIcon);

        divInfoProd.appendChild(divAgrupador);
        divInfoProd.appendChild(figura);

        divPrincipal.appendChild(imagen);
        divPrincipal.appendChild(divInfoProd);

        cardsContainer.appendChild(divPrincipal);
    }
}
datosProductos();

/*
 <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
 </div>


*/
