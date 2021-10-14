// Maraton Guayerd -  Intro a la Programacion con JS
// Los ejercicios presentan una dificultad incremental. Es conveniente avanzar en orden.
// Cuando resolves uno, comentar las líneas del mismo y arrancar con el siguiente.
// No es necesario usar funciones, solo donde consideren necesario.
// Buena suerte!!!

////1 Pedir nombre al usuario y saludarlo. Pasar el texto a Mayúsculas y a Minúsculas. Mostrar ambos en pantalla.
const userName = prompt("Ingrese su nombre");

const saludoNombre = (nombre) => {  
  let nombreMayuscula = nombre.toLocaleLowerCase();
  let nombreMinuscula = nombre.toUpperCase();
  console.log(`Hola ${nombreMayuscula}!`);
  console.log(`Hola ${nombreMinuscula}!`);
};

saludoNombre(userName);

////2  Pedir al usuario dos números y mostrar la suma y resta de ellos. Para la resta, restar siempre al más grande el más chico.
const primerNumeroEj2 = parseInt(prompt(`Ingrese un numero`));
const segundoNumeroEj2 = parseInt(prompt(`Ingrese otro numero`));
console.log(`La suma de tus numeros es: ${primerNumeroEj2 + segundoNumeroEj2}`);

const restaEj2 = (numA, numB) => {
	if (numA > numB) {
		return numA - numB;
	} else {
		return numB - numA;	
	}
}
let resultadoResta = restaEj2(primerNumeroEj2, segundoNumeroEj2)
console.log(`Reste el menor de tus numeros al mayor y me dio: ${resultadoResta}`)

/////3 Ingresar un texto. Preguntar si quiere ver el resultado en pantalla (alert) o consola (console.log). Pasar el texto a MAYUSCULA y mostrar donde corresponda.
const mostrarTexto = () => {
	let text = prompt(`Ingrese un texto o palabra`).toUpperCase();
	let option = prompt(`Ingrese donde quiere visualizar su texto: \n 1: pantalla \n 2: consola`);
	switch(option) {
		case "1": alert(`Ingresaste: "${text}"`);
		break;
		case "2": console.log(`Ingresaste: "${text}"`);
		break;
		default:  alert("No ingresaste un numero valido!")
	}	
}
mostrarTexto()

/////4  Calculadora. Pedir ingresar dos números. Luego ingresar una operación (SUMA/RESTA/MULTI/DIV/POTENCIA). Realizar la operación y mostrar el resultado en pantalla.
const calculadora = () => {
	let num1 = parseInt(prompt(`Ingrese un numero`));
	let num2 = parseInt(prompt(`Ingrese otro numero numero`));
	let operacion = prompt(`Ingrese la opreacion que desea realizar: \n 1: suma \n 2: resta \n 3: multiplicacion \n 4: division \n 5: potencia`);
	switch (operacion) {
		case "1": console.log(`El resulado de la suma es: ${num1 + num2}`);
		continuarOperando()
		break;
		case "2": console.log(`El resulado de la resta es: ${num1 - num2}`);
		continuarOperando()
		break;
		case "3": console.log(`El resulado de la multiplicacion es: ${num1 * num2}`);
		continuarOperando()
		break;
		case "4": console.log(`El resulado de la division es: ${num1 / num2}`);
		continuarOperando()
		break;
		case "5": console.log(`La potencia es: ${Math.pow(num1, num2)}`);
		continuarOperando()
		break;
		default: alert(`Aca hay algo mal ingresado`)
		continuarOperando()
	}	
}

calculadora()

function continuarOperando () {
	let opcion = window.confirm("desea seguir operando?")
	if (opcion === true) {
		return calculadora()
	} else {
		alert(`Chaucito`)
	}	
}

