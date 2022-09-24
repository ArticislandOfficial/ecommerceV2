import React from "react";
import ProductsList from "../components/ProductsList";

const Productos = () => {
  return (
    <>
      <section className="row d-flex justify-content-evenly">
        <h3 className="my-3 text-center">Productos y Servicios</h3>
        <ProductsList/>
       
      </section>
    </>
  );
};

export default Productos;
