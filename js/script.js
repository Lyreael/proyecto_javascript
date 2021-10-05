/*const baseCakes = [
    {
        id: 1,
        name: "Vaimora",
        price: 540,
    },
    {
        id: 2,
        name: "Arcoiris",
        price: 580,
    },
    {
        id: 3,
        name: "Chocoloca",
        price: 560,
    },

];

let cart = [];
let total = 0;

//==============// */
 
/*
 //constructor
class Cakes {
  constructor(producto, precio){
      this.producto = producto;
      this.precio = precio;
      }
  

  addShipp() {
      return this.precio + 250;
  }


}
  
const vaimora = new Cakes("Vaimora", 550);
const chocoloca = new Cakes("Chocoloca", 500);
const arco = new Cakes("Arcoiris", 450);
let elProducto = null;

  let arrayProductos = [vaimora, chocoloca, arco];
  let comprobar ="";
      do{
          comprobar = prompt("Ingrese su torta a pedido. \n ESC para salir");
          comprobar = comprobar.toUpperCase();
          if (comprobar == "ESC"){
              break;
          }else{
              productoNom = comprobar
              
              elProducto = arrayProductos.find(prod=>prod.producto.toUpperCase() == productoNom);
              console.log(elProducto)
          }
      }
      while(comprobar != "ESC");


      for (let producto of arrayProductos){
          console.log("Su producto " + elProducto.producto + " tiene un precio total de " + elProducto.addShipp() + " con el envío incluído");

      }

      ///// Orden alfabético
  
      arrayProductos.sort((a, b) => a.producto.localeCompare(b.producto));
      console.log(arrayProductos)


/// DOM

for (let producto of arrayProductos) {
    let contenedor = document.createElement("div");
    contenedor.innerHTML = `<h3>Su elección</h3>
    <p class="card-text">Torta :  ${elProducto.producto}</p>
    <p class="card-text">Precio: ${elProducto.precio}</p>vaimora`;
    document.body.appendChild(contenedor);
  }



/// event

function clickMe() {
    alert("agregaste un producto al carrito")
    
}


let p1 = 540;
let p2= 150 ;

document.getElementById("precioEnvio").addEventListener("click", function() {
    myFunction(p1, p2);
});

function myFunction(a, b) {
    document.getElementById("mostrarPrecio").innerHTML = a + b;
}
*/
//  ==================================================  //

//////