/////5  Vamos reutilizar la calculadora del punto 4. Pero esta vez, luego de mostrar el resultado, vamos a preguntar al usuario si desea hacer otra operación o terminar. Si quiere seguir operando, volvemos a pedir valores, operación y mostrar resultado HASTA que nos diga que no quiere continuar.
///Extra: investigar/googlear la función de Javascript "confirm"
//

/////6  Agregar alumnos/as a un curso. Vamos a pedirle al usuario que ingrese nombres de alumnos/as para el nuevo curso. Continuar guardando nombres HASTA que el usuario ingrese SALIR. Mostrar todos los nombres en pantalla. 
let alumnos = [];

do {
	ingresoEj6 = prompt(`Ingrese nombre de alumno para nuevo curso: \n para SALIR ingrese: 0`).trim();	
	alumnos.push(ingresoEj6)

} while (ingresoEj6 !== "0") {
	alumnos.pop(ingresoEj6)
}

console.log(alumnos)

/////////7  Dado el siguiente array de nombres, recorrerlo y mostrar en pantalla: Indice (posición) y Nombre con la primera letra en mayúscula.
const ej7Nombres = ["goku","mario","melchor","mafalda","cacho","hermione","tony","pappo","leia", "homero"];

for(let i = 0; i < ej7Nombres.length; i++) {
	console.log (i)	
	ponerMayuscula(ej7Nombres[i])	
}	

function ponerMayuscula (palabra) {
	let textUpper = palabra.slice(0, 1);
	let textLower = palabra.slice(1);
	let concat =  textUpper.toUpperCase() + textLower.toLowerCase();
	console.log(concat)
}

//////8  Para una veterianaria. Dado el siguiente array de nombres de mascotas completar el código con las  siguentes reglas de negocio:
// / - Si el nombre tiene más de 6 caracteres, informar: "Nombre largo"
// . - Si tiene menos o es igual a 3 caracteres, informar: "Nombre corto"
// . - Si es igual a "Fido" o "Gertrudis", informar: "Hay que vacunar contra la rabia"
// . - Si es igual a "Tuerca", informar: "Entregar alimento balanceado"
const ej8Mascotas = ["Tuerca","Ramshanaram","Perro","Gertrudis","Kat","Fido","Lo","Loko","MAX"];

ej8Mascotas.forEach(element => {
	let caracteres = element.length;	
	if(caracteres <= 3) { 
	console.log(` ${element.toUpperCase()}: El nombre tiene ${caracteres} caracteres asi que es: nombre corto`);
	} else {
		console.log(` ${element.toLocaleUpperCase()}: El nombre tiene ${caracteres} caracteres asi que es: nombre largo`);
	}
	switch(element) {
	case "Fido": console.log(`Hay que vacunar contra la rabia`);
		break;
	case "Gertrudis": console.log(`Hay vacunar contra la rabia`);
		break;
	case "Tuerca": console.log(`Entregar alimento balanceado`);
		break;
	}
});	

//9  Un restaurant desea mejorar su sistema de reserva para mostrar a los clientes un aproximado de costos. 
// - Cada menor de edad pagará el menú $450 y cada adulto, $700. 
// - Si el grupo tiene más de 4 adultos, se hará un 10% al total de la factura. 
// Mostrar por pantalla la cantidad de comensales y el costo total a pagar. 
const ej9restaurant = [25,17,18,44,12,9,36,50];

let cantMenores =[];
let totalMenores = 0;
(() => {
	cantMenores = ej9restaurant.filter(element => {
	return element < 18 });
	totalMenores = cantMenores.length * 450;	
})()

let cantMayores = [];
let totalMayores = 0;
(() => {
	cantMayores= ej9restaurant.filter(element => {
	return element >= 18 });
	totalMayores = cantMayores.length * 700;
	
})()

const subtotal = totalMenores + totalMayores;

