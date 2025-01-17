//Desafíos:

//Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
alert("Dia de la semana");
let dia = prompt("ingrese un dia de la semana");
console.log (dia);
if (dia == "sabado" || dia == "domingo") {
    alert("¡Buen fin de semana!");
}else {
    alert("¡Buena semana!");
}

//Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
alert ("numero positivo o negativo");
const numero = prompt("Introduce un número:");

if (numero > 0) {
  console.log("El número es positivo");
} else if (numero < 0) {
  console.log("El número es negativo");
} else {
  console.log("El número es cero");
}
//Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
  let puntuacion = 105;
if (puntuacion >= 100) {
    console.log('en hora buena has ganado')
}else {
    console.log('Intenta nuevamente para ganar')
}    
//Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoCuenta = 500.000;
console.log(`tu saldo actual es: ${saldoCuenta}`)
//Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let nombre = prompt("ingrese su nombre");
alert (`Bienvenido ${nombre}`)