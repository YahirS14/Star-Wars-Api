import React, { useState, useEffect } from "react";
import Fav from "../Components/Fav";
import InfiniteScroll from "react-infinite-scroll-component";

export const Favoritos = () => {
  const [favs, setFavs] = useState([]);
  
  const [page, setPage] = useState(1);
  const url = "http://localhost:4000/favoritos/?page=" + page;

  useEffect(() => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((datos) => setFavs(datos))
      .catch((error) => console.log(error));
  }, [page]);

  const eliminar = async (id) => {
    const confirmar = confirm("¿Deseas eliminar de Favoritos?");

    if (confirmar) {
      try {
        const url = `http://localhost:4000/favoritos/${id}`;
        const respuesta = await fetch(url, {
          method: "DELETE",
        });
        await respuesta.json();

        const arrayFav = favs.filter((favs) => favs.id !== id);
        setFavs(arrayFav);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <InfiniteScroll
        dataLength={favs.length}
        hasMore={true}
        next={() => setPage((prevPage) => prevPage + 1)}
      >
        <section className="contenedor-card">
          {favs.map((fav) => (
            <Fav key={fav.id} fav={fav} eliminar={eliminar} />
          ))}
        </section>
      </InfiniteScroll>
    </>
  );
};

export default Favoritos;
