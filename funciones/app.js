
// // Ejercicios de funciones

// //1 Crear una función que reciba tu edad y retorne tu edad en años perro. (Multiplicado por 7).
// const edadPerro = () => {
// 	let edad = parseInt(prompt("Ingrese edad"));
// 	console.log(`Tu edad perruna es: ${edad * 7}`);
// };
// edadPerro();

// ///2 Crear una función que reciba un nombre y devuelva un saludo.
// const saludoNombre = () => {
// 	let nombre = prompt("Ingrese su nombre");
// 	console.log(`Hola ${nombre}!`);
// };
// saludoNombre();

// ///3 Crear una función que salude.
// (() => console.log(`Hola!`))();

// ///4 Crear una función que reciba los parámetros, la temperatura y el sistema (Farenheit o Celsius), y devuelva la temperatura transformada al otro sistema. (Si recibe Farenheit, devolver Celsius, si recibe Celsius devolver Farenheit).
// const temperatura = parseInt(prompt(`Ingrese temperatura`));
// const sistema = prompt(`Ingrese sistema`);

// const calculoTemperatura = function(temp, sis) {
// 	if(sis.toLowerCase() === "celsius") {		
// 		return `tu tempertura es: ${((temp * 9) / 5) + 32} grados Farenheit`;
		
// 	} else if((sis.toLowerCase() === "farenheit") ) {
// 		return `tu tempertura es: ${Math.round(((temp - 32) * 5) / 9)} grados Celsius`;

// 	} else {
// 		console.log(`ingreso incorrecto`)
// 	}	
// }

// const respuesta = calculoTemperatura(temperatura,sistema);
// console.log(respuesta);

///5  Realizar una función que reciba como parámetro un número. Si esta entre 5 y 10, que le aplique la función de factorial (ejercicio 12 de bucles), si es menor , aplicar una función que muestre su módulo (valor absoluto, valor sin el “-” en caso de ser negativo), y si es mayor que 10 aplicarle una función que muestre su doble. Ejemplos de entrada y salida:
/// 6 → 6! = 720
/// 4 → |4| = 4
/// -8 → |-8| = 8
/// 50 → 100
/// 11 → 22

///6 Rehacer el ejercicio 12 de condicionales utilizando funciones para validar edad y cobrar. 

/// (Ejercicio: Solicitar al usuario que ingrese su edad y una bebida. (Entre: Cerveza, jugo, agua). Si pide alcohol y es menor de edad que le salte un alerta indicando que no puede realizar la compra. Indicar el costo y solicitar al usuario que indique con cuanto va a pagar e indicar cuánto sería su vuelto. 
//--12


const age = parseInt(prompt(`Ingrese su edad`));
const drink = prompt(`Ingrese el codigo de la bebida que desea pedir: \n 1:cerveza \n 2:jugo \n 3:agua`);

const validarEdad = (edad, bebida) => { 
	let beer = 200;
	let juice = 150;
 	let water = 90;

	if (edad < 18 && bebida == "1") {
 		alert(`Ops, sos menor de edad y no podemos venderte alcohol, sorry che`)

	} else {
		let pago = parseInt(prompt(`Con cuanto vas a pagar?`));

		if(pago === beer || pago === juice || pago === water) {
		alert(`pago realizado con exito`);

	} else if(pago > beer){
		alert(`Tu vuelto es ${pago - beer}`);

	} else if(pago > juice){
		alert(`Tu vuelto es ${pago - juice}`);

	}  else if(pago > water){
		alert(`Tu vuelto es ${pago - water}`);

	} else {
		alert(`Oppss, no te alcanza.`)
	}	
		
	}

};

validarEdad(age, drink);

        



/// (Ej: La cerveza cuesta $50  y paga con 100, se le debe devolver $50. Si indica que paga con menos de lo que cuesta el producto, indicar un error).)



///7 Crear una función que reciba tres parámetros: Horas, minutos y segundos, y devolver todo pasado a segundos.
///8 Realizar una función de carga de notas en un array. Luego realizar otra función que calcule el promedio de todas y lo devuelva. 
///9 Escribir una función para cobrar en caja. Agregando funciones que: 
/// * Si no es cliente A, agregue el IVA. 
/// * Se solicite un monto de descuento a aplicar, y lo aplique.
/// * Finalmente, realice el cobro solicitando al usuario con cuánto desea abonar.


///10 Vamos a realizar (intentando no llorar) un conversor de monedas. Primero vamos a generar una función que reciba dos parámetros, tipo de moneda y monto y la convierta a pesos. (Tipos de moneda aceptados dólares, euros y reales). 
/// Luego vamos a realizar una función que llame a esta función dos veces, con parámetros diferentes, sume ambos valores y devuelva el resultado.
/// Ejemplo: us$4, €3. Devuelve el total de: $1180. (Dificil no llorar a este punto). 
///11 Crear una función con 1 parámetro cantidad de números, que pida iterativamente la cantidad de veces ingresada. Ejemplo si por parámetro le paso 5, que pida 5 números. En cada iteración aplicarle a cada número y una función que los triplique. Guardar todos los resultados en un array.
/// Ejemplo: Paso por parámetro “4” a la función.
/// Luego ingreso 4 números: 30,15,11,14. El array final debe ser: 90,45,33,42.
///12 Realizar una función que pida la temperatura máxima y mínima del día, indicando magnitud y medida (Farenheit o Celsius), y mostrar la temperatura media (promedio de ambas), en ambos sistemas.

///    Bonus!!

///13 Vamos a realizar una cotizadora de seguros! 
/// * Como primer paso, vamos a solicitar al cliente los siguientes datos: Año de nacimiento, Nombre, sueldo bruto. 
/// * En base a su año de nacimiento, vamos a calcular su edad. 
/// * Luego, en base a su edad, seleccionar el plan que le corresponda:
/// Hasta 18 años: Plan Niños ($4000)
/// Hasta 30 años: Plan Joven. ($5200)
/// Hasta 60 años: Plan Adulto ($6400)
/// 60 en adelante: Plan Adultos Mayores. ($9700)
/// * Luego en base al plan, mostrar el monto a pagar . 
/// * Por último, en base al bruto calcular si la persona es apta, el monto de la cuota no debe superar el 20% del sueldo bruto!
/// * Mostrarle al cliente un mensaje personalizado con su nombre, indicando plan y precio si corresponde, y sino, indicar que no puede acceder al plan de salud.
/// * BONUS adicional: Agregar la chance de que pueda incluir a su grupo familiar. En este caso, debería agregar un dato más, cuántas personas hay en su familia. (Más adelante solicitaremos sus edades). El monto total del grupo familiar no debe superar el 30% del sueldo bruto.

///14 Realizar un conversor de monedas mejorado! Recibir tres parámetros: monto, moneda del monto, y moneda a convertir. (Las monedas disponibles son: peso, euro, dolar, real, yen). 
