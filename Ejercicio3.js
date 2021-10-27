var donde;
function anadirObjetoLista(){
    donde = document.getElementById("cual");
    cuerpo = document.body;
    let cajaDeTexto = document.createElement('input');
    let botones = document.getElementsByTagName('button');
    let cajas = document.getElementsByTagName('input');
    cantidadCajas = cajas.length;
    if (cantidadCajas==1){
        cuerpo.insertBefore(cajaDeTexto,botones[2]);
    }
    else{
        if(cantidadCajas<donde){
            insertAfter(cajaDeTexto,cajas[donde-1]);
        }
        else{
            insertAfter(cajaDeTexto,cajas[donde-2]);
        }
    }
}

function eliminarObjetoLista(cual){
    cuerpo = document.body;
    inputs = document.getElementsByTagName('input');
    if (cual<inputs.length+1){
        cuerpo.removeChild(inputs[cual-1]);
    }
}
function insertDespuesBotones(i,e){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
}
function insertAfter(i,e){ 
    if(e.nextSibling){ 
        e.parentNode.insertBefore(i,e.nextSibling); 
    } else { 
        e.parentNode.appendChild(i); 
    }
}