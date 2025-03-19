// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("amigo");
    const agregarAmigo = document.getElementById("agregarAmigo");
    const listaAmigos = document.getElementById("listaAmigos");
    const randomButton = document.getElementById("sortear");
    const resultado = document.getElementById("resultado");
    
    let names = [];

    function isValidName(name) {
        return /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+(?: [A-Za-zÁÉÍÓÚáéíóúÑñ]+)*$/.test(name.trim());
    }
    
    agregarAmigo.addEventListener("click", function () {
        const name = nameInput.value.trim();
        if (isValidName(name)) {
            names.push(name);
            updateNameList();
            nameInput.value = "";
        } else {
            alert("Por favor, ingresa un nombre válido.");
        }
    });

    randomButton.addEventListener("click", function () {
        if (names.length > 0) {
            const randomIndex = Math.floor(Math.random() * names.length);
            resultado.textContent = `Nombre seleccionado: ${names[randomIndex]}`;
        } else {
            alert("No hay nombres en la lista para seleccionar.");
        }
    });

    function updateNameList() {
        listaAmigos.innerHTML = "";
        names.forEach(name => {
            const li = document.createElement("li");
            li.textContent = name;
            listaAmigos.appendChild(li);
        });
    }
    
});
