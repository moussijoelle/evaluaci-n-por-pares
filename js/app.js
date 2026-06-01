import { integrantes, repositorios, crearRevisiones } from "./revisiones.js"; // destructuracion: datos
import { asignarPares } from "./funciones.js";                                // destructuracion: logica

const checkbox = document.getElementById("checkbox");          // el switch de encendido
const tablaBody = document.getElementById("tabla-body");       // cuerpo de la tabla
const mensaje = document.getElementById("mensaje");            // texto de confirmacion

const mostrarResultado = (revisiones) => {                     // pinta la tabla en pantalla
  tablaBody.innerHTML = "";                                    // borra filas anteriores

  revisiones.forEach(({ revisor, revisado, repositorio }) => {  // destructuracion del objeto
    const fila = document.createElement("tr");                 // crea fila html
    fila.className = "border-b border-stone-200";                // estilo tailwind
    fila.innerHTML = `
      <td class="px-4 py-2">${revisor}</td>
      <td class="px-4 py-2">${revisado}</td>
      <td class="px-4 py-2">
        <a href="${repositorio}" class="text-blue-600 underline" target="_blank">
          Ver proyecto
        </a>
      </td>
    `;
    tablaBody.appendChild(fila);                               // añade fila a la tabla
  });
};

const funcionMain = () => {                                    // funcion principal
  const revisiones = crearRevisiones();                        // paso 1: crear fichas
  asignarPares(revisiones, integrantes, repositorios);         // paso 2: asignar pares

  mostrarResultado(revisiones);                                // paso 3: mostrar en tabla
  mensaje.textContent = `${revisiones.length} asignaciones generadas.`; // mensaje ok
};

checkbox.addEventListener("change", () => {                    // cuando activas el switch
  if (!checkbox.checked) return;                               // solo si esta encendido
  funcionMain();                                               // ejecuta todo
  checkbox.checked = false;                                    // apaga para repetir
});
