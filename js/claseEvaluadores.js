export class Evaluadores {                                    // molde de la ficha
  constructor(revisor) {                                       // se ejecuta con new Evaluadores()
    this.revisor = revisor;                                    // quien evalua
    this.revisado = null;                                      // quien es evaluado (despues)
    this.repositorio = null;                                   // link del proyecto (despues)
  }
}
