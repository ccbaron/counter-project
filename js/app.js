// Tu código aquí.

// ==== PASO 1: SELECCIONAR ELEMENTOS DEL DOM ==== //
// - "Agarrar" los elementos de HTML para poder usarlos en JS
const counterElement = document.getElementById("counter"); // El número del contador (h1 con id="counter")
const addButton = document.querySelector(".nextBtn");     // Botón para AÑADIR (clase .nextBtn)
const lowerButton = document.querySelector(".prevBtn");   // Botón para DISMINUIR (clase .prevBtn)

// ==== PASO 2: DECLARAR EL ESTADO INICIAL ==== //
// - "count" es la variable que guarda el valor actual del contador
let count = 0; // Empieza en 0

// ==== PASO 3: FUNCIÓN PARA ACTUALIZAR EL CONTADOR ==== //
// - Actualiza el número en pantalla y el color
function updateCounter() {
  counterElement.textContent = count; // Muestra el nuevo valor

  // Cambia el color según el valor:
  if (count > 0) {
    counterElement.style.color = "green";  // Positivo = verde
  } else if (count < 0) {
    counterElement.style.color = "red";    // Negativo = rojo
  } else {
    counterElement.style.color = "black"; // Cero = negro
  }
}

// ==== PASO 4: EVENTOS PARA LOS BOTONES ==== //
// - Botón "AÑADIR": Incrementa el contador
addButton.addEventListener("click", () => {
  count++; // Aumenta en 1 (equivalente a count = count + 1)
  updateCounter(); // Llama a la función para actualizar la pantalla
});

// - Botón "DISMINUIR": Decrementa el contador
lowerButton.addEventListener("click", () => {
  count--; // Disminuye en 1 (equivalente a count = count - 1)
  updateCounter(); // Llama a la función para actualizar la pantalla
});

// ==== PASO 5 (OPCIONAL): LIMITES ==== //
// - Para que el contador no pase de -10 o 10, añade esto dentro de los eventos:
// if (count > 10) count = 10;   // Límite superior
// if (count < -10) count = -10; // Límite inferior