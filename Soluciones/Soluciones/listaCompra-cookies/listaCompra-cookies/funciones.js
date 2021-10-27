// Variables globales
let botonAnadir = document.getElementById("banadir");
let nuevoElemento= document.getElementById("canadir");
let listaCompra = document.getElementById("listaCompra");


botonAnadir.addEventListener("click",fanadir);

document.getElementById("resetear").addEventListener("click",resetear);

rellenarContenido();


function fanadir()
{
    try
    {
        if (nuevoElemento.value == "")
            throw "No se pueden añadir elementos a la lista vacíos";
        let lista = document.createElement("li");
        let texto = document.createTextNode(nuevoElemento.value);
        lista.appendChild(texto);
        lista.addEventListener("dblclick", eliminarLi);
        listaCompra.appendChild(lista);
        nuevoElemento.value = "";

        actualizarCookie();
    }
    catch(e)
    {
        alert(e);
        nuevoElemento.focus();
    }
}


function actualizarCookie()
{
    //console.log(listaCompra.innerHTML);

    // crea o modifica la cookie
    let d = new Date();

    d.setTime(d.getTime() + (7*24*60*60*1000)); //caduca en 7 días
    let expires = "expires="+ d.toUTCString(); // formato fecha

    document.cookie = " compra =" + listaCompra.innerHTML + ';'+ expires;
}

function resetear()
{
    listaCompra.innerHTML ="";
    document.cookie = "compra=; max-age=0";
}

function rellenarContenido()
{
    // Si hay algo en la lista de la compra hay que mostrarlo.
    let i=0;
    let nombre = "compra=";
    let c=document.cookie;
    if (c.indexOf(nombre) != -1 && nombre.length != c.length) // existe y no está vacía
    {
        // mostrar

        /* En mi caso solo hay una cookie si fueran varias tendríamos que
           convertir el string en un array y buscar por nombre */

            listaCompra.innerHTML = c.substring(nombre.length,c.length); // quito compra=
            //los elementos añadidos no tienen el comportamientoLi.
            elementosLista = document.getElementsByTagName("li");
            while(i<elementosLista.length){
                elementosLista[i].addEventListener("dblclick",eliminarLi);
                i++;
            }
    }
};

 function eliminarLi()
 {
     this.parentNode.removeChild(this);
     actualizarCookie();
 }
    