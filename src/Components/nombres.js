import db from "../json/db.json";

function capitalizarPrimeraLetra(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// NEBULA
const cliente2 = db[1].cliente;

export const nebula = capitalizarPrimeraLetra(cliente2);
export const escenario2 = db[1].escenario;
export const video2 = db[1].linkVideo;
export const tareas2 = db[1].preguntas;

const transcripcion2 = db[1].transcripcion.split("<br>");
export const transLetCap2 = transcripcion2.map((el) =>
  el.trim().replace(/^\w/, (c) => c.toUpperCase())
);
transLetCap2.pop();

let allTareas2 = [];
tareas2.map((e) => allTareas2.push(e));
allTareas2.unshift(escenario2);

export const FTareas2 = allTareas2.map((e) =>
  e.texto ? e.texto.replace("\\n", "\n") : escenario2
);

export const Tarea2 = tareas2.map((e) => {
  let b = {
    texto: e.texto.replace("\\n", "\n"),
    tiempo: e.tiempo,
    respuesta: e.respuesta === "respuesta verbal" ? null : e.respuesta,
  };
  return b;
});

// VIAMO
const cliente1 = db[0].cliente;

export const viamo = capitalizarPrimeraLetra(cliente1);
export const video = db[0].linkVideo;
export const escenario = db[0].escenario;
export const tareas = db[0].preguntas;

let allTareas = [];
tareas.map((e) => allTareas.push(e));
allTareas.unshift(escenario);

export const FTareas = allTareas.map((e) =>
  e.texto ? e.texto.replace("\\n", "\n") : escenario
);

export const Tarea = tareas.map((e) => {
  let b = {
    texto: e.texto.replace("\\n", "\n"),
    tiempo: e.tiempo,
    respuesta: e.respuesta === "respuesta verbal" ? null : e.respuesta,
  };
  return b;
});

let transcripcion = db[0].transcripcion.split("<br>");
export const transLetCap = transcripcion.map((el) =>
  el.trim().replace(/^\w/, (c) => c.toUpperCase())
);
transLetCap.pop();
