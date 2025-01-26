//Hemos llegado a otra lista de actividades (no obligatorias) para que practiques y refuerces aún más tu aprendizaje. ¿Vamos a hacerlo? Desafíos:

//Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let count = 1;
while (count <= 10) {
//alert('ejecutando la iteracion ' + count);
console.log('ejecutando la iteracion ' + count);
    count ++;
}
//Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador = 10;
while (contador >=0) {
    //alert('ejecutando la iteracion ' + contador);
    console.log(`ejeutando la iteracion  ${contador}`);
    contador --;
}
//Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let numero = parseInt(prompt('ingrese un numero'));
let i = 0;
while (i <= numero) {
    console.log(i);
    i++;
}
//Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let number = parseInt(prompt('ingrese un numero del 1 al 10'));
let j = 10;
while (j >= number) {
    console.log(j);
    j--;
}

//operador and
let edad = 25;
let tieneLicencia = true;

// si la edad es mayor de 18 y tiene una licencia...
if (edad > 18 && tieneLicencia) {
  console.log("Puede conducir!");
} else {
  console.log("No puede conducir!");
}
let tieneManzana = true;
let tieneBanana = false;

if (tieneManzana|| tieneBanana) {
  console.log("Tienes frutas!");
} else {
  console.log("No tienes frutas.");
}

//while infinito
/*let cantidadNumeros = prompt('Ingrese la cantidad de números para el cálculo del promedio:');
let suma = 0;
let contador1 = cantidadNumeros;

    while(contador1 > 0){
        let numero = parseInt(prompt('Ingrese el numero:'));
        suma += numero;
    }

    let promedio = suma / cantidadNumeros;

    console.log(promedio);*/
    //Utilizando un bucle while con la instrucción break cuando el cliente adivine el número.

    /*let numeroSecreto = Math.floor(Math.random() * 10);
    let intentos = 0;
    while (intentos < 5) {
      let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
      intentos++;
      if (intento == numeroSecreto) {
        alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
        break;
      }
    } */

//Usando un bucle for junto con la instrucción break cuando el cliente adivine el número o cuando el número de intentos llegue a 5.

/*let numeroSecreto = Math.floor(Math.random() * 10);
for (let intentos = 0; intentos < 5; intentos++) {
  let intento = parseInt(prompt("Ingrese un número del 0 al 9:"));
  if (intento == numeroSecreto) {
    alert(`¡Eso es! Descubriste el número secreto ${numeroSecreto}`);
    break;
  }
}
    */