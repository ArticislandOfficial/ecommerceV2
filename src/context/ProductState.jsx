import React, { useReducer, useCallback } from "react";
// USECALLBACK SE UTILIZARA PARA MEMORIZAR FUNCIONES Y QUE NO SE EJECUNTEN VARIAS VECES CON LOS USEFFECT
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";
import { obtenerProductosService} from "../services/ProductServices";
const initialState = {
  products: [],
};

const ProductState = ({ children }) => {
  const [globalState, dispatch] = useReducer(productReducer, initialState);
  //  Para catalogo
  const obtenerProductos = useCallback( async () => {
    const resp = await obtenerProductosService();
    const productos = resp.data.map((obj) => {
      return {
        id: obj._id,
        name: obj.name,
        description: obj.description,
        price: obj.price,
      };
    });
    // se convierte en nuestro set como si fuera useState
    dispatch({
      type: "OBTENER_PRODUCTOS",
      payload: productos,
    });
  }, []);
  return (
    <ProductContext.Provider
      value={{ products: globalState.products, obtenerProductos }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
