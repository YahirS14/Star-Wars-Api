import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";

function Cards() {
  const navigate = useNavigate();

  const [nav, setnav] = useState([]);

  const [page, setPage] = useState(1);

  const [hasMore, sethasMore] = useState(true)

  const url = "https://swapi.dev/api/starships/?page=" + page;

  useEffect(() => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((datos) =>
        setnav((preChracter) => preChracter.concat(datos.results))
      )
      .then(datos => sethasMore(datos.page < 9))
      .catch((error) => console.log(error));
  }, [page]);

  const obtenerInfo = (e) => {
    const info = e.nativeEvent.path[2].children;
    console.log(info[1]);

    const char = {
      nombre: info[0].childNodes[0].textContent,
      altura: info[1].childNodes[1].textContent,
      peso: info[2].childNodes[1].textContent,
      nacimiento: info[3].childNodes[1].textContent,
    };

    const mandar = async () => {
      try {
        const url = "http://localhost:4000/favoritos";
        const respuesta = await fetch(url, {
          method: "POST",
          body: JSON.stringify(char),
          headers: {
            "Content-Type": "application/json",
          },
        });

        console.log(respuesta);
        const resultado = await respuesta.json();
        console.log(resultado);

        navigate("/favoritos");
      } catch (error) {
        console.log(error);
      }
    };
    mandar();
  };

  return (
    <>
      <InfiniteScroll
        dataLength={nav.length}
        hasMore={hasMore}
        next={() => setPage((prevPage) => prevPage + 1)}
      >
        <section className="contenedor-card">
          {nav.map((item, index) => (
            <div key={index} className="card">
              <div className="info-card">
                <h2>{item.name}</h2>
                <p>Modelo: {item.model}</p>
                <p>Tamaño: {item.length}</p>
                <p>Costo: {item.cost_in_credits}</p>
                <div className="contenedor-btn">
                  <a onClick={obtenerInfo}>Añadir a Favoritos</a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </InfiniteScroll>
    </>
  );
}
export default Cards;
