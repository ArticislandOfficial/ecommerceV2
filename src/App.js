import React from 'react';
import AppRouter from "../src/routers/AppRouter"
import Footer from './components/Footer'
import { AuthProvider } from "./context/AuthContext";


import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js"

const App = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App