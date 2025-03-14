// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista para almacenar los nombres ingresados
let nombres = [];

// agrego las const
const inputNombre = document.getElementById("amigo"); // Campo de texto para el nombre
const listaNombres = document.getElementById("listaAmigos"); // Lista visible de nombres
const listaResultado = document.getElementById("resultado"); // Lista donde se mostrará el resultado

// Función para agregar un nombre a la lista
function agregarAmigo() {
    const nombre = inputNombre.value.trim(); // Elimina espacios innecesarios

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido."); // Validación de entrada vacía
        return;
    }

    // Agregar el nombre a la lista si es válido
    nombres.push(nombre);

    // Mostrar el nombre en la lista visible
    const elementoLista = document.createElement("li");
    elementoLista.textContent = nombre;
    listaNombres.appendChild(elementoLista);

    // Limpiar el campo de texto
    inputNombre.value = "";
}

// Función para realizar el sorteo aleatorio
function sortearAmigo() {
    if (nombres.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * nombres.length); // Índice aleatorio
    const nombreSorteado = nombres[indiceAleatorio];

    // Mostrar el resultado en la lista de resultados
    listaResultado.innerHTML = ""; // Limpiar cualquier resultado anterior
    const resultadoElemento = document.createElement("li");
    resultadoElemento.textContent = `El amigo sorteado es: ${nombreSorteado}`;
    listaResultado.appendChild(resultadoElemento);
}
