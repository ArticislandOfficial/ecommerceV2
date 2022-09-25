import React from "react";
import AppRouter from "../src/routers/AppRouter";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import ProductState from "./context/ProductState";
// import ProducContextTOP from "./context/ProductTops/ProductContextTOP";

const App = () => {
  return (
    <>
      {/* <ProducContextTOP> */}
        <AuthProvider>
          <ProductState>
            <AppRouter />
            <Footer />
          </ProductState>
        </AuthProvider>
      {/* </ProducContextTOP> */}
    </>
  );
};

export default App;
