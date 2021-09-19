////////////////// Ejercicios con cadenas de textos:

// Solicitar al usuario que ingrese un texto y validar si contiene la letra “a”.
let textUser = prompt("Ingrese un texto");
let textIncludes = textUser.includes("a");

console.log(`Tu texto incluye la letra "a": ${textIncludes}`);


// Solicitar al usuario que ingrese un texto y mostrarlo todo en minúsculas y todo en mayúsculas.
let textUser2 = prompt("Ingrese otro texto");
let textLowerCase = textUser2.toLowerCase();
let textUpperCase = textUser2.toUpperCase();

console.log(`Tu texto ingresado en minuscula es: ${textLowerCase}`);
console.log(`Tu texto ingresado en mayuscula es: ${textUpperCase}`);


// Solicitar al usuario que ingrese una palabra y mostrar con qué letra comienza.
let textUser3 = prompt("Ingrese nuevamente un texto");
let firstLetter = textUser3[0];

console.log(`La primer letra del texto ingresado es: ${firstLetter}`);


// Solicitar al usuario que ingrese una frase y mostrar cuántos caracteres tiene.
let phraseUser = prompt("Ingrese una frase");
let phraseLenght = phraseUser.length;

console.log(`Tu frase tiene: ${phraseLenght} caracteres`);


// Solicitar a un usuario que ingrese un número y devolver cuántos dígitos tiene.
let numberUser = prompt("Ingrese un numero");
let numberLenght = numberUser.length;

console.log(`Tu numero tiene: ${numberLenght} digitos`);


// Solicitar al usuario que ingrese una palabra y mostrar con qué letra termina.
let wordUser = prompt("Ingrese una palabra");
let lastLetter = wordUser[wordUser.length-1];

console.log(`La ultima letra del texto ingresado es: ${lastLetter}`);


// Ingresar una cadena de texto y reemplazar los espacios por asteriscos.
let phraseUser2 = prompt("Ingrese una frase");
let phraseReplace = phraseUser2.replace(/ /g, "*");

console.log(`Tu frase ahora es: ${phraseReplace}`);


// Solicitar al usuario una letra y una cadena de texto e indicar si contiene la letra indicada.
let letterUser = prompt("Ingrese una letra");
let textUser4 = prompt("Ingrese un texto");
let textIncludesLetter = textUser4.includes(letterUser);

console.log(`Se encuentra la letra en el texto ingresado? ${textIncludesLetter}`);


// Solicitar un texto y mostrarlo todo menos la primera letra.
let textUser5 = prompt("Ingrese un texto");
let textNoFirstLetter = textUser5.slice(1);

console.log(`Tu texto sin la primer letra es: ${textNoFirstLetter}`);


// Solicitar al usuario que ingrese su nombre en minúscula y mostrarlo con la primera letra mayúscula.
let textUser6 = prompt("Ingrese un texto");
let text6Lower = textUser6.slice(0, -1);
let text6Upper = textUser6.slice(-1);
let textConcat = text6Lower.toLowerCase() + text6Upper.toUpperCase();

console.log(`Tu texto con la ultima letra en mayuscula es ${textConcat}`)


