window.onload = function ()
{
    let division = document.getElementsByTagName('div')[0];
    let botonAddPrincipio = document.getElementById("addPrincipio");
    let botonDeletePrincipio = document.getElementById("deletePrincipio");
    let botonAddFinal = document.getElementById("addFinal");
    let botonDeleteFinal = document.getElementById("deleteFinal");
    let botonAddX = document.getElementById("addX");
    let botonDeleteX = document.getElementById("deleteX");

    botonAddPrincipio.addEventListener("click", () => {
        let node = document.createElement("input");
        node.value="Al principio"; // createTextNode
        division.prepend(node);
    })
    botonDeletePrincipio.addEventListener("click", () => {
        let inputArray = document.getElementsByTagName('input')[0];
        //inputArray.remove();
        division.removeChild(division.children[0]);
        //firstchild
    })
    botonAddFinal.addEventListener("click", () => {
        let node = document.createElement("input");
        node.value="Al final";
        division.appendChild(node);
    })
    botonDeleteFinal.addEventListener("click", () => {
        let inputArrayLength = document.getElementsByTagName('input').length;
        let inputArray = document.getElementsByTagName('input')[inputArrayLength-1];
        inputArray.remove();
    })
    botonAddX.addEventListener("click", () => {
        let posicion = parseInt(prompt("Introduce la posicion donde quieres introducir la caja"));
        let node = document.createElement("input");
        node.value="En la posicion " + posicion;
        division.insertBefore(node, division.getElementsByTagName('input')[posicion]);
    })
    botonDeleteX.addEventListener("click", () => {
        let posicion = prompt("Introduce el numero de la caja que quieres eliminar");
        document.getElementsByTagName('input')[posicion].remove();
    })

}