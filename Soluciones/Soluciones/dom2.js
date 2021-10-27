window.onload = function()
{
    // Vía id es más lógico
    let boton = document.getElementsByTagName('button')[0];
    let lista = document.getElementsByTagName('ul')[0];

    boton.addEventListener("click", function () {
        let node = document.createElement("li");
        let textNode = document.createTextNode(prompt("Teclea el dato", "otro"));
        node.appendChild(textNode);
        lista.appendChild(node);
    })
}