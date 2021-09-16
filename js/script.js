
class Pasteleria {
    constructor(producto, precio){
        this.producto = producto;
        this.precio = precio;
        }
    

    addIva() {
        return this.precio * 1.21;
    }


}
    
    let arrayProductos = [];
    let comprobar ="";
        do{
            comprobar = prompt("¿Qué producto desea? \n ESC para salir");
            comprobar = comprobar.toUpperCase();
            if (comprobar == "ESC"){
                break;
            }else{
                productoNom = comprobar
                let productoPre = parseInt(prompt("Precio del producto"));
                arrayProductos.push(new Pasteleria(productoNom,productoPre))
            }
        }
        while(comprobar != "ESC");

        console.log(arrayProductos);

        for (let producto of arrayProductos){
            console.log("Su producto " + producto.producto + " tiene un precio total de " + producto.addIva());

        }

        ///// Desafio Complementario - órdenar por orden alfabético

        arrayProductos.sort((a, b) => a.producto.localeCompare(b.producto));
        console.log(arrayProductos)