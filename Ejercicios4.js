//1.Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.
console.log("¡Bienvenido a mi programa!");
//2.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.
let = nombre = "Sebastian";
console.log(`¡Hola, ${nombre}!`)
//3.Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".
let = nombre = "Sebastian";
alert(`¡Hola, ${nombre}!`)
//Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.
nombre = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(nombre);

//4.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.
valor1 =10;
valor2 = 5;
resultado = valor1 + valor2;
console.log(`La suma de ${valor1} + ${valor2} es igual a ${resultado}`);
//5.Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.
valor1 =30;
valor2  =10;
resultado = valor1 - valor2;
console.log(`La resta de ${valor1} - ${valor2} es igual a ${resultado}`);
//6.Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.
edad =prompt('ingrese su edad');
if (edad >= 18){
    console.log('Eres mayor de edad');
}else {
    console.log('Eres menor de edad');
}
//7.Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.
numero = parseInt(prompt('Ingrese un numero'));
if (numero > 0) {
    console.log('El número es positivo');
} else if (numero < 0) {
    console.log('El número es negativo');
} else {
    console.log('El número es cero');
}
//8.Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.
let = i = 1;
while (i <= 10) {
    console.log(i);
    i++;    
}
//Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.
nota = 7;
if (nota >=7);{
    console.log('Aprobado');
}
//Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.
let numeroAleatorio = Math.random();
console.log(numeroAleatorio)
//Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.
let = numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio);
//Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
let = numeroAleatorio = Math.floor(Math.random() * 1000) + 1;