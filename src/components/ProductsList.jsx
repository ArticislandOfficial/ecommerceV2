import React, { useContext,useEffect } from "react";
import ProductContext from "../context/ProductContext"
import Cards from "./Cards";

const ProductsList = () => {
const { products, obtenerProductos ,eliminarProducto } = useContext(ProductContext);
  console.log(products);
useEffect(() => {
  console.log("ejecutando obtener productos");
  obtenerProductos();
}, [obtenerProductos]);


  return (
    <>
      <div className="row justify-content-evenly">
        {products.map((product) => {
          return (
            <Cards
              key={product.id}
              class="col-md-4"
              src="https://picsum.photos/1080"
              alt={product.name}
              Cardtitle={product.name}
              text={`${product.price} MXN`}
              id={product.id}
              // boton ver mas
              to={`/productos/${product.id}`}
              // boton eliminar
              onClick={() => eliminarProducto(product.id)}
            />
          );
        })}

        {/*     
          <Cards
            class="col-md-3 "
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="20 USD"
            href=""
            textButton="Ver Producto"
          />
          <Cards
            class="col-md-3 "
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="20 USD"
            href=""
            textButton="Ver Producto"
          />
          <Cards
            class="col-md-3 "
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="20 USD"
            href=""
            textButton="Ver Producto"
          />
          <Cards
            class="col-md-3 "
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="20 USD"
            href=""
            textButton="Ver Producto"
          />
          <Cards
            class="col-md-3 "
            src="https://picsum.photos/1080"
            alt="imagen1"
            Cardtitle="Producto 1"
            text="20 USD"
            href=""
            textButton="Ver Producto"
          /> */}
      </div>

  
    </>
  );
};

export default ProductsList;
