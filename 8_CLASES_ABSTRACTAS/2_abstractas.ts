interface Persona{

    nombre:string; 
    dameNombre():void;

}

interface Casa{

    direccion:string; 
    dameDireccion():void;

}


abstract class Empleado implements Persona,Casa {
   
    nombre:string;
    direccion:string; 
    static empresa:string; 

    static datosEmpresa():void{

        console.log(Empleado.empresa);
        
    }

    dameNombre():void{

        console.log(this.nombre);
        

    }
    dameDireccion():void{

        console.log(this.direccion);
    }


    abstract datosEmpleado():void; 
   
}

class General extends Empleado{

    nombre:string; 
    direccion:string; 
    datosEmpleado(){

        console.log(this.dameNombre+" "+this.direccion);
        
    }
}

Empleado.empresa = "MaralDigital"; 
console.log(General.datosEmpresa());



