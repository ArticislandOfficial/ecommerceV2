import React from "react";
import Cards  from "../components/Cards";
const HomePage = () => {
  return (
    <>
      <section className="hero">
        <article className="contenido-hero">
          <h2>Servicios de impresion , diseño y venta de modelos 3D</h2>
          <button type="button" class="boton btn btn-success">
            Ver catalogo
          </button>
        </article>
      </section>
      <section className="row">
        <h3>Top de Productos</h3>
        <article className="col-md-4 ">
          <Cards
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="20 USD"
            href=""
            textButton="Ver Producto"
          />
        </article>
        <article className="col-md-4">
          <Cards
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="50 USD"
            href=""
            textButton="Ver Producto"
          />
        </article>
        <article className="col-md-4">
          <Cards
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="80 USD"
            href=""
            textButton="Ver Producto"
          />
        </article>
      </section>
    </>
  );
};

export default HomePage;
