/* 
//funcion dividir
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
 */


/* 
Mesa ratona elevable
Mesa de arrime
Estantería con cajón
Mesa paraíso
Rack estilo industrial
Mesa ratona elevadle / con espacio de guardado */


class Productos{
    constructor(codigo,nombre, medidas,precio){
        this.codigo=codigo;
        this.nombre=nombre
        this.medidas=medidas;
        this.precio=precio;
        
    }

    sumaIva(){return this.precio*1.21}
}

const prod1 = new Productos (01,"Mesa ratona elevadle","",50000);
const prod2 = new Productos (02,"Mesa de arrime","",45000);
const prod3 = new Productos (03,"Estantería con cajón","",150000);
const prod4 = new Productos (04,"Mesa paraíso","",20000);
const prod5 = new Productos (05,"Rack estilo industrial","",40000);
const prod6 = new Productos (06,"Mesa ratona elevadle","",560000);

console.log(prod2.nombre)
console.log(prod1.sumaIva(prod1))

//console.log(Productos.length)

