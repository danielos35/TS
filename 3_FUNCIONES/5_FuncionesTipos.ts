
// Podemos definir una función como un tipo, así como lo podemos hacer con un tipo de dato

function multiplicar(x:number, y:number){

    return x*y; 

}

let multiplicarVar = multiplicar;

console.log( multiplicarVar(2,3));


// ..Prueba

function concString(a:string, b:string){

        return a+b;
}



//.......Podemos crear variables que tengan requisitos minimos con los cuales cumplir...........

let multiplicarDosNumeros:(x:number, y:number) => number; 

    //Se le puede asignar sin ningún problema, ya que la función cumple con los argumentos de entrada y de salida.

multiplicarDosNumeros = multiplicar; 

// Ambas funciones tienene la misma utilidad. 

console.log(multiplicarDosNumeros(2,3));
console.log(multiplicar(2,3));



// No la podemos asignar, debido a que no cumple con los argumentos de entrada ni de salida declarados en la linea 26

// multiplicarDosNumeros = concString; 





