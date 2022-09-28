import React, { useReducer, useCallback } from "react";
// USECALLBACK SE UTILIZARA PARA MEMORIZAR FUNCIONES Y QUE NO SE EJECUNTEN VARIAS VECES CON LOS USEFFECT
import ProductContextTOP from "./ProductContextTOP";
import productReducer from "./ProductReducerTOP";
import {
  obtenerProductosService,
} from "../services/ProductTOPServices";
const initialState = {
  productsTOP: [],
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);
  //  Para catalogo
  const obtenerProductos = useCallback( async () => {
    const resp = await obtenerProductosService();
    const productos = resp.data.map((obj) => {
      return {
        id: obj._id,
        number:obj.number,
        name: obj.name,
        description: obj.description,
        price: obj.price,
      };
    });
    // se convierte en nuestro set como si fuera useState
    dispatch({
      type: "OBTENER_PRODUCTOS_TOP",
      payload: productos,
    });
  }, []);

     return (
    <ProductContextTOP.Provider
      value={{
        productsTOP: globalState.productsTOP,
        obtenerProductos,
  
      }}
    >
      {children}
    </ProductContextTOP.Provider>
  );
};

export default ProductState;
