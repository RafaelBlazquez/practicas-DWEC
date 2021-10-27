var enlaces;

document.onload=empezar();

function empezar(){
    contarEnlaces();
    direccionPenultimoEnlace();
    enlacesA("file:///C:/Users/2gdaw05/Desktop/Rafael/Reto_2/practicas-DWEC/Ejercicio1.html#4");
    cantidadEnlacesParr3();
}

function contarEnlaces(){
    enlaces = document.getElementsByTagName("a");
    document.write(enlaces.length);
}
function direccionPenultimoEnlace(){
    var posicion = enlaces.length -2;
    document.write('<br>'+ enlaces[posicion].href);
}
function enlacesA(url){
    let cantidad=0;
    for(let x=0;x<enlaces.length;x++){
        if(enlaces[x]==url){
            cantidad++
        }
    }
    document.write('<br>'+cantidad); 
}

function cantidadEnlacesParr3(){
    let parrafos = document.getElementsByTagName("p");
    enlacesParrafo = parrafos[2].getElementsByTagName("a");
    
    document.write('<br>'+ enlacesParrafo.length)
}