const listaAmigos = [];
const nombreAmigoInput = document.getElementById("amigo");
const listaAmigosUl = document.getElementById("listaAmigos");
const resultadoUl = document.getElementById("resultado");

function agregarAmigo() {
    const nombre = nombreAmigoInput.value.trim(); // Obtiene el valor y elimina espacios en blanco

    if (nombre !== "") { // Solo agrega si el input no está vacío
        listaAmigos.push(nombre);
        actualizarLista();
        console.log(listaAmigos);
        nombreAmigoInput.value = ""; // Limpia el input después de agregar
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function actualizarLista() {
    listaAmigosUl.innerHTML = ""; // Limpia la lista antes de actualizar

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigosUl.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSeleccionado = listaAmigos[indiceAleatorio];

    resultadoUl.innerHTML = `<li>🎉 Amigo Secreto: <strong>${amigoSeleccionado}</strong> 🎉</li>`;
}