/// calculo final total con descuento
(() => {
	if(cantMayores.length >= 4) {
		let totalConDescuento = subtotal - ((subtotal * 10) / 100);
		console.log(`Mas de 4 adultos aplica descuento del 10%! El total para ${ej9restaurant.length} comensales es de: ${totalConDescuento} pesos`)
	} else {
		console.log(`El total para ${ej9restaurant.length} comensales es de: ${subtotal} pesos`)
	}
}
)()

console.log(`Subtotal: ${subtotal}`)

///10 De un consultorio médico nos piden automatizar el proceso de recepción de los pacientes. 
//   Para ello:
//   - Ingresar código de paciente (Number XXX, 3 dígitos de 1 a 999).
// /   - Si el código ingresado esta entre 1 y 99, es un paciente VIP.
//// /     - Preguntarles "Como valoran la calidad del servicio? (1..10)". Guardar el resultado ingresado.
// /     - Agregar el código de paciente adelante en la cola (array) de turnos
// /   - Si el código ingresado esta entre 100 y 500, es un paciente de prepaga.
// /     - Agregar el código de paciente al final de la cola (array) de turnos
// /   - Si el código ingresado esta entre 501 y 999, es un paciente nuevo.
// /     - Preguntarles "Desea pasarse a VIP?". Si la respuesta es afirmativa, guardar el código de paciente.
// /     - Agregar el código de paciente al final de la cola (array) de turnos  
// /   - Si todos los pacientes fueron ingresados, informar en pantalla:
// /     - Calidad del servicio VIP. Informar valor promedio, valor máximo y valor mínimo.
// /     - Ingreso al consultorio: Mostrar en pantalla el orden de ingreso x código de paciente.
// /     - Pasarse a VIP: Mostrar en pantalla todos los códigos de pacientes que desean ser VIP 
// /   - Nota: Escribir código con funciones para facilitar su lectura.
let todosLosPacientes = [];

function Paciente(codigo, tipo, opinion, upgrade) {
	this.id = codigo;
	this.type = tipo;
	this.feedback = parseInt(opinion);
	this.upgrade = upgrade;
}

let paciente = "";

function ingresoOk() {	
	let codigo = parseInt(prompt(`Ingrese numero de paciente \n para finalizar ingrese 0`))

	if(codigo > 0 && codigo < 99) {
		let feedback = parseInt(prompt(`Como valoras la calidad del servicio del 1 al 10?`))				
		paciente = todosLosPacientes.unshift(new Paciente(codigo, "vip", feedback, false))
		ingresoOk();
		
	} else if (codigo >= 100 && codigo <= 500) {		
		paciente = todosLosPacientes.push(new Paciente(codigo, "prepaga", 0, false));
		ingresoOk();

	} else if (codigo >= 501 && codigo <= 999) {	
		let pasaraVip =	window.confirm(`Desea pasarse a VIP?`)
		if(pasaraVip == true) {
			paciente = todosLosPacientes.push(new Paciente(codigo, "nuevo", 0, true));	
			ingresoOk();
		} else {
			paciente = todosLosPacientes.push(new Paciente(codigo, "nuevo", 0, false));
			ingresoOk();	
		}	
		
	} else if (codigo === 0) {		
		alert("Ver resultado en consola")

	} else {
		alert(`Ingresaste un codigo incorrecto. Recorda que es un numero de 1 a 999`);
		ingresoOk()
	}	
}

ingresoOk()

///// servicio VIP ///////  
let pacientesVip = []

todosLosPacientes.map((element) => {
	if(element.feedback > 0) {
		return pacientesVip.push(element.feedback) 
	} 	
})

const promedio = pacientesVip.reduce((total, el) => {
	return total + el / pacientesVip.length
}, 0)	

console.log(todosLosPacientes)
console.log(pacientesVip)
console.log(`Calidad de servicio. Valor promedio: ${promedio}`)
console.log( `Valor maximo: ${Math.max(...pacientesVip)}`)
console.log( `Valor minimo: ${Math.min(...pacientesVip)}`)


