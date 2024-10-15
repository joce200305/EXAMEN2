const diccionario = {
    "luz": ["claridad", "destello", "resplandor"],
    "alzar": ["elevar", "levantar", "subir"],
    "escapar": ["huir", "evadir", "desaparecer"],
    "amor": ["apego", "afecto", "ternura"],
    "dulce": ["caramelo", "golosina", "azucarado"],
    "morir": ["fallecer", "sucumbir", "perecer"],
    "pegar": ["golpear", "castigar", "maltratar"],
    "amable": ["cordial", "afable", "agradable"],
    "hermoso": ["bello", "precioso", "lindo"],
    "difícil": ["complicado", "complejo"],
    "unido": ["junto", "pegado", "fusionado"],
    "valiente": ["intrépido", "audaz"],
    "peligroso": ["arriesgado", "temerario"],
    "novio": ["pareja", "enamorado", "pretendiente"]
};

const llenarPalabraDiccionario = () => {
    const palabraDiccionarioSelect = document.getElementById("palabraDiccionario");
    for (let palabra in diccionario) {
        const opcion = document.createElement("option");
        opcion.value = palabra;
        opcion.text = palabra;
        palabraDiccionarioSelect.appendChild(opcion);
    }
};

const mostrarSinonimos = () => {
    const palabraDiccionario = document.getElementById("palabraDiccionario").value;
    const sinonimoSelect = document.getElementById("sinonimoSelect");
    sinonimoSelect.innerHTML = '<option value="" disabled selected>Selecciona un sinónimo</option>';
    
    if (diccionario[palabraDiccionario]) {
        diccionario[palabraDiccionario].forEach(sinonimo => {
            const opcion = document.createElement("option");
            opcion.value = sinonimo;
            opcion.text = sinonimo;
            sinonimoSelect.appendChild(opcion);
        });
    }
};

const buscarYReemplazar = () => {
    const texto = document.getElementById("textoUsuario").value;
    const palabraBusqueda = document.getElementById("palabraBusqueda").value.trim().toLowerCase();
    const palabraDiccionario = document.getElementById("palabraDiccionario").value;
    const sinonimoSeleccionado = document.getElementById("sinonimoSelect").value;
    const errorDivBusqueda = document.getElementById("errorBusqueda");
    const errorDivDiccionario = document.getElementById("errorDiccionario");
    const errorDivSinonimo = document.getElementById("errorSinonimo");
    let resultado = texto;

    errorDivBusqueda.innerHTML = "";
    errorDivDiccionario.innerHTML = "";
    errorDivSinonimo.innerHTML = "";

    if (palabraBusqueda === "") {
        errorDivBusqueda.innerHTML = "Por favor, ingresa una palabra que deseas buscar.";
    }

    if (!palabraDiccionario) {
        errorDivDiccionario.innerHTML = "Por favor, selecciona una palabra del diccionario.";
    }

    if (!sinonimoSeleccionado) {
        errorDivSinonimo.innerHTML = "Por favor, selecciona un sinónimo.";
    }

    if (palabraBusqueda === "" || !palabraDiccionario || !sinonimoSeleccionado) {
        return; 
    }

    resultado = resultado.replace(new RegExp(palabraBusqueda, "gi"), sinonimoSeleccionado);
    document.getElementById("resultado").innerHTML = `<p><strong>Texto modificado:</strong></p><p>${resultado}</p>`;
};

document.addEventListener("DOMContentLoaded", llenarPalabraDiccionario);

document.getElementById("palabraDiccionario").addEventListener("change", mostrarSinonimos);

document.getElementById("reemplazarBtn").addEventListener("click", buscarYReemplazar);
