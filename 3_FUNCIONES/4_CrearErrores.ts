
// CREAR UN ERROR 

let errorCreado = (texto:string)=>{

    throw new Error(texto); 

}

console.log(errorCreado("ErrorPropio"));

// CREAR ERROR CON FUNCIONES TRADICIONALES 

function error2(texto: string){

    throw new Error(texto);
}

console.log(error2('Error2'));


