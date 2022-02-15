// Este modificador de acceso es utilizado para que las propiedades solo puedan ser utilizado desde las clases hijas

class PaDre{

    protected name:string; 

    constructor(nombre:string){
        this.name = nombre; 
    }

    protected print(){

        console.log(this.name);
        

    }

}

let variable = new PaDre("Daniel"); 


class Hija extends PaDre{

    apellido:string; 

    constructor(name:string, apellido:string){

        super(name); 
        this.apellido = apellido; 

    }

    imprimir2(){

        console.log(super.name);
        console.log(this.apellido);
        

    }
}

