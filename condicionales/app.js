// // ////////////////// Ejercicios con cadenas de textos:

// Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.
let textUser = prompt("Ingrese un texto");
let textIncludes = textUser.includes("a");

console.log(`Tu texto incluye la letra "a": ${textIncludes}`);


// // Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.
let textUser2 = prompt("Ingrese otro texto");
let textLowerCase = textUser2.toLowerCase();
let textUpperCase = textUser2.toUpperCase();

console.log(`Tu texto ingresado en minuscula es: ${textLowerCase}`);
console.log(`Tu texto ingresado en mayuscula es: ${textUpperCase}`);


// // Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.
let textUser3 = prompt("Ingrese nuevamente un texto");
let firstLetter = textUser3[0];

console.log(`La primer letra del texto ingresado es: ${firstLetter}`);


// // Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.
let phraseUser = prompt("Ingrese una frase");
let phraseLenght = phraseUser.length;

console.log(`Tu frase tiene: ${phraseLenght} caracteres`);


// // Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.
let numberUser = prompt("Ingrese un numero");
let numberLenght = numberUser.length;

console.log(`Tu numero tiene: ${numberLenght} digitos`);


// // Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.
let wordUser = prompt("Ingrese una palabra");
let lastLetter = wordUser[wordUser.length-1];

console.log(`La ultima letra del texto ingresado es: ${lastLetter}`);


// // Ingresar una cadena de texto y reemplazar los espacios por asteriscos.
let phraseUser2 = prompt("Ingrese una frase");
let phraseReplace = phraseUser2.replace(/ /g, "*");

console.log(`Tu frase ahora es: ${phraseReplace}`);


// // Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.
let letterUser = prompt("Ingrese una letra");
let textUser4 = prompt("Ingrese un texto");
let textIncludesLetter = textUser4.includes(letterUser);

console.log(`Se encuentra la letra en el texto ingresado? ${textIncludesLetter}`);


// // Solicitar un texto y mostrarlo todo menos la primera letra.
let textUser5 = prompt("Ingrese un texto");
let textNoFirstLetter = textUser5.slice(1);

console.log(`Tu texto sin la primer letra es: ${textNoFirstLetter}`);


// // Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.
let textUser6 = prompt("Ingrese un texto");
let text6Lower = textUser6.slice(0, -1);
let text6Upper = textUser6.slice(-1);
let textConcat = text6Lower.toLowerCase() + text6Upper.toUpperCase();

console.log(`Tu texto con la ultima letra en mayuscula es ${textConcat}`)


/////////////////  Ejercicios con condicionales (parte 1):

// Agregar al ejercicio 5 de Variables un validador de datos. Si ingresa un número entonces que me calcule las medidas, sino, que muestre un mensaje de error. 
let numeroEj5 = parseInt(prompt("Ingrese un numero"));

function validarNumero(number) {
	let pies = numeroEj5 / 40;
	let centimetros = numeroEj5 * 100;
	let pulgadas = Math.round(centimetros / 2.54);
	if(number) {
		alert(`Tu numero convertido a pies es: ${pies},\n tu numero convertido a centimetros es: ${centimetros},\n tu numero convertido a pulgadas es: ${pulgadas}`);
	} else {
		alert(`no ingresaste un numero valido`);
	}
}
validarNumero(numeroEj5);

// Solicitar al usuario su edad. Si es menor de 18, decir que es menor de edad, sino decir que es mayor .
let userAge = parseInt(prompt("Ingrese su edad"));

function mayorEdad(edad) {
	if(edad < 18) {
		alert(`Oopss todavia no llegaste a los 18`)
	} else {
		if( edad < 105 ) {
			alert(`Sos mayor de edad`)
		} else {
			alert(`Ingreso invalido`);
		}
	}	
}	
mayorEdad(userAge);

