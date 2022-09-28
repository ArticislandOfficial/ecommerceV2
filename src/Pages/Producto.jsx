import React, { useEffect, useContext } from "react";
import ProductContext from "../context/ProductContext";
import { useParams } from "react-router-dom";
import ProductFormEdit from "../components/ProductFormEdit";

const Producto = () => {
  const { idproduct } = useParams();
  const { obtenerProducto, product, agregarProductoCarrito } =
    useContext(ProductContext);
  const handleAgregarProductoCarrito = ()=>{
  agregarProductoCarrito(product);
  }
  useEffect(() => {
    obtenerProducto(idproduct);
  }, [idproduct, obtenerProducto]);

  return (
    <>
      <section className=" row mt-5  cont-posfotter-abajo">
        <article className="col-md-4 pt-5">
          <ProductFormEdit />
        </article>
        <article className=" col-md-4 prop-paracentrar align-middle my-3">
          <img
            // col-md-3 col-sm-3
            className="img-fluid  contenedorImg"
            srcSet="https://picsum.photos/1080"
            alt=""
          />
        </article>

        <section className="col-md-9">
          <h2 className="mb-2">{product.name}</h2>
          <p>{product.description}</p>
        </section>
        <div className="col-md-3">
          <div className="card-body">
            <h5 className="card-title mb-3">Caracteristicas</h5>
            <p className="card-text">{product.price} MXN </p>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button
                onClick={handleAgregarProductoCarrito}
                className="btn btn-primary"
                type="button"
              >
                Agregar al carrito
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Producto;
