////////// login

function login() {
	let userReg = document.getElementById("userNameRegister").value;
	let passReg = document.getElementById("passwordRegister").value;
	let userLog = document.getElementById("userNameLogin").value;
	let passLog = document.getElementById("passwordLogin").value;
	
	if(userLog === userReg && passReg === passLog){
		window.location.replace("./menu.html")
	} else {
		alert(`Usuario o Contraseña incorrecto.`)
	}	
}