// Contexto: Una heladería. Solicitar al usuario sus sabores en un solo input. Luego preguntar si quiere cobertura de chocolate. Si dice Sí, mostrar el valor del helado 180 con el pedido completo: “Su helado sabor …. con cobertura de chocolate cuesta $180”. En caso de que no la requiera, será lo mismo pero sin cobertura de chocolate y el valor es de $150.
let userFlavours = prompt("Ingrese los sabores de helado que desea pedir");
let cobertura = prompt("Desea cobertura de chocolate? Ingrese A si quiere, ingrese B sino").toLowerCase();

function pedirHelado(eleccion) {
	if(eleccion == "a") {
		alert(`TU PEDIDO ES: \n Sabores: ${userFlavours} con cobertura de chocolate. \n Precio: $180`);
	} if((eleccion == "b")) {
		alert(`TU PEDIDO ES: \n Sabores: ${userFlavours}. \n Precio: $150`);
	} else {
		alert(`No ingresaste una opcion valida`);
	}
}
pedirHelado(cobertura);


// Mejorar el ejercicio 1 de Variables: Solicitar al usuario dos números y mostrar por consola el resultado de la suma de ambos. Informar al usuario si el número resultante es par o impar.
let primerNumero = parseInt(prompt("Ingrese un numero"));
let segundoNumero = parseInt(prompt("Ingrese otro numero"));
let resultado = primerNumero + segundoNumero;

console.log(`La suma de tus numero es: ${resultado}`);

function esPar(numero) {
	if(numero % 2 === 0) {
		alert(`El resultado de la suma es numero par`)
	} else {
		alert(`El resultado de la suma es numero impar`)
	}
}
esPar(resultado)


// Solicitar al usuario un número e indicar si es positivo, negativo o cero.
let number = parseInt(prompt("Ingrese un numero"));

function tipoNumero(numero) {
	if(Math.sign(numero)=== 1) {
		alert(`El numero ingresado es positivo`);
	} if(Math.sign(numero)=== -1) {
		alert(`El es ingresado es negativo`);
	} if((Math.sign(numero)=== 0)) {
		alert(`El es ingresado es cero`);
	}
}
tipoNumero(number);


// Solicitar al usuario que ingrese un monto. Si el monto es mayor a 2000 que aplique un descuento del 10%. Mostrar el total a pagar.
let userAmount = parseInt(prompt("Ingrese un monto"));

function aplicarDescuento(monto) {	
	if(monto >= 2000) {
		monto = monto - ((monto * 10) / 100);
		alert(`El total a pagar con el 10% de descuento es: ${monto}`);
	} else {
		alert(`El total a pagar es: ${monto}`);
	}	
}
aplicarDescuento(userAmount);


// Solicitar al usuario que ingrese una cadena de texto y luego un una posición. Indicar si el dígito de esa posición es vocal o no lo es. (Puede ser consonante, espacio, comilla, etc.)



// Solicitar al usuario que ingrese una nota del 1 al 10. Si está entre 1 y 3 responder: Aplazado, si está entre 4 y 5 responder: Reprobado , y 6 o más aprobado. 



// Solicitar al usuario dos números e indicar cual es el mayor o si son iguales.



// Solicitar al usuario que indique un mes (del 1 al 12) e indicar si tiene 30 días, 31 días o 28/29 días.



// Solicitar al usuario que ingrese 3 números e indicar cual es el mayor.



// Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 




// (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).



// Solicitar al usuario un número de mes y devolver el nombre. (Ej: Ingreso 4 y me devuelve “Abril”).









// BONUS:

// Solicitar al usuario su clave de 4 dígitos (que tendremos almacenada en una variable) y el monto a retirar. Si la clave es correcta y el monto mayor al balance, realizar la operación. Sino, mostrar un mensaje de error en caso de ser la clave incorrecta o pedir más dinero del disponible.


// Solicitar al usuario su día y mes de nacimiento e indicar cual es su signo zodiacal.



// Solicitar al usuario que ingrese la hora y su nombre. Si son entre las 12 inclusive y 19 saludar con buenas tardes, entre 19 inclusive y 5 buenas noches, y entre 5 inclusive y 12 buenos días. 


