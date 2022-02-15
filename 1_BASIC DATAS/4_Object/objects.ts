
// ..... POR INFERENCIA.....

let home =
{
    calle: "calle 13", 
    numero: 12, 
    portero: false
}

console.log(home);

// Imprimir por indice
console.log(home.calle);

// .... SIN INFERENCIA....

let home2: 
{

    street: string,
    number: number, 
    portero: boolean
}=
{

    street: "calle 12", 
    number: 123, 
    portero: false, 
}
console.log(home2);



// Objeto dentro de un objeto inferencia

let consecionario =
{

    electrico: "Sin Stock", 
    camiones:
    {
        moderno:"Ford", 
        antiguo: "Mercedez", 
    }

}

console.log(consecionario);
console.log(consecionario.camiones.antiguo);

// Objeto dentro de un objeto sin inferencia

let oficina:
{

    admin: number, 
    secre: number, 
    dependencias:
    {

        depen1: number,
        depen2: number, 
        depen3: number, 
    }

}=
{

    admin: 1, 
    secre: 3, 
    dependencias:{

        depen1: 3, 
        depen2: 4, 
        depen3: 4, 
    }    
}


console.log(oficina);



