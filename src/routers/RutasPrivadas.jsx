import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "../Pages/HomePage";
import CheckOut from "../Pages/CheckOut";
import Producto from "../Pages/Producto";
import Productos from "../Pages/Productos";
import Porfile from "../Pages/Porfile";

// import NavBarPublic from '../components/NavBarPublic';
import NavBarPrivate from "../components/NavBarPrivate";

const  RutasPrivadas = () => {
  return (
    <>
      <NavBarPrivate />
      <div className="container   ">
        {/* mt-5 pt-5 */}
        <Routes>
          {/* Rutas Privadas */}
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/productos/:idproduct" element={<Producto />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/perfil" element={<Porfile />} />
          {/* Rutas Publicas */}
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};

export default  RutasPrivadas;
