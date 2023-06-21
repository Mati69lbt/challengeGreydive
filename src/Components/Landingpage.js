import React from "react";
import { Link } from "react-router-dom";
import { nebula, viamo } from "./nombres";
import "../css/landingpage.css";

const Landingpage = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <div className="init">
        <h1 className="ti">Simulacr</h1>
        <div className="bot">
          <Link to="/viamo">
            <button className="css-button-retro--sky ">{viamo}</button>
          </Link>
          <Link to="/nebula">
            <button className="css-button-retro--sky ">{nebula}</button>
          </Link>
        </div>
      </div>
      <div className="footer">
        <div className="nom">
          <h3>Nombre:</h3>
          <h4>Matias Delgado</h4>
        </div>
        <div className="nom">
          <h3>Email:</h3>
          <h4>Mati69_lbt@hotmail.com</h4>
        </div>
        <div className="nom">
          <h3>Web:</h3>
          <h4>
            <a href="https://matiasdelgado.onrender.com/">Click aquí</a>
          </h4>
        </div>
        <div className="nom">
          <h3>Linkedin:</h3>
          <h4>
            <a href="https://www.linkedin.com/in/matiasdelgadodev/">
              Click aquí
            </a>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
