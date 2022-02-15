// Son utilizadas para agrupar atributos y metodos de un conjunto de clases. 
// Los metodos abstractos se implementan en las clases que lo heredan, mas no en las que se definen
// La diferencia de las interfaces y los metodos abstractos, es que en las interfaces no puedes definir los metodos, en las clases abstractas si se pueden definir  

abstract class Matematicas {

    public x:number; 
    public y:number; 
    public resultado: number; 

    constructor(x:number, y:number) {

        this.x=x; 
        this.y=y; 
        
    }

    abstract operacion():void; 
    mostrarResultado():void{

        console.log(this.resultado);
        

    }

}


class Suma extends Matematicas{

    constructor(x:number, y:number){

        super(x,y)

    }

    operacion():void{

        this.resultado = this.x+this.y; 
    }


}

let res = new Suma(12,2); 
console.log(res.operacion());
console.log(res.mostrarResultado());



class Resta extends Matematicas{

    constructor(x:number, y:number){

        super(x,y)

    }

    operacion():void{
        
       this.resultado = this.x - this.y; 
        
    }
}


let resta = new Resta(5,4)

console.log(resta.operacion());

console.log(resta.mostrarResultado());
