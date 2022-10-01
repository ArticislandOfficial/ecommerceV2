import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";

import HomePage from "../Pages/HomePage";

import RegistroInicio from "../Pages/RegistroInicio";
import RegisterPage from "../Pages/RegisterPage";
import NavBarPublic from "../components/NavBarPublic";

const RutasPublicas = () => {
  return (
    <>
      <NavBarPublic />
      <div className="container   ">
        {/* mt-5 pt-5 */}
        <Routes>
          {/* Rutas exlusivamente publicas */}
          <Route path="/inicio" element={<RegistroInicio />} />
          <Route path="/register" element={<RegisterPage />} />
          {/* Rutas Publicas */}
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </>
  );
};

export default RutasPublicas;
