const carrito = document.querySelector("#carrito");
const template = document.querySelector("#template");
const fragment = document.createDocumentFragment();
const agregar = document.querySelectorAll(".card button");

const carritoObjeto = []; // Creo un array  vacio

const pintarCarrito = (array) => {
    carrito.textContent = "";

   array.forEach((p) => {
        const clone = template.content.firstElementChild.cloneNode(true);
        clone.querySelector(".lead").textContent = p.titulo;
        clone.querySelector(".rounded-pill").textContent = p.cantidad;
        fragment.appendChild(clone);
    });
    carrito.appendChild(fragment);  
};

const agregarCarrito = (e) => { 
    // console.log(e.target.dataset);  //Obtener la informacion con e del data-name acordado
    // console.log(e.target.dataset.fruta);

    const producto = {
        titulo: e.target.dataset.fruta,// 
        id: e.target.dataset.fruta, // uso el dataset para obtener la informacion de data-fruta
        cantidad: 1,
    };

    const index = carritoObjeto.findIndex((p) => p.id === producto.id);

    //console.log(index);
     
    if(index === -1){
        carritoObjeto.push(producto);
    }else{
        carritoObjeto[index].cantidad++;
    }

   // console.log(carritoObjeto);

   pintarCarrito(carritoObjeto);
};


agregar.forEach((boton) => boton.addEventListener("click", agregarCarrito));

