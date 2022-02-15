// Interface


interface Vehiculo{

    numeroLlantas:string; 
    numeroPuertas:string; 
    llantasYPuertas():void; 

}

class Coche implements Vehiculo{

    numeroLlantas:string; 
    numeroPuertas:string; 
    constructor(x:string,y:string){

        this.numeroLlantas = x; 
        this.numeroPuertas = y; 
    }

    llantasYPuertas(){

        console.log(this.numeroLlantas, this.llantasYPuertas);
        
    }

}

// Clase abstracta

abstract class VehiculoPesado implements Vehiculo {
    
    numeroLlantas:string; 
    numeroPuertas:string; 
    ventanas:string; 
    pasajeros:number; 

    constructor(x:string, y:string, z:string, n:number){

        this.numeroLlantas = x;
        this.numeroPuertas =y; 
        this.ventanas = z; 
        this.pasajeros = n;
    }


    llantasYPuertas():void{

        console.log(this.numeroLlantas);
        
    }
    

}


class Camion extends VehiculoPesado{

    numeroLlantas:string; 
    numeroPuertas:string; 
    llantasYPuertas():void{

        console.log("MaralDigital");
        
    }

    
}

