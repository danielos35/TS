class Animal{

    private domestico:boolean;
    protected readonly _mesesDeGestacion:number; 
    constructor(domestico:boolean, meses:number){

        this.domestico = domestico; 
        this._mesesDeGestacion = meses;

        
    }

    get _domestico():boolean{

        return this.domestico
    }

    set _domestico(value:boolean){

        this.domestico = value; 
    }
    
}

class Mamimefero extends Animal{

    protected _capazDeNadar:boolean; 
    constructor(domestico:boolean,gesta:number,nadar:boolean){

        super(domestico, gesta); 
        this._capazDeNadar = nadar; 

    }


}

class Ave extends Animal{

    protected _envergaduraAlas:number; 
    constructor(domestico:boolean,gesta:number,alas:number){
        super(domestico,gesta); 
        this._envergaduraAlas=alas; 
    }



}

class Gato extends Mamimefero{

    private _especie: string; 
    constructor(domestico:boolean,gesta:number,nadar:boolean,especie:string){

        super(domestico, gesta, nadar);
        this._especie = especie; 

        
    }


    // Capaz de Nadar
    get capazNadar():boolean{
        return this._capazDeNadar
    }

    set capazNadar(value:boolean){
        this._capazDeNadar = value; 
    }


    // Especie
    get especie():string{

        return this._especie
    }

    set especie(value:string){

        this._especie = value;  
    }

}

let gatico = new Gato(true, 12, false, 'Angora'); 
console.log(gatico);

class Aguila extends Ave{

    protected numEjemplares: number; 
    constructor(domestico:boolean,gesta:number,alas:number, ejemplares:number){
        super(domestico,gesta, alas); 
        this.numEjemplares = ejemplares; 
    }
}   


let pajarito = new Aguila(true, 12, 2, 2); 
console.log();
