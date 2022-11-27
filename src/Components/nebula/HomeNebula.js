import React from "react";
import { Link } from "react-router-dom";
import { escenario2, nebula, Tarea2, transLetCap2, video2 } from "../nombres";
import Items from "./Items";
import Tareas from "./Tareas";

const HomeNebula = () => {
  return (
    <div className="inicio">
      <div className="at">
        <div className="titulos">
          <h1 style={{ marginBottom: "-15px" }}>Simulacr.</h1>
          <div className="subtitle">
            <h3 className="cliente">Cliente:</h3>
            <h2>
              <b>{nebula}</b>
            </h2>
          </div>
        </div>
      </div>

      <div>
        <Items />
      </div>
      <br />
      <div className="video">
        <video
          src={video2}
          controls
          style={{ width: "60%", height: "60%" }}
        ></video>
      </div>

      <div className="escenario">
        <h2 style={{ marginBottom: "-15px" }}>
          <u>
            <b>Tareas</b>
          </u>
        </h2>
        <div className="esc">
          <h3 style={{ marginRight: "5px" }}>Escenario:</h3>
          <p> {escenario2}</p>
        </div>
        <div className="tareas">
          {Tarea2.map((tarea, index) => (
            <Tareas key={index} tarea={tarea} numero={index} />
          ))}
        </div>
      </div>
      <hr />

      <div className="transcripcion">
        <u>
          <b>
            <h2 style={{ textAlign: "center" }}>Transcripción:</h2>
          </b>
        </u>
        <ul>
          {transLetCap2.map((el, index) => (
            <div key={index}>
              <li>
                <p style={{ textAlign: "justify" }}>{el}</p>
              </li>
            </div>
          ))}
        </ul>
      </div>

      <Link to="/">
        <button>Back</button>
      </Link>
    </div>
  );
};

export default HomeNebula;
