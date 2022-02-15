
// Un contrato de lo que debe de tener una clase cuando esta es declarada. 

interface animal{

    nombre:string; 
    edad:number; 
    datos():void; 
}

// los atributos de la interface animal deben de estar obligatoriamente en la clase que la implemente

class Perro implements animal{

    nombre: string; 
    edad:number; 
    

    constructor(nombre:string, edad:number,){
        this.nombre = nombre; 
        this.edad = edad; 
    }


    datos():void{
        console.log("El Perro: "+this.nombre +" tiene "+ this.edad + " Años");
    }; 

}


let perro = new Perro ('Pipe', 12); 
perro.datos(); 



// Ejemplo 2

class Gato implements animal{


    nombre:string; 
    raza:string; 
    edad:number; 

    constructor(nombre:string, raza:string, edad:number){

        this.nombre = nombre;
        this.raza = raza;
        this.edad = edad
    }


    datos():void{

        console.log("El gato: "+this.nombre +" tiene "+ this.edad + " Años");
    }

}


let gatico = new Gato('Pepe','Criollo', 12); 
gatico.datos(); 





// Los modificadores de acceso estan definidos como public por defecto
// Podemos acceder por medio del objeto sin haber creado un constructor

class Lobo implements animal{


    nombre:string; 
    raza:string; 
    edad:number; 

    datos(){

        console.log(this.nombre, this.raza, this.edad);
        
    }

}

// Por defecto el constructor se encuentra vacio

let  animalito = new Lobo(); 

// Podemos acceder por medio del objeto sin haber creado un constructor

animalito.nombre = "Pedro"; 
animalito.edad = 12; 
animalito.raza = "criollo"
animalito.datos(); 


