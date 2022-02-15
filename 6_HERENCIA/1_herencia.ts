//  Es una forma de compartir atributos y metodos de forma jerarquica entre clases. 

// ....Clase Padre ...

class EmpleadoPlanta{

    public nombre:string; 
    public apellido:string; 
    public telefono:number; 
    // los atributos privates NO pueden ser utilizados por las clases hijas
    private idEmpleadoPlanta: number;

    constructor(name:string, lastName:string, numero:number,){

        this.nombre = name; 
        this.apellido = lastName; 
        this.telefono = numero; 
        
    }

    printName(){

        console.log(this.nombre);
        
    }

}

let daniel = new  EmpleadoPlanta('Daniel', 'Marquez',12,);
daniel.printName(); 


// la herencia nos permite crear nuevas clases, partiendo de las clases ya existentes.
// La clase hija tendrá acceso a todos los metodos de la superclase (o clase padre). 

// .... La clase 'EmpleadoAdministrador', toma todas los atributos de la clase 'EmpleadoPlanta'
// .... La clase hijo hereda el constructor de la clase Padre si en la clase hijo no se declara ningun constructor. 


class EmpleadoAdministrador extends EmpleadoPlanta{  
}
let Administradora = new EmpleadoAdministrador('Sandra', 'Yaneth', 45); 
console.log(Administradora.printName());



// Tambien podemos crear un constructor en la clase hijo.

class EmpleadoSeguridad extends EmpleadoPlanta{

    public codigoSeguridad:number; 

    constructor(nombre:string, last:string, tel:number, codigo:number){
        // Con super llamamos al constructor de la clase padre
        super(nombre, last,tel); 
        this.codigoSeguridad = codigo; 

    }
}

let guarda = new EmpleadoSeguridad('Nestor', 'Marquez', 123,123); 
console.log(guarda.nombre);


// Una clase tambien puede heredar de una clase hijo, y heredaria todas las propiedades del Padre y del hijo
// El proceso anterior puede ser ejecutado la cantidad de veces que sea necesaria

class AprendizSeguridad extends EmpleadoSeguridad{

    public numeroContrato:number;
    
    constructor(name:string,last:string, num:number, num2:number, num3:number){

        super(name,last,num2, num3);
        this.numeroContrato = num3;  


    }

}









