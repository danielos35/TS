
let prod = 5895; 
let numeros = [0,1]
let i =2; 
let salida = []
let contador = 0;
// Fibonacci con arreglos

while(i<prod){
    numeros [i] = numeros [i-2] + numeros [i-1]; 
    i++
    
    console.log(numeros[contador])
    if((numeros[contador]*numeros[contador-1]) === prod){
        salida.push(numeros[contador-1]); 
        salida.push(numeros[contador]);
        salida.push(true);
        break;
    }else if((numeros[contador]*numeros[contador-1])>prod){
        salida.push(numeros[contador-1]); 
        salida.push(numeros[contador]);
        salida.push(false);
        break;
    }
    contador++;
    
}

console.log(numeros);
console.log(salida);








// Enlace 


/* 

https://www.codewars.com/kata/5541f58a944b85ce6d00006a/solutions/javascript



*/