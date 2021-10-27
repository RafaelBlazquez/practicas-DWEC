

function setCookie(cname, cvalue, exdays) {
    // crea o modifica la cookie
    let d = new Date();

    d.setTime(d.getTime() + (exdays*24*60*60*1000)); //caduca en exdays días
    let expires = "expires="+ d.toUTCString(); // formato fecha

    document.cookie = cname + "=" + cvalue + ";" + expires;
}

        
function removeCookie(cname){
    setCookie(cname,"",-1);
}
        

function getCookie(cname) {
    let name = cname + "=";
    let c = document.cookie;
    return c.substring(name.length, c.length); // quito compra=

    /* En mi caso solo hay una cookie si fueran varias tendríamos que
       convertir el string en un array y buscar por nombre */

}
        

function detectCookie(cname) {
    let name = cname + "=";
    let c=document.cookie;
    if (c.indexOf(name) != -1 && (name.length != c.length))  {
        // encuentra y no está vacia
        return true;
    }
    return false;
}