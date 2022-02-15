try{

    console.log("Analizando el codigo");
    // throw new Error("Error Programado");
    

}catch(Error){

    console.log("Se produjo un Error");
    console.log(Error.message);
    // Error.message nos permite ver el erro que está ocurriendo
    
    
}
finally{

    console.log("Esto siempre se ejecuta");
    
}
