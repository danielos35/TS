// los this se utilizan para hacer referencia a un atributo de la clase dentro de un metodo

class miCarro{

    llantas:string; 

    constructor(llantas:string){

        this.llantas = llantas; 
    }

    imprimir():void{

        console.log(this.llantas);

    }

}


let prueba = new miCarro("michellin"); 
prueba.imprimir();


