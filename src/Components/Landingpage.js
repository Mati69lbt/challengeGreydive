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
          <h5>Nombre:</h5>
          <h6>Matias Delgado</h6>
        </div>
        <div className="nom">
          <h5>Email:</h5>
          <h6>Mati69_lbt@hotmail.com</h6>
        </div>
        <div className="nom">
          <h5>Web:</h5>
          <h6>
            <a href="https://matiasdelgado.onrender.com/">Click aquí</a>
          </h6>
        </div>
        <div className="nom">
          <h5>Linkedin:</h5>
          <h6>
            <a href="https://www.linkedin.com/in/matiasdelgadodev/">
              Click aquí
            </a>
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
