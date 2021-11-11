
var teclado;
var clave = document.getElementById("clave");
var usuario = document.getElementById("dni");
var lista = document.getElementById("numeros");
var lis = document.getElementsByTagName("li");
var tecladoGenerado = false;
var cantidad =0;
var localData;
var usuario2;
var clave2;

usuario.addEventListener("focusin",eliminarTeclado, true);

function claveActiva(){
    if(!tecladoGenerado){
        generarTeclado()
        clave.classList.add("seleccionado");
    }
}

function cambiarPagina(){
    alert("Todo bien");
    guardarDatos();
   
}

function generarTeclado(){
    var numeros = ["0","1","2","3","4","5","6","7","8","9"];
    for(let x =0 ;x< 10; x++){
        var posicionAzar = Math.floor(Math.random() * (numeros.length-1));
        let elemento = document.createElement("li");
        var boton = document.createElement("p");
        boton.setAttribute("class","numero");
        boton.setAttribute("id",numeros[posicionAzar]);
        boton.addEventListener("click" ,escribirNumero, false );
        let contenido =document.createTextNode(numeros[posicionAzar]);
        elemento.appendChild(boton);
        boton.appendChild(contenido);
        lista.appendChild(elemento);
        numeros.splice(posicionAzar,1);

    }
    tecladoGenerado=true;
}

function escribirNumero(){

    if (cantidad<6){
        console.log(cantidad);
        if(clave.getAttribute("value") !=null){
            clave.setAttribute("value", clave.getAttribute("value")+this.getAttribute("id"));
            cantidad++;
        }
        else{
            clave.setAttribute("value", this.getAttribute("id"));
            cantidad++;
        }
    }
}

function eliminarTeclado(){
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild);
      }
    tecladoGenerado=false;
}

function cargarDatos() {
    usuario2 = localStorage.getItem('usuario');
    clave2 =localStorage.getItem('clave');
    alert(usuario2 +" , "+clave2);
}

function guardarDatos() {
    localStorage.setItem('usuario',usuario.value);
    localStorage.setItem('clave',clave.value);
}


   
