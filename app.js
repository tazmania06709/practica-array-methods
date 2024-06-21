const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

const carritoObjeto = {}; // Creo un objeto vacio

const agregarCarrito = (e) => { 
    // console.log(e.target.dataset);  //Obtener la informacion con e del data-name acordado
    // console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,// 
        id: e.target.dataset.fruta, // uso el dataset para obtener la informacion de data-fruta
        cantidad: 1,
    };

    if (carritoObjeto.hasOwnProperty(producto.id)) {
        producto.cantidad = carritoObjeto[producto.id].cantidad + 1;
    } 

    carritoObjeto[producto.id] = producto;

    pintarCarrito();
};

agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

const pintarCarrito = () => {
    carrito.textContent = "";

    Object.values(carritoObjeto).forEach((item) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".rounded-pill").textContent = item.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment); 
};