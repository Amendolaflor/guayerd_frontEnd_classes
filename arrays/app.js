

// ///Ejercicios con arrays:

// ///1//////a) Solicitar al usuario que ingrese 5 nombres de frutas y almacenarlos en un array.

let frutas = "";
const frutasArray = [];

for(let i = 0; i < 5; i++) {
	frutas = prompt("Ingrese un nombre de frutas");
	frutasArray.push(frutas)
}

console.log(frutasArray)

// ///b) Ahora, solicitar al usuario que ingrese otros nombres de frutas, la cantidad que desee, sin pedirle de antemano cuál será la cantidad a ingresar.
const frutasB = prompt("Ingrese un nombre de frutas").trim();

let frutasBArray = frutasB.split(" ");
console.log(frutasBArray);

///c) Concatenar ambos arrays y mostrarlo de dos formas diferentes: Con las 5 frutas al principio, y con las 5 frutas al final.
const concatArrays1 = [...frutasBArray,...frutasArray];
const concatArrays2 = [...frutasArray,...frutasBArray];

console.log(concatArrays1); 
console.log(concatArrays2);

// ///2 ////// Crear un array con 10 nombres de ciudades, y solicitar al usuario que nos diga un número. Mostrar el nombre de la ciudad en esa posición del array.
const cuidades = ["La Plata","Bolivar","Pehuajo","Mercedes","Junin","Olavarria","Tandil","Las Flores","Bahia Blanca","Saladillo"];
const numeroCiudad = parseInt(prompt("ingrese un numero"));
const newArrayCiudad = [];
for(let i = 1; i <= numeroCiudad; i++) {
	newArrayCiudad.push(cuidades[i]);

}
console.log(cuidades);
console.log(newArrayCiudad[newArrayCiudad.length - 1]);

///3//////  Utilizar el mismo array de ciudades, solicitar al usuario un número y remover esa cantidad de ciudades del array. Mostrar dos opciones: Sacando los datos desde el principio , y desde el final del array.
//const arraysplit

///4 //////  Crear un array de 8 posiciones con nombres de artistas musicales y mostrar POR SEPARADO:
const artistasMusicales = ["L-Gante","John Lennon","La Sole","Rosalia","Shakira","Lali","Massacre","Montaner"];

//todos los elementos separados por “*”.

console.log(artistasMusicales.toString().replace(/,/g, "*"))
// Todos los elementos menos el primero

console.log(artistasMusicales.slice(artistasMusicales.shift())); 

// Su longitud
console.log("Logitud del array:" + " " + artistasMusicales.length) 

///   El último elemento.
console.log("Ultima posicion:" + " " + artistasMusicales[artistasMusicales.length - 1]) 

///  todos los elementos
console.log(artistasMusicales) 

//    todos los elementos menos el último 
console.log(artistasMusicales.splice(artistasMusicales.pop())); 

///   Solo las posiciones pares

///g    todos los elementos separados por “*”.
console.log(artistasMusicales.toString())

///h    Solicitar al usuario un nuevo artista para reemplazar al último ingresado.

///5/////  Crear un array de 8 posiciones con números enteros  y mostrar:
///a    Su longitud
///b    Solo las posiciones impares.
///c    Solo los NUMEROS impares.
///d   El mayor de ellos
///e   Mostrar la mitad de elementos del array. (Pensar esto como si no supieramos la cantidad de posiciones que tiene.)


