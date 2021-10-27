window.onload = function() {

    let enlaces = document.getElementsByTagName('a');

    //Cantidad de enlaces
    console.log(enlaces.length);

    //Dirección del penúltimo
    console.log(enlaces[enlaces.length - 2].href);

    //Numero de enlaces que enlazan a http://prueba.
    let contadorEnlacePrueba = 0;
    for (let i = 0; i < enlaces.length; i++) {
        if(enlaces[i].href == "http://prueba/") // Con filter o con find
        {
            contadorEnlacePrueba++;
        }
    }
    console.log(contadorEnlacePrueba);

    // Número de enlaces del tercer parrafo
    console.log(document.getElementsByTagName('p')[2].getElementsByTagName('a').length);
}