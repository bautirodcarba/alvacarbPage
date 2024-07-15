function addTextToEmptyChildren(parent) {
    // Obtener todos los hijos del div padre
    const children = parent.querySelectorAll('.nav-option');
    var elemento = document.getElementById("menu");
    var op1 = document.getElementById("navop1");
    var op2 = document.getElementById("navop2");
    var op3 = document.getElementById("navop3");
    elemento.style.display = "none";
    op1.textContent ='Sobre Nosotros';
    op2.textContent ='Aprendizajes';
    op3.textContent ='Agradecimientos';
    // Iterar a través de los hijos y agregar texto si están vacío
}

function removeTextFromChildren(parent) {
    // Obtener todos los hijos del div padre
    const children = parent.querySelectorAll('.nav-option');
    var elemento = document.getElementById("menu");
    elemento.style.display = "block";
    // Eliminar el texto de todos los hijos
    children.forEach(child => {
        child.textContent = '';
    });
}