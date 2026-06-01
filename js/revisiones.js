import { Evaluadores } from "./claseEvaluadores.js";            // traemos la clase

export const integrantes = [                                   // lista de los 13 nombres
  "Aya", "Cristian", "Cyrille", "David", "Guillermo",
  "Jenifer", "Joelle", "Maximilian", "Mohammed",
  "Naomi", "Natalia", "Yolanda", "Yordano"
];

export const repositorios = {                                  // nombre → link github
  Aya: "https://github.com/ayaelo9",
  Cristian: "https://github.com/xiles5",
  Cyrille: "https://github.com/cyrille514",
  David: "https://github.com/dayvip369",
  Guillermo: "https://github.com/codeguille98",
  Jenifer: "https://github.com/jenifer-al",
  Joelle: "https://github.com/moussijoelle",
  Maximilian: "https://github.com/mx-2-d",
  Mohammed: "https://github.com/MohammedZakhbat",
  Naomi: "https://github.com/naomiquitosalazar-cyber",
  Natalia: "https://github.com/nataliya-stack",
  Yolanda: "https://github.com/fontanillus",
  Yordano: "https://github.com/yordano108"
};

export const crearRevisiones = () => [                          // crea 13 objetos
  new Evaluadores("Aya"),                                       // instancia = objeto
  new Evaluadores("Cristian"),
  new Evaluadores("Cyrille"),
  new Evaluadores("David"),
  new Evaluadores("Guillermo"),
  new Evaluadores("Jenifer"),
  new Evaluadores("Joelle"),
  new Evaluadores("Maximilian"),
  new Evaluadores("Mohammed"),
  new Evaluadores("Naomi"),
  new Evaluadores("Natalia"),
  new Evaluadores("Yolanda"),
  new Evaluadores("Yordano"),
];
