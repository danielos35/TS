// Una clase es una estructura predefinida que podemos usar para la creación de objetos

class Persona{

    nombre: string; 
    apellido: string;
    edad:number; 

    constructor(nombre:string, apellido:string, edad:number){

        this.nombre = nombre; 
        this.apellido = apellido; 
        this.edad = edad; 
    }


    imprimirNombre():void{

        console.log(this.nombre);
        
    }

}

// Objeto 1

let empleado = new Persona("Daniel", "Felipe", 12); 
console.log(empleado);
console.log(empleado.nombre);
empleado.imprimirNombre(); 


// Objeto 2


let empleado2 = new Persona('Jose','Perez', 15); 
empleado2.imprimirNombre()

