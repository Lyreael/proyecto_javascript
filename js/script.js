const containerRows = document.querySelector("#contenedor-rows");

let cartProducts =
  (window.localStorage.getItem("cartProducts") &&
    JSON.parse(window.localStorage.getItem("cartProducts"))) ||
  [];
// Carga de datos desde API dummy
fetch("../js/products.json")
  .then((response) => response.json())
  .then((data) => {
    renderProducts(data);
  });

//  Addlisteners
(function () {
  $(document).click(function (e) {
    if (!e.target.className.includes("cart")) {
      let $item = $("#cart");
      if ($item.hasClass("active")) {
        $item.removeClass("active");
      }
    }
  });

  $("#cart-icon").click(function (e) {
    e.stopPropagation();
    $("#cart").toggleClass("active");
  });

  $("#cart-empty").click(function (e) {
    e.stopPropagation();
    cartProducts = [];
    renderCartItems();
  });
})();

// Rederiza los productos
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
      //agregar producto a cartProducts si este todavia no esta en el carrito de compras
      if (!cartProducts.some((p) => p.id == product.id)) {
        let productToAdd  = Object.assign({}, product);
        productToAdd.quantity = 1;
        cartProducts.push(productToAdd);
        //sino, incrementa la cantidad del producto
      } else {
        cartProducts = cartProducts.map((p) => {
          if (p.id == product.id) {
            if (!p.quantity) {
              p.quantity = 1;
            } else {
              p.quantity++;
            }
            p.subtotal = p.quantity * p.price;
          }
          return p;
        });
      }
      renderCartItems();
    });
  });
}

function renderCartItems() {
  let containerItems = document.querySelector("#cart-item-container");

  let innerHTML = "";
  cartProducts.forEach((product) => {
    const { imgsrc, title, description, price, id } = product;
    let quantity = product.quantity || 1;
    let subtotal = product.subtotal || price;
    innerHTML += ` 
    <div id="cart-item-container" class="cart container">
    <div class="row cart padCart">
        <div class="cart col-3"><img class="cart imgCart"  src="${imgsrc}" alt=""></div>
        <div class="cart col-3"><p class="cart titlecart alCent text-capitalize">${title}</p></div>
        <div class="cart col-2"><p class="cart titlecart alCent text-capitalize">${quantity}</p></div>
        <div class="cart col-3"> <p class="cart titlecart alCent text-capitalize">${subtotal}</p></div>
        <div class="cart col-1"><a class="borrar text-decoration-none" style="cursor:pointer" id="borrar_${id}">x</a></div>
  
    </div>
  </div>
    `;
  });
  containerItems.innerHTML = innerHTML;

  cartProducts.forEach((product) => {
    const btnBorrar = document.querySelector("#borrar_" + product.id);

    btnBorrar.addEventListener("click", (e) => {
      cartProducts = cartProducts.filter((p) => p.id != product.id);
      renderCartItems();
      e.stopPropagation();
    });
  });

  window.localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
}

renderCartItems();

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
