// ReadOnly es utilizado cuando queremos que la propiedad sea accesible desde toda la aplicación, pero que esta sea de solo lectura.


class Persona4{

    public readonly name:string;

    constructor(nombre:string){

        this.name = nombre;


    }
}

let felipe = new Persona4('Daniel'); 
console.log(felipe.name);
// la podemos leer mas no le podemos asignar un nuevo valor. 
// felipe.name = "Jose"; 

console.log(felipe.name.slice(0,6));

// Solo puede ser inicializada en el constructor de la clase. 
// Pueden ser utilizadas tanto en propiedades publicas como privadas. 


