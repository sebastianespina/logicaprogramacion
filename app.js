    //variables
    let numeroSecreto = 4;
    let numeroUsuario = 0;
    while (numeroUsuario != numeroSecreto) {
        numeroUsuario = prompt('Me Indicas un número por favor:');

    console.log(numeroUsuario);
    if(numeroUsuario == numeroSecreto) {
        //acertamos la condicion se cumplio
        alert(`Acertaste, el número es: ${numeroUsuario}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');    
        } else {
            alert('el numero secreto es mayor');
        }
        //la condicion no se cumple
        //alert('Lo siento no acertaste el numero');
    }
}    