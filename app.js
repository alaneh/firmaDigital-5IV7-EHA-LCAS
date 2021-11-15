let formulario = document.getElementById("formulario");

function Cifrado(event) {
    const contenido = document.getElementById("subir_archivo");

    if (contenido.value == "") {
        alert("Necesitas añadir un archivo valido para firmar");
        formulario.setAttribute("action", "/index");
    } else {
        formulario.setAttribute("action", "/cifrar");
    }

}

function Decifrado(event) {
    formulario.setAttribute("action", "/descifrar");
}