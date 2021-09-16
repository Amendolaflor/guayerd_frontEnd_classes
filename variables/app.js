// // Variables

// // La vieja forma = scope global
// // var numerosEnteros;

// // Las nuevas formas de declarar variables (ES6)

// // let miSegundaVariable; // scope local
// // const otraFormaDeVariable; // scope mixto (global y local segun donde se declare)

// // Suma
// var primerNumero = 15000;
// var segundoNumero = 545646;
// var resultado = primerNumero * segundoNumero;
// console.log("Tu resultado es: " + resultado);

// // Nombre
// var primerNombre = "Carlos";
// var segundoNombre = "German";
// var nombreCompleto = primerNombre + " " + segundoNombre;
// console.log(nombreCompleto);

// // Tipos de datos
// /*
// Numericos: INT (enteros) = 1 o FLOAT (flotantes) = 1.5,
// Texto: Strings (Alfanumericas) = "Esto es un texto", "152546",
// */

// // Operadores Aritmeticos
// /*
// + = suma
// - = resta
// / = division
// * = multiplicación
// /// Operadores extendidos
// % = resto
// %% = modulo
// */

// // Funcion Math
// var numeroExperimental = 10;
// console.log(Math.pow(numeroExperimental, 3));
// console.log(Math.round(1.77777777777));
// console.log(Math.round(Math.random()*1000));

// // Numeros aleatorios limitados
// function numeroAleatorioVectorizado(min, max){
//     console.log(Math.round((Math.random() * (max - min) + min)))
// }

// numeroAleatorioVectorizado(10, 100);




//////////////////     Ejercicios con variables y operadores       ///////////////



//////////////// 0
let nombre = window.prompt("Ingrese nombre");
let apellido = window.prompt("Ingrese apellido");

console.log( "Hola" + " " + nombre + " " + apellido);
alert("Hola" + " " + nombre + " " + apellido);


// ///////////// 1
let primerNumero = parseInt(window.prompt("Ingrese un numero"));
let segundoNumero = parseInt(window.prompt("Ingrese otro numero"));
let resultado = primerNumero + segundoNumero;

console.log("La suma de tus numero es:" + " " + resultado);
alert( "La suma de tus numero es:" + " " + resultado);


///////////// 2
let edad = parseInt(window.prompt("Cuantos años cumplio o cumple este año?"));
let añoActual = 2021;
let añoNacimiento = añoActual - edad;

console.log("Naciste en el año:" + " " + añoNacimiento)
alert("Naciste en el año:" + " " + añoNacimiento);


///////////// 3
let balanceCuenta = 80000;

alert("Tu balance de cuenta es:" + " " + balanceCuenta);

let saldoRetirar = parseInt(window.prompt("Cuanto pesos desea retirar?"));
let saldoRestante = balanceCuenta - saldoRetirar;

console.log("Tu saldo actual es de:" + " " + saldoRestante)
alert("Tu saldo actual es de:" + " " + saldoRestante);


///////////// 4
let notaPrimerTrimestre = parseInt(window.prompt("Cual fue tu nota final en el primer trimestre?"));
let notaSegundoTrimestre = parseInt(window.prompt("Y en el segundo trimestre?"));
let notaTercerTrimestre = parseInt(window.prompt("Por ultimo necesito la del tercero para calcular tu promedio"));
let notaFinal = Math.round((notaPrimerTrimestre + notaSegundoTrimestre + notaTercerTrimestre) / 3);

console.log("Tu nota final es:" + " " + notaFinal)
alert("Tu nota final es:" + " " + notaFinal);


/////////// 5
/////////// 6
/////////// 7
/////////// 8
/////////// 9
/////////// 10
/////////// 11

////////////// 0  BONUS

let primerNumeroString = window.prompt("Ingrese un numero");
let segundoNumeroString = window.prompt("Ingrese otro numero");
let numerosJuntos = primerNumeroString + segundoNumeroString


console.log("La union de tus numero es:" + " " + numerosJuntos);
alert("La union de tus numero es:" + " " + numerosJuntos);


