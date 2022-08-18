import React from "react";

export const Fav = ({ fav, eliminar }) => {
  const { nombre, altura, peso, nacimiento, id } = fav;

  return (
    <div className="card">
      <div className="info-card">
        <h2>{nombre}</h2>
        <p>Altura: {altura}</p>
        <p>Peso: {peso}</p>
        <p>Nacimiento: {nacimiento}</p>
        <button
          className="contenedor-btn-eliminar"
          onClick={() => eliminar(id)}
          type="button"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Fav;
