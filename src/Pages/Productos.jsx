import React from "react";
import ProductsCards from "../components/ProductsCards";

const Productos = () => {
  return (
    <>
      <section className="row d-flex justify-content-evenly">
        <h3 className="my-3 text-center">Productos y Servicios</h3>
        <ProductsCards/>
       
      </section>
    </>
  );
};

export default Productos;
