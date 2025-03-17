// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }
    
    listaAmigos.push(nombre);
    input.value = "";
    mostrarLista();
}

function mostrarLista() {
    const listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";
    
    listaAmigos.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }
    
    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSecreto = listaAmigos[indiceAleatorio];
    
    document.getElementById("resultado").innerText = `🎉 El amigo secreto es: ${amigoSecreto}! 🎉`;
}
