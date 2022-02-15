class Utilidades{

    numero:number; 
    constructor(numero:number){

        this.numero = numero; 

    }

    serie():number[]{

        let numeros = [0,1];
        
        while(i<this.numero){

            numeros [i] = numeros [i-2] + numeros [i-1]; 
            i++
        }
        return numeros; 

    }

    numerosPares(pares:boolean):string{

        let resultado:string; 
        return string;
    }

}