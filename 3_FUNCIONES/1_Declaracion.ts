
// Declaración de una función
// Despues de los parentesis se puede declarar que devolverá la función

function sumar(a:number, b:number):number{

    return a+b;

}

console.log(sumar(2,3));

// Funcione sin parametros ni retorno

function noItems(x:string){
    
    console.log(x);
        
}


noItems('HollaWord')


// Se pueden llamar funciones dentro de las funciones

function sumarYMultiplicar(a:number, b:number):number{

    return (sumar(a,b))*4

}

console.log(sumarYMultiplicar(3,4));

