import React, { useReducer} from "react";
// USECALLBACK SE UTILIZARA PARA MEMORIZAR FUNCIONES Y QUE NO SE EJECUNTEN VARIAS VECES CON LOS USEFFECT
import ProductContext from "./ProductContext";
import productReducer from "./ProductReducer";

const initialState = {
  products: [
    {
      id: 1,
      name: "Laptop",
      description: "Laptop lenovo alta gama",
      price: 4000,
    },
    {
      id: 2,
      name: "Refri",
      description: "Electrodomestico para guardar alimentos",
      price: 10000,
    },
  ],
  
};

const ProductState = ({ children }) => {
//    const [globalState, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ products: initialState.products, }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductState;
