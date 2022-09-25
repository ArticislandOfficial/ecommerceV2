import React, { useReducer, useCallback } from "react";
// USECALLBACK SE UTILIZARA PARA MEMORIZAR FUNCIONES Y QUE NO SE EJECUNTEN VARIAS VECES CON LOS USEFFECT
import ProducContextTOP from "./ProductContextTOP";
import productReducer from "./ProductReducerTOP";
import {
  // obtenerProductoService,
  // actualizarProductoService,
  // crearProductoService,
  // eliminarProductoService,
  obtenerProductosService,
} from "../services/ProductServices";
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
    // const crearProducto = async (form) => {
    //   await crearProductoService(form);
    //   await obtenerProductos();
    //   // console.log(form);
    // };
    //   const eliminarProducto = async (id) => {
    //     await eliminarProductoService(id);
    //     await obtenerProductos();
    //   };
    //     const actualizarProducto = async (id, form) => {
    //       await actualizarProductoService(id, form);
    //       await obtenerProductos(id);
    //     };
    //      const obtenerProducto = useCallback(async (id) => {
    //        const res = await obtenerProductoService(id);
    //         console.log(res.data);
          //  const producto = {
          //    id: res.data._id,
          //    name: res.data.name,
          //    description: res.data.description,
          //    price: res.data.price,
          //  };
          //  dispatch({
          //    type: "OBTENER_PRODUCTO",
          //    payload: producto,
          //  });
        //  }, []);
  return (
    <ProducContextTOP.Provider
      value={{
        products: globalState.products,
        obtenerProductos,
        // crearProducto,
        // eliminarProducto,
        // actualizarProducto,
        // obtenerProducto,
      }}
    >
      {children}
    </ProducContextTOP.Provider>
  );
};

export default ProductState;
