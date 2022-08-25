
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

//suma total de todos los productos

const valorInicial=0
const sumaprecios= precioDeLosProductos.reduce((acumulador , elemento)=>acumulador+elemento,valorInicial);
console.log(`La suma total de los de los precios de todos los productos es: $${sumaprecios}`);
 