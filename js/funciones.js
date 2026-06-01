export const asignarPares = (revisiones, nombres, repos) => {   // biblioteca: solo datos
  let valido = false;                                           // aun no hay asignacion valida

  while (!valido) {                                             // repite hasta cumplir reglas
    const baraja = [...nombres].sort(() => Math.random() - 0.5); // mezcla al azar
    valido = revisiones.every((rev, i) => rev.revisor !== baraja[i]); // regla 1: no evaluarse a si mismo

    if (valido) {                                               // si la mezcla es valida
      revisiones.forEach((rev, i) => {                          // recorre cada ficha
        rev.revisado = baraja[i];                               // regla 2: cada nombre 1 sola vez
        rev.repositorio = repos[rev.revisado];                  // busca el link del revisado
      });
    }
  }

  return revisiones;                                            // devuelve fichas completas
};
