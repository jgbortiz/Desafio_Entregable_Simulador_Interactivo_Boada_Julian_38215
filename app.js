
//funcion dividir
function dividir (n1,n2){
    return n1 / n2
}
//le pedimos el nombre al usuario por teclado
let nombre_usuario =prompt("Ingrese su nombre");
alert(`${nombre_usuario} vienvenido a nuestro divisor automatico\nPodra realizar 4 opraciones`);

for(let i=1; i <=4;i++){
    
let numeroUno = Number(prompt("Ingrese un numero a dividir \n del 1 al 10\n",));
let numeroDos = Number(prompt("Ingrese  segundo numeroque desea dividir"));
    
    if(numeroDos == 0 || numeroDos ==0){
        alert(`No se puede dividir por 0`)
        break;  
    }else
    alert(`Operacion Nro:${i}\n${numeroUno} / ${numeroDos} = ${dividir(numeroUno,numeroDos)}`)
    
    
} 
alert(`${nombre_usuario},Gracias por utilizar nuestro divisor`);



