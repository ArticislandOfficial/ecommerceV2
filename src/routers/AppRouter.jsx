import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { BrowserRouter as Router } from "react-router-dom";
import RutasPrivadas from "./RutasPrivadas";
import RutasPublicas from "./RutasPublicas";

const AppRouter = () => {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <Router>{auth.authStatus ? <RutasPrivadas /> : <RutasPublicas />}</Router>
    </>
  );
};

export default AppRouter;
