// Son funciones que pueden recibir otra función como parametro


type suma = (x:number, y:number)=>number; 

function sumar(x:number, y:number, numeros:suma){

    return numeros(x,y)

}

console.log(sumar(2,3,(x:number, y:number)=>{return x*y}));

