const carrito = document.querySelector("#carrito");
const fragment = document.createDocumentFragment();
// const btnsBotones = document.querySelectorAll(".card .btn");
const orderAcendente = document.querySelector(".ascendente");
const orderDescendente = document.querySelector(".descendente");
const frutas = ["Frutilla", "Banana", "Manzana"];



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

// btnsBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));




function ordenarAscendente() {
  frutas.sort();
  renderCard();
  console.log("Orden ascendente:", frutas);
}
function ordenarDescendente() {
  frutas.sort(function(a, b) {
    return b.localeCompare(a); 
  });
  renderCard();
  console.log("Orden descendente:", frutas);
}

function renderCard() {
  frutasContainer.innerHTML = "";
  frutas.forEach(fruta => {
    console.log(fruta);
    const card = document.createElement("div");
    card.className = "col-sm-4 mb-3";
    card.innerHTML = `
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">${fruta}</h5>
          <button class="btn btn-outline-primary" data-fruta="${fruta}">
            Agregar
          </button>
        </div>
      </div>
    `;
    frutasContainer.appendChild(card);
  });
  const btnsBotones = document.querySelectorAll(".card .btn");
  btnsBotones.forEach((btn) => btn.addEventListener("click", agregarAlCarrito));
}



orderAcendente.addEventListener("click", ordenarAscendente)
orderDescendente.addEventListener("click", ordenarDescendente)


renderCard();



