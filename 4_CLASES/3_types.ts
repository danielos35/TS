// Las interfaces se puede "emular" por medio de tipos
type animal2 = 

{
    nombre:string,
    edad:number, 
    datos2():void

}

// Dentro de un objeto, podemos utilizar la palabra reservada this.variable

let jirafa:animal2 ={

    nombre: "jirafita", 
    edad:12, 
    datos2(){

        console.log(this.nombre);
        
    }
}

console.log(jirafa.nombre);
