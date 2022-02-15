// Podemos acceder a una propiedad sin la necesidad de instanciar los valores 
// Los metodos estaticos hacen que la variable se modifique cada vez que es llamada, esta ligada a la clase y no al objeto. 


class Ejemplo{

    public numero:number; 
    static estatico:number;
    constructor(numero:number){

        this.numero = numero
        Ejemplo.estatico++; 
    }

    // También pueden ser declarados metodos estaticos
    static marcaDeAgua(){

        console.log("Welcome to MaralDigital");
        
    }




}
Ejemplo.estatico =1

console.log(Ejemplo.estatico);

let ejemplo = new Ejemplo(12); 

console.log(Ejemplo.estatico);

let ejemplo2 = new Ejemplo(12); 

console.log(Ejemplo.estatico);

Ejemplo.marcaDeAgua(); 

Ejemplo.marcaDeAgua(); 

Ejemplo.marcaDeAgua(); 