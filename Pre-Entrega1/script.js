const carrito = document.querySelector("#carrito");
const fragment = document.createDocumentFragment();
const btnsBotones = document.querySelectorAll(".card .btn");

const carritoObjeto = {};

const agregarAlCarrito = (e) => {
  console.log(e.target.dataset.fruta); 

  const producto = {
    titulo: e.target.dataset.fruta,
    id: e.target.dataset.fruta,
    cantidad: 1,
  };

  if (carritoObjeto.hasOwnProperty(producto.id)) {
  
    producto.cantidad = carritoObjeto[producto.id].cantidad + 1; 
  }

  carritoObjeto[producto.titulo] = producto; 
  pintarCarrito(producto);
};


const pintarCarrito = (producto) => {
  console.log("pintar carrito", producto);

  const itemsCarrito = Object.values(carritoObjeto).map((item) => `
      <li class="list-group-item d-flex justify-content-between align-items-center">
          <span class="lead">${item.titulo}</span>
          <span class="badge bg-primary rounded-pill">${item.cantidad}</span>
      </li>`);

  const carritoHTML = itemsCarrito.join(""); 

  carrito.innerHTML = carritoHTML;
};

btnsBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));
