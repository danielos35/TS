// Never cuando no devuelve algo, por ejemplo, cuando se está en un blucle infinito

let tipoNever = (x:number, y:number) => {while (true){};}; 

function never(a:number, b:number){
    while(true){};
}

// Devuelve un void

let tipoNever2 = (x:number, y:number) => {if (x != 2)while (true){};}; 

console.log(tipoNever(1,2));

