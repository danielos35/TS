
// Sintaxis basica
    // Let declara la variable de manera interna, mientras que var vuelve la variable global.
for(let i:number = 0; i<5; i++){

    console.log('numero: '+ i);
    
}


// Para Array

let arr=[1,2,3,4,5]

for (let i of arr){

    console.log(arr[i-1]);
    
}

// Para Array 2

for (let i in arr){

    console.log(arr[i]);
    
}


// Strings Ciclo, y obtener posición del caracter

let nombre:string = 'Daniel'; 

console.log(nombre.slice(-2));

for (let j of nombre){

    console.log(j);
    
}