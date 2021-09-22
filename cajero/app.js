// // ////////// login

function login() {
	let userReg = document.getElementById("userNameRegister").value;
	let passReg = document.getElementById("passwordRegister").value;
	let userLog = document.getElementById("userNameLogin").value;
	let passLog = document.getElementById("passwordLogin").value;

	if (userLog === userReg && passReg === passLog) {
		window.location.replace("./menu.html")
	} else {
		alert(`Usuario o Contraseña incorrecto.`)
	}
}

// let user = "grupo3";
// let password = 1234

// function login() {
// 	let userIngresado = prompt("ingrese usuario")
// 	let passIngresada = prompt("ingrese contraseña")	
//   		if (user == userIngresado && password == passIngresada){
// 		    window.location.replace("./menu.html")
// 	   	 } else {
// 			alert("usuario incorrecto")
// 	   	 }
// }
	
///////////// menu princial ////////////////////////

///// fake data ---------------------
let userSaldo = 80000


function verSaldo() {
	alert(`Tu saldo actual es de: $${userSaldo}`);	
}

	
function retirarDinero() {
	let extraccion = parseInt(prompt("¿Cuánto dinero desea retirar?"));	
	if(userSaldo < extraccion) {
		alert("No puede retirar ese dinero")
	} else {
		alert(`EXTRACCION RELIZADA CON EXITO. \n Tu saldo actual es de $${userSaldo - extraccion}`)
	}
}

function depositarDinero() {
	let deposito = parseInt(prompt("¿Cuánto dinero desea depositar?"));
	alert(`DEPOSITO RELIZADO CON EXITO. \n Tu saldo actual es de $${userSaldo + deposito}`);	
}

function cambiarPassword() {	
	let newPass = prompt(`ingrese contraseña nueva`);
	alert(`CLAVE MODIFICADA CON EXITO`);
	console.log(newPass)	
}

