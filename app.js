
//Funcion Dividir
function dividir (n1,n2){
    return n1 / n2
}
//le pedimos el nombre al usuario por teclado
let nombre_usuario =prompt("Ingrese su nombre");
alert(`${nombre_usuario} vienvenido a nuestro divisor automatico\nPodra realizar 4 opraciones`);

for(let i=1; i <=4;i++){
    
let numeroUno = Number(prompt("Ingrese el primer numero a dividir "));
let numeroDos = Number(prompt("Ingrese  segundo numero que desea dividir"));
    if(numeroDos == 0 || numeroDos ==0){
        alert(`No se puede dividir por 0`)
        break;  
    }else
    alert(`Operacion Nro:${i}\n${numeroUno} / ${numeroDos} = ${dividir(numeroUno,numeroDos)}`)
    
    
} 
alert(`${nombre_usuario},Gracias por utilizar nuestro divisor`);


//Cargando productos DOBAL MUEBLES INDUSTRIALES

class Producto{
    constructor(codigo,nombre,color,madera, medidas,precio,){
        this.codigo=codigo;
        this.nombre=nombre;
        this.color=color;
        this.madera=madera;
        this.medidas=medidas;
        this.precio=precio;
        
        
    }

}

let myArray = []



let prod1 = new Producto (01,"MESA DE LUZ","NEGRO/BLANCO","ENCHAPADA EN PARAISO","50X30X35",49200);
myArray.push(prod1)
let prod2 = new Producto (02,"MESA RATONA ELEVABLE","NEGRO/BLANCO","ENCHAPADA EN PARAISO","85X50X45",51200);
myArray.push(prod2)
let prod3 = new Producto (03,"RACK TV","NEGRO/BLANCO","MACIZA EN LAUREL HIDROLAQUEADA","140X40X60",148200);
myArray.push(prod3)
let prod4 = new Producto (04,"BARRA EDSAYUNADORA","NEGRO/BLANCO","MACIZA DE PARAIZO","120X40X95",103200);
myArray.push(prod4)
let prod5 = new Producto (05,"MESA COMEDOR","NEGRO/BLANCO","MACIZA DE PARAIZO HIDROLAQUEADO","140X80X75",124200);
myArray.push(prod5)
let prod6 = new Producto (06,"BARRA MOVIL","NEGRO","MACIZA GUAYUBIRA HIDROLAQUEADA","110X45X95",145200); 
myArray.push(prod6)


myArray.forEach(product =>{
    console.log(product)
});

console.log(Array.isArray(myArray));
console.log(myArray.length);

//recorremos productos
const precioDeLosProductos = myArray.map(dato=>dato.precio);
console.log(precioDeLosProductos);
//array de 50% de descuento
const preciosConDescuento = myArray.map((dato)=>{
    return{
        nombre: dato.nombre,
        precio:dato.precio /50
    }
})
//suma total de todos los productos
console.log(preciosConDescuento);

const valorInicial=0

const sumaprecios= precioDeLosProductos.reduce((acumulador , elemento)=>acumulador+elemento,valorInicial);
console.log(`La suma total de los de los precios de todos los productos es: $${sumaprecios}`);






/* for (let productNumber = 0; productNumber < 10; productNumber ++) {
    const prod = new Productos(productNumber, `Producto ${productNumber}`, "", 1000 * (productNumber + 1));
    myArray.push(prod);
}

 console.log(myArray)

myArray.forEach(product => {
    console.log(product.nombre)
}); */