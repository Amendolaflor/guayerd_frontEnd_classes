// ////////// obtengo numero aleatorio entre 1 y 100
let randomNumber = Math.round(Math.random() * (100 - 0) + 0);
console.log(randomNumber);

// 1 <ales. (1,2,3,4,5,6,7,8,9,10). 


let numerosNaturales = " ";

for(let i = 1; i < 11; i++ ){
	console.log("Numero Natural: " + i);
}

// // // 2 Solicitar al usuario que ingrese 5 números y mostrar la suma de ellos.


let numeroIngresado = 0;
let suma = 0;

for( let i = 0; i < 5 ; i++ ) {
	numeroIngresado = prompt("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);
	suma += numeroIngresado;	
}
console.log("la suma de tus numeros es:" + "" + suma)


// // 3 Solicitar al usuario que indique cuántos números quiere ingresar y mostrar el resultado de la suma de ellos.
let cantidadNumeros = parseInt(prompt("Ingrese cantidad de numeros que desa sumar"));
let suma = 0;

for( let i = 0; i < cantidadNumeros; i++ ) {
	let numeroIngresado = prompt("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);	
	suma += numeroIngresado;	
}

console.log("la suma de tus numeros es:" + "" + suma)

// 4 Solicitar al usuario que ingrese números hasta que desee y luego mostrar la suma de ellos.
let suma = 0;
let numeroIngresado = 0;
// let salir = 0;
do{
	numeroIngresado = prompt(`Ingrese numero \n Ingrese "0" para obtener la suma de numero ingresados `);
	numeroIngresado = parseInt(numeroIngresado);	
	suma += numeroIngresado;	
} while(numeroIngresado !== 0)

alert(`la suma de tus numeros es: ${suma}`)

// 5 Solicitar al usu  ario que ingrese tantos números como desee y luego mostrar el promedio de ellos.

let suma = 0;
let numeroIngresado = 0;
let salir = 0;
let contador = 0;

do{
	numeroIngresado = prompt("Ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);	
	suma += numeroIngresado;
	salir = parseInt(prompt("Ingrese '0' para obtener la suma"));
	contador++

} while(salir !== 0)

let promedio = suma / contador;
alert("El promedio de tus numeros es:" + "" + promedio)


// // 6 Realizar un programa que pida al usuario un número y muestre los números del 1 al número introducido. 

let numeroUsuario = parseInt(prompt("Ingrese numero"));

for(let i = 1; i <= numeroUsuario; i++){
	alert("Mostrando numeros anteriores al ingresado:" + i)
}

// //7 Realizar un programa que pida al usuario dos números y muestre los números del primer número al segundo. (Ejemplo: 5 y 9: 6,7,8) Aceptar solo enteros. 

let numero1 = parseInt(prompt("Ingrese numero"));
let numero2 = parseInt(prompt("Ingrese otro numero"));

for(let i = numero1 + 1; i < numero2; i++ ) {
	alert(i)
}

// // 8 Preguntar al usuario cuántos números quiere ingresar. Luego solicitar que los ingrese uno por uno y mostrar cuál es el mayor.
let cantidadNumeros = parseInt(prompt("Cuantos numeros desea ingresar?"));
let arrayNumerosIngresados = [];

for(let i = 0; i <cantidadNumeros; i++) {
	let numero = parseInt(prompt("Ingrese numero"));
	arrayNumerosIngresados.push(numero)
}

arrayNumerosIngresados.sort((a, b) => {
	if(a == b) {
		return 0; 
	}
	if(a < b) {
		return -1;
	}
	return 1;
});

console.log(arrayNumerosIngresados)

alert("El numero mayor de los ingresados es:" + " " + arrayNumerosIngresados[arrayNumerosIngresados.length - 1]);



// // 9 Solicitar al usuario que ingrese la cantidad de números que quiera, uno por uno, y mostrar cual es el menor de todos.

let cantidadNumerosEj9 = parseInt(prompt("Cuantos numeros desea ingresar?"));
let arrayNumerosIngresadosEj9 = [];

for(let i = 0; i < cantidadNumerosEj9; i++) {
	let numero = parseInt(prompt("Ingrese numero"));
	arrayNumerosIngresadosEj9.push(numero)
}

arrayNumerosIngresadosEj9.sort((a, b) => {
	if(a == b) {
		return 0; 
	}
	if(a > b) {
		return -1;
	}
	return 1;
});

console.log(arrayNumerosIngresadosEj9)

alert("El numero menor de los ingresados es:" + " " + arrayNumerosIngresadosEj9[arrayNumerosIngresadosEj9.length - 1]);



//10 Solicitar al usuario que ingrese un número y mostrar, en una sola cadena de string, la cantidad de asteriscos qué indique en el número. (Ejemplo: 5, “*****”.)

const primernumeroEj10 = prompt("Ingrese un numero");
let numerosEj10 = "";


for (var i = 1; i <= primernumeroEj10; i++) {
    numerosEj10 += i ; 
    numerosEj10 = numerosEj10.replace(i, "*")
}
console.log(numerosEj10)


// 11 Realizar un programa que pida la base y el exponente y calcule la potencia. 



// 12 Realizar un programa que pida un número y calcule su factorial.  (Ejemplo de factorial: 5! Factorial de 5 es 5*4*3*2*1 )



// 13 Realizar un programa que pida un número y diga todos sus divisores. (Se verifica que un número es divisor del otro cuando el resto de dividir por ese número es 0.)



// S14 olicitar al usuario que ingrese un número y una cadena de caracteres. Mostrar por consola la cantidad de caracteres se hayan solicitado. (Ejemplo: “Hola Guayerd” , 4), debe mostrar:
const numeroEj14 = prompt("Ingrese un numero");
let cadenaEj14 = prompt("Ingrese un texto");

cadenaEj14 = cadenaEj14.split("") 
console.log(cadenaEj14)

// H
// O
// L
// A


// 15 Solicitar al usuario que ingrese una lista de supermercado y al final mostrar todos los items separados por comas.
let listaEj15 = prompt("Ingrese su lista de supermercado");

listaEj15 =listaEj15.replace(/ /g, ",")

console.log(listaEj15)


// 16 Solicitar al usuario que ingrese números. Finalizar cuando ingrese un número múltiplo de 3. Mostrar todos los números ingresados.

// Bonus desafíos matemáticos !!

// Agregar al ejercicio 5 una validación de que solo se acepte números del 1 al 10. Si ingresa un número no válido, volver a solicitar el dato. 
// Realizar un programa que pida números consecutivos (3, 4 y 5; 9, 10 y 11, etc.). Cuando se introducen tres números consecutivos dice “gracias” y termina. Mientras no se introduzcan tres números consecutivos el programa sigue pidiendo números indefinidamente. 
// Realizar un programa que pida dos números y diga su máximo común divisor. 
// (notas sobre el Máximo Común Divisor: 
// - Es el máximo número por el cuál se puede dividir un número dejando resto 0.
// - No puede ser mayor al valor de la mitad del menor número o sí mismo.
//  (Ejemplo: Si mis números son 9 y 12, no puede estar entre 5 y 8, ni ser mayor a 9).
//  (Ejemplo: Si mis números son 10 y 15, no puede estar entre 6 y 9, ni ser mayor a 10). (Podemos probar: 1,2,3,4,10).
// Solicitar al usuario que ingrese números. Mostrar los primeros tres multiplicados por 1, luego los próximos tres multiplicados por 2 y así sucesivamente. Cortar cuando el usuario ingrese un número mayor a 100. En cada iteración se debe mostrar la salida. Ejemplo:
// Ingresa 1 > muestra 1 
// Ingresa 8 > muestra 8
// Ingresa 3 > Muestra 3
// ingresa 4 > Muestra 8
// Ingresa 9 > Muestra 18
// Ingresa 50 > Muestra 100
// Ingresa 7 > Muestra 21
// ingresa 10 > Muestra 30
// Solicitar al usuario que ingrese 10 números, calcular el factorial de cada uno de ellos  y mostrarlo.
// Solicitar al usuario que ingrese un número y mostrar esa cantidad de dígitos de la secuencia de Fibonacci. 

