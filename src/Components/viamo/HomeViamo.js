import React from "react";
import { Link } from "react-router-dom";
import { escenario, Tarea, transLetCap, viamo, video } from "../nombres";
import "../../css/home.css";
import Tareas from "./Tareas";
import Items from "./Items";

const HomeViamo = () => {
  return (
    <div className="inicio">
      <div className="at">
        <div className="titulos">
          <h1 style={{ marginBottom: "-15px" }}>Simulacr.</h1>
          <div className="subtitle">
            <h3 className="cliente">Cliente:</h3>
            <h2>
              <b>{viamo}</b>
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
          src={video}
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
          <p> {escenario}</p>
        </div>
        <div className="tareas">
          {Tarea.map((tarea, index) => (
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
          {transLetCap.map((el, index) => (
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

export default HomeViamo;
