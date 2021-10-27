// Variables globales

// botón que añade un elemento a la lista de la compra.
let botonAnadir = document.getElementById("banadir");
botonAnadir.addEventListener("click",fanadir);

// caja de texto con el contenido del elemento que hay que añadir a la lista de la compra.
let nuevoElemento= document.getElementById("canadir");

// lista que representa la lista de la compra.
let listaCompra = document.getElementById("listaCompra");


document.getElementById("resetear").addEventListener("click",resetear);

// Si hay elementos en la lista almacenada en el localStorage, los muestra
rellenarContenido();


function fanadir()
{
    // Añade un elemento a la lista de la compra.
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

        actualizar(); // Además de mostrar en la página hay que actualizar el localstorage
    }
    catch(e)
    {
        alert(e);
        nuevoElemento.focus();
    }
}


function actualizar()
{
        localStorage.setItem("compra",listaCompra.innerHTML); // Añado valor con la etiqueta.
}

function resetear()
{
        localStorage.removeItem("compra")
        //listaCompra.innerHTML="";
        for( var x = listaCompra.childNodes.length - 1; x >= 0;x--)
            listaCompra.childNodes[x].parentNode.removeChild(listaCompra.childNodes[x]);
}

function rellenarContenido()
{
    // Si hay algo en la lista de la compra hay que mostrarlo.
        let i=0;
        if (localStorage.getItem("compra")!="")
        {
            // mostrar
            listaCompra.innerHTML = localStorage.getItem("compra");
            //los elementos añadidos no tienen el comportamiento Li.
            elementosLista = document.getElementsByTagName("li");
            while(i<elementosLista.length)
            {
                elementosLista[i].addEventListener("dblclick",eliminarLi);
                i++;
            }
        }
};

 function eliminarLi(){
     this.parentNode.removeChild(this);
     localStorage.setItem("compra",listaCompra.innerHTML);

 }
    