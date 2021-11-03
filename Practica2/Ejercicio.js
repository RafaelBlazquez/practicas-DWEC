
var teclado;
var clave = document.getElementById("clave");
var usuario = document.getElementById("dni");
var lista = document.getElementById("numeros");
var lis = document.getElementsByTagName("li");
var tecladoGenerado = false;

usuario.addEventListener("focusin",eliminarTeclado, true);

function claveActiva(){
    if(!tecladoGenerado){
        generarTeclado()
    }
}
function generarTeclado(){
    let numeros = ["0","1","2","3","4","5","6","7","8","9"];
    for(let x =0 ;x< 10; x++){
        let posicionAzar = Math.floor(Math.random() * (numeros.length-1));
        let elemento = document.createElement("li");
        var boton = document.createElement("p");
        boton.setAttribute("class","numero");
        boton.setAttribute("id",numeros[posicionAzar]);
        boton.addEventListener("click" ,escribirNumero(numeros[posicionAzar]) , true );
        let contenido =document.createTextNode(numeros[posicionAzar]);
        elemento.appendChild(boton);
        boton.appendChild(contenido);
        lista.appendChild(elemento);
        numeros.splice(posicionAzar,1);
        
    }
    tecladoGenerado=true;
}
function escribirNumero(numero){
    if(clave.getAttribute("value") !=null)
        clave.setAttribute("value", clave.getAttribute("value")+numero);
    else{
        clave.setAttribute("value", numero);
    }
}
function eliminarTeclado(){
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild);
      }
    tecladoGenerado=false;
}
