import React from "react";

const Tareas = ({ tarea, numero }) => {
  

  return (
    <div className="item">
      <ul>
        <hr />
        <p>
          <b>Tarea:</b> {numero + 1}
        </p>
        <p>{tarea.texto}</p>
        {tarea.respuesta ? <p>Repuesta: {tarea.respuesta}</p> : null}
        <p style={{ color: "red" }}>Duración de la tarea: {tarea.tiempo}</p>
      </ul>
    </div>
  );
};

export default Tareas;
