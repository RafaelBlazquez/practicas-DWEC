function anadirObjetoLista(){
    lista = document.getElementsByTagName('ul');
    let elemento = document.createElement('li');
    let contenido =document.createTextNode("Cositas");
    elemento.appendChild(contenido);
    lista[0].appendChild(elemento);
}