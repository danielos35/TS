


class Persona1{

    private name:string; 

    constructor (name:string){

        this.name = name;

    }

    // Con get se trae el valor de el atributo. 

    get nombre():string
    {
        return this.name; 
    }


    // Con set se inicializa el valor

    set nombre(name:string){

        this.name = name; 

    }

}


let felipe = new Persona1("Daniel"); 
console.log(felipe.nombre);
felipe.nombre = "Felipe"; 
console.log(felipe.nombre);

