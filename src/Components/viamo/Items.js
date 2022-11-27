import React, { useState } from "react";
import "../../css/items.css";
import { FTareas } from "../nombres";

const Items = () => {
  const [pos, setPos] = useState(0);
  const total = FTareas.length;

  return (
    <div className="items">
      {pos === 0 ? (
        <div>
          <div className="card">
            <div className="content">
              <div className="front">
                <h3 className="title">Tareas</h3>
              </div>
              <div className="back">
                <p className="description">{FTareas[pos]}</p>
              </div>
            </div>
          </div>

          <div className="sig">
            <button className="cta" onClick={() => setPos(pos + 1)}>
              <span>Siguiente</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className="card">
            <div className="content">
              <div className="front">
                <h3 className="title">Tarea</h3>
                <p className="subtitle">{` ${pos} de ${total}`}</p>
              </div>
              <div className="back">
                <p className="description">{FTareas[pos]}</p>
                {pos === 3 ||
                pos === 4 ||
                pos === 9 ||
                pos === 37 ||
                pos === 38 ? (
                  <div>
                    <select>
                      <option value="1">Elige</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="botones">
            <button className="cta" onClick={() => setPos(pos - 1)}>
              <div className="anterior">
                <div className="flecha">
                  <svg viewBox="0 0 13 10" height="10px" width="15px">
                    <path d="M1,5 L11,5"></path>
                    <polyline points="8 1 12 5 8 9"></polyline>
                  </svg>
                </div>
                <span>Anterior</span>
              </div>
            </button>
            <button className="cta" onClick={() => setPos(pos + 1)}>
              <span>Siguiente</span>
              <svg viewBox="0 0 13 10" height="10px" width="15px">
                <path d="M1,5 L11,5"></path>
                <polyline points="8 1 12 5 8 9"></polyline>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Items;
