import React, { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";

const Producto = () => {
  const { idproduct } = useParams();
  const { obtenerProducto,product } = useContext(ProductContext);
  useEffect(() => {
    console.log(idproduct);
    obtenerProducto(idproduct);
  }, [idproduct, obtenerProducto]);
  
  return (
    <>
      <section className=" row mt-5  cont-posfotter-abajo">
        <article className=" col-md-4 prop-paracentrar align-middle my-3">
          <img
            // col-md-3 col-sm-3
            className="img-fluid  contenedorImg"
            srcSet="https://picsum.photos/1080"
            alt=""
          />
        </article>

        <section className="col-md-9">
          <h2 className="mb-2">Producto Variable {product.name}</h2>
          <p>{product.description}</p>
        </section>
        <div className="col-md-3">
          <div className="card-body">
            <h5 className="card-title mb-3">Caracteristicas</h5>
            <p className="card-text">{product.price} MXN </p>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="button">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* <article className="col-md-8">
          <div className="card" style={{ width: "18rem" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Imagen_no_disponible.svg/1200px-Imagen_no_disponible.svg.png"
              className="card-img-top"
              alt={product.name}
            />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">{product.description}</p>
              <p className="card-text">{product.price}</p>
              <button
                type="button"
                className="btn btn-primary "
                onClick={handleAgregarProductoCarrito}
              >
                agregar al carrito
              </button>
            </div>
          </div>
        </article> */}
      </section>
    </>
  );
};

export default Producto;
