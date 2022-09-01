
//Cargando productos DOBAL MUEBLES INDUSTRIALES

class Product{
    constructor(mueble,precio,){
    this.mueble = mueble,
    this.precio = precio;
    }
}

let compras = [];

alert("Ingrese 4 productos")
for(let i=0;i<4;i++){

    let producto = new Product()
    alert(`Producto ${i + 1} de 4`);

    producto.mueble = prompt("Nombre:");
    producto.precio = parseInt(prompt("Precio:"));
    compras.push(producto);
    
}

let mensajeFinal = "Usted ingreso\n";
let mensaje = "";
compras.forEach(producto => {
    mensaje += `${producto.mueble} a $${producto.precio}\n`;
});

alert(mensajeFinal + mensaje );

console.log(compras)

const guardarLocal =(mueble,precio) => {localStorage.setItem(mueble,precio)};
//Almacenar producto por producto
for(const producto of compras){
    guardarLocal(producto.id,JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaproductos",JSON.stringify(compras));