const menuDesplegable = document.querySelector(".navbar-email");
const menuDesplegableAbierto = document.querySelector(".desktop-menu");
const menuMobil = document.querySelector("#menuMobil");
const menuMobolAbierto = document.querySelector(".mobile-menu");
const productDetalCart = document.querySelector(".navbar-shopping-cart");
const productDetalCartAbierto = document.querySelector(".product-detail");
const cardsContainer = document.querySelector('.cards-container');
const modalDetailProduct = document.querySelector('.product-info-detail');
const cantCart = document.querySelector('#cantCart');

/*Modal detalles del producto */
const buttonCloseModal = document.querySelector('#closeModal');
const imgModal =document.querySelector('#imgModal');
const priceModal =document.querySelector('#priceModal');
const titleModal = document.querySelector('#titleModal');
const descriptionModal = document.querySelector('#descriptionModal');
const buttonAddCart = document.querySelector('#buttonAddCart');

const carrito = {

}


menuDesplegable.addEventListener('click',showMenuDesplegable);
menuMobil.addEventListener('click',showMenuMobil);
productDetalCart.addEventListener('click',showCart);
buttonCloseModal.addEventListener('click',closeModal);
function addCarrito(item) {
    
    const id = item['id'];
    if(carrito[id]){
        carrito[id] = carrito[id] + 1;
    }else{
        carrito[id] = 1;
    }
    cartNumber();
}
function cartNumber() {
    const cantidad =  Object.values(carrito);
    const total =  cantidad.reduce((acumulado,actual)=>acumulado+actual,0);
    cantCart.textContent=total;
    
}

function closeModal() {
    modalDetailProduct.classList.add('hide');
}
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

function showProd(event) {
    const item=event.srcElement.info;
    console.log(item);
    modalDetailProduct.classList.remove('hide');
    imgModal.src=item['image'];
    priceModal.textContent = '$' + item['price'];
    titleModal.textContent = item['title'];
    descriptionModal.textContent = item['description'];
    buttonAddCart.addEventListener('click',function() {
        addCarrito(item);
    });

}
async function datosProductos() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data =  await  response.json();
    for (const item of data) {
        const divPrincipal = document.createElement('div');
        divPrincipal.classList.add('product-card');

        const imagen = document.createElement('img');
        imagen.src=item['image'];
        imagen.addEventListener('click',showProd);
        imagen.info=item;

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
        figura.addEventListener('click',function() {
            addCarrito(item);
        });
        figura.info=item;

        divInfoProd.appendChild(divAgrupador);
        divInfoProd.appendChild(figura);

        divPrincipal.appendChild(imagen);
        divPrincipal.appendChild(divInfoProd);

        cardsContainer.appendChild(divPrincipal);
    }
}
cartNumber();
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
