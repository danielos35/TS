// public es accesible desde cualquier parte de la aplicación 
// No indicar ningun modificador de acceso lleva a que por defecto el atributo o la propiedad sean publicos

// ....EJEMPLO 1.....
class Persona{

    nombre:string;
    public apellido:string; 
    constructor(name:string, lastName:string){

        this.nombre = name; 
        this.apellido = lastName; 
    
    }
}

let daniel = new Persona('Daniel', 'Márquez'); 
// Podemos acceder a estos ya que están publicos
console.log(daniel.nombre);
console.log(daniel.apellido);




// .... EJEMPLO 2 ...


class Persona2{

    private name:string; 
    private lastName:string; 

    constructor(nombre:string, apellido:string){

        this.name = nombre; 
        this.lastName = apellido; 
    }
}

// ...EJEMPLO 3...


// Los atributos también puede ser inicializados desde el argumento del constructor 
// De esta manera no tenemos que utilizar la palabra reservada this

class Persona3{

    constructor(private name:string){

    }

}
// ...NOTA...

// Normalmente los atributos son colocados como private y los metodos como public, ya que desde estos se llaman a los atributos

