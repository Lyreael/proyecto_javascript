const containerRows = document.querySelector("#contenedor-rows");

let cartProducts = [];

fetch("../js/products.json")
  .then((response) => response.json())
  .then((data) => {
    renderProducts(data);
  });

(function () {
  $(document).click(function () {
    let $item = $("#cart");
    if ($item.hasClass("active")) {
      $item.removeClass("active");
    }
  });

  $("#cart-icon").click(function (e) {
    e.stopPropagation();
    $("#cart").toggleClass("active");
  });
})();



function renderProducts(products) {
  //creo la row
  let row = document.createElement("div");

  row.innerHTML = '<div id="row1" class="row"></div>';
  //agrego la row al container
  containerRows.appendChild(row);

  row = document.querySelector("#row1");

  products.forEach((product) => {
    const { imgsrc, title, description, price, id } = product;

    row.innerHTML += `
            <div class="col-sm-12 col-lg-4 col-md-6 mb-4">
                <div class="hover-us card h-100">
                    <a href="#">
                        <img src="${imgsrc}" class=" card-img-top" alt="Torta de Vainilla y Moras">
                    </a>
                    <div class="card-body">
                        <ul class="list-unstyled d-flex justify-content-between">
                            <li>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                            <i class="text-warning fa fa-star"></i>
                        </li>
                            <li class=" text-right price-style">$${price}</li>
                        </ul>
                        <h4 class="h4 text-decoration-none">${title}</h4> 
                        <p class="card-text">
                            ${description}
                        </p>
                        <button id="btn_${id}" class="btn btn-primary"> Comprar</button>
                        </div>
                </div>
            </div>
            </div>
            `;
  });
  products.forEach((product) => {
    const btnProd = document.querySelector("#btn_" + product.id);

    btnProd.addEventListener("click", (ee) => {
      console.log(product);
      cartProducts.push(product);
    });
  });
}

const carrito = document.querySelector("#cart");
const contenedorCarrito = document.querySelector("#cart-list tbody");
const vaciarCarritoBtn = document.querySelector("#cart-empty");




// Boton Scroll back to Top
//Obtenemos el boton
let mybutton = document.querySelector(".btn-btt");
// Cuando el usuario scrollea 200px abajo, se muestra boton de back to top
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// CUando se clickea el boton, se scrollea al top del documento
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
