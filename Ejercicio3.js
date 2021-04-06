// En este ejercicio le pediremos al usuario que nos de dos número
// y si el primer número es menor que 8 sumara los dos terminos y si
// es mayor los multiplicara.

// El ejercicio en pseudocódigo es de la siguiente manera:


//  Proceso Ejercicio03
	
//  	Definir numero1 Como Real; 
//  	Definir numero2 Como Real; 
//  	Definir suma Como real;
//  	Definir Multiplica Como Real;
	
//  	Escribir "Dame el Primer número";
//   	Leer numero1;
//  	Escribir "Dame el Segundo número";
//  	Leer numero2;
	
//  	si numero1 <8 entonces 
//  		suma<- numero1+numero2;
//  		Escribir "Tu suma da: ", suma;
//  	sino 
//  		multiplica<- numero1*numero2;
//  		Escribir "Tu multiplicación da: ", multiplica;
		
//  	FinSi
	
//  FinProceso


let num1 = parseInt (prompt("Dame el primer número"));
let num2 = parseInt (prompt("Dame el segundo número"));

if (num1 < 8) {
    
    let suma = num1 + num2;
    console.log ("El resultado de la suma es: " + (suma));

} else {

    let mult = num1 * num2;
    console.log("El resultado de la multiplicación es: " + (mult));

}