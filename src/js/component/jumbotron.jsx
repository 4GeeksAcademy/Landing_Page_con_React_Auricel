import React from "react";
import "../../styles/jumbotron.css";

const Jumbotron = () => {
  return (
    <div className="container mt-3 fondo">
      <div className="p-4 mb-4  rounded-3">
        <div className="container-fluid py-5 p-0">
          <h1 className="display-5 fw-bold">Made in Studios</h1>
          <p className="fs-4">
          es un centro de tatuajes versátil, formado por un equipo de tatuadores profesionales,  manejamos gran variedad de estilos e innovamos con los diseños para que cada pieza sea única y original. 
          </p>
          <button className="btn btn-primary btn-lg" type="button">
            Pedir Cita
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;