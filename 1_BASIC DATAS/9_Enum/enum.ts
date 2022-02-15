// Tipo de dato donde se enumeran valores fijos
// A cada numero se le dá un nombre

enum monedas{euro, dolar, yen}
enum animal {mamifero, anfibio, reptil, ave, pez}

enum color {verde, rojo, azul, amarillo}; 
console.log(color.verde);

// Puedo cambiar el inicio, asignandole el numero desde el cual deseo comenzar
enum color2 {verde = 1, rojo, azul, amarillo}; 
console.log(color2.verde);

// Puedo asignarle el valor que yo quiera.
enum color3 {verde = 4, rojo = 1, azul = 2, amarillo = 12}; 
console.log(color2.verde);
console.log(color3.amarillo);






