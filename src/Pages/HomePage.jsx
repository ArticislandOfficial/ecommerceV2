import React from "react";
import { NavLink } from "react-router-dom";

import Cards from "../components/Cards";

const HomePage = () => {
  return (
    <>
      <main className="mt-5 pt-5">
        <section className="hero ">
          <article className="contenido-hero">
            <h2 className="py-1 px-2 text-center">
              Servicios de impresion , diseño y venta de modelos 3D
            </h2>
            <NavLink to="/productos">
              <button
                type="button"
                to="/productos"
                className="boton btn btn-success"
              >
                Ver catalogo
              </button>
            </NavLink>
          </article>
        </section>
        <section className="row ">
          <h3 className="my-3">Top de Productos</h3>

          <Cards
            class="col-md-4"
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="20 USD"
            href=""
            textButton="Ver Producto"
          />

          <Cards
            class="col-md-4"
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="50 USD"
            href=""
            textButton="Ver Producto"
          />

          <Cards
            class="col-md-4"
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="80 USD"
            href=""
            textButton="Ver Producto"
          />
        </section>
      </main>
    </>
  );
};

export default HomePage;
