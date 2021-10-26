/////1

let introduccion = alert(`BIENVENIDO AL ADIVINADOR DE TU SUPERHEROE \n Cual de estos superheroes es tu favorito: \n - Supergirl \n 
 - WonderWoman \n - Batman \n - Superman \n - Aquaman \n- Flash`)
function adivinarSuperheroe() {
	let opcionGenero = prompt("Es varon o mujer?")

	if(opcionGenero == "varon") {
		let capa = window.confirm("Usa capa?")
		if(capa === true) {
			let colorCapa = window.confirm("Es roja?")
			if(colorCapa === true) {
				alert("jajajaj lo tengo!! Tu superheroe es Superman!!")
				localStorage.setItem("superheroe", "Superman"); 
				let mostrarSup = localStorage.getItem("superheroe")
				console.log(mostrarSup)
			} else {
				alert("Tu superheroe es Batman!!!!!")
				localStorage.setItem("superheroe", "Batman"); 
				let mostrarSup = localStorage.getItem("superheroe")
				console.log(mostrarSup)
			}
		} else {
			let poderes = window.confirm("Puese hablar con los pescados???")
			if(poderes === true) {
				alert("jajajaj soy increible!! Tu superheroe el hijo del gran Poseidon, Aquaman!!")
				localStorage.setItem("superheroe", "Aquaman"); 
				let mostrarSup = localStorage.getItem("superheroe")
				console.log(mostrarSup)
			} else {
				alert("jajajaj Tu superheroe es Flash!!")
				localStorage.setItem("superheroe", "Flash"); 
				let mostrarSup = localStorage.getItem("superheroe")
				console.log(mostrarSup)
			}
		}

	} else {
		let opcion = window.confirm("Usa lazo??")
		if(opcion === true) {
			alert("OOOhhhhhhh Mi preferida!!!!! Wonderwoman!!!!")
			localStorage.setItem("superheroe", "Wonderwoman"); 
			let mostrarSup = localStorage.getItem("superheroe")
			console.log(mostrarSup)
		} else {
			alert("Tu superheroina es SuperGirl!!!!")
			localStorage.setItem("superheroe", "Supergirl"); 
			let mostrarSup = localStorage.getItem("superheroe")
			console.log(mostrarSup)
		}
	}
}



adivinarSuperheroe()




















// GUARDA
//let superheroe = prompt('elegi un superheroe')



// localStorage.setItem('superheroeElegido','Alicia');


// let recuperarSup = localStorage.getItem('superheroeElegido');


// console.log(recuperarSup)





// Guardar en Storage
// function guardarRespuesta() {
//   localStorage.setItem("respuestaGuardada", JSON.stringify(respuesta)); 
// }

// // Cargando los productos guardados al carrito
// function recuperarCarrito() {
//   carrito = JSON.parse(localStorage.getItem("carritoGuardado"));
// }  
// if (localStorage.getItem("carritoGuardado") != null) {
//   recuperarCarrito();
//   console.log(carrito)
// }

// // Eliminar del Storage
// function borrarCarritoGuardado() {
//   localStorage.removeItem("carritoGuardado")
// }

