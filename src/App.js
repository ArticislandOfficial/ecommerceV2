import React from "react";
import AppRouter from "../src/routers/AppRouter";
import Footer from "./components/Footer";
import { AuthProvider } from "./context/AuthContext";
// import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import ProductState from "./context/ProductState";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


const App = () => {
  return (
    <>
      <AuthProvider>
        {/* <PayPalScriptProvider
          options={{
            "client-id":
              "AVxE4OsPYQFvrnhcDPeu1x78puMjbmXWKJM4bXqIJF3t86N46keduJHroaUFzly_eVB5Vd9X9zBI1p4n",
          }}
        > */}
          <ProductState>
            <AppRouter />
            <Footer />
          </ProductState>
        {/* </PayPalScriptProvider> */}
      </AuthProvider>
    </>
  );
};

export default App;
