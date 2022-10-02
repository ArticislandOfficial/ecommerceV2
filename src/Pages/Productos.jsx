import React from "react";
// import ProductForm from "../components/ProductForm";
import ProductsList from "../components/ProductsList";

const Productos = () => {
  return (
    <>
      <section className="row d-flex justify-content-evenly ">
        <h3 className="my-3 text-center">Productos y Servicios</h3>
        {/* <article className="col-md-6">
          <ProductForm />
        </article> */}
        
          <ProductsList />
   
      </section>
    </>
  );
};

export default Productos;
