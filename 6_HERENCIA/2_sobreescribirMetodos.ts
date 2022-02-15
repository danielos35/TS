// Cuando se modifica un metodo en la clase hija, el metodo llamado desde la clase hija seguira las intrucciones dadas en este metodo, el de la clase padre no tendrá ninguna modoficación

class Padre{

    nombre:string; 
    constructor(name:string){

        this.nombre = name; 

    }

    imprimir(){

        console.log(this.nombre);
        
    }


}

let papa = new Padre('Daniel'); 
papa.imprimir();



class Hijo extends Padre{

    apellido:string; 

    constructor(name:string, lastName:string){

        super(name); 
        this.apellido = lastName;
    }

    imprimir(){

        console.log(this.nombre);
        console.log(this.apellido);
        
        
    }

}

let hijo = new Hijo('Daniel', 'Marquez'); 
hijo.imprimir(); 