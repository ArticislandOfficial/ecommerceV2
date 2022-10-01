import React, { createContext, useState, useCallback } from "react";
import {
  loginService,
  signupSerivce,
  verifyingTokenSerivce,
} from "../services/authSertvices";

export const AuthContext = createContext({});

// solo se va utilizar par la autentificacion
const initialState = {
  id: null,
  email: null,
  username: null,
  password: null,
  // bandera para navbar dinamico
  authStatus: false,
};

export const AuthProvider = ({ children }) => {
  const [auth, setauth] = useState({ initialState });
  //   para  recibir el formulario y entrar a la tienda
  const login = async (form) => {
    const data = await loginService(form);
    setauth({
      id: data.data.id,
      email: data.data.email,
      username: data.data.username,
      password: data.data.password,
      // bandera para navbar dinamico
      authStatus: true,
    });
    console.log("Iniciando sesion");

    localStorage.setItem("token", data.token);
  };
  // Funcion para crear usuario
  const signup = async (form) => {
    console.log("Registrando usuario");

    const data = await signupSerivce(form);
    // se actuializa el estado
    setauth({
      id: data.data.id,
      email: data.data.email,
      username: data.data.username,
      password: data.data.password,
      // bandera para navbar dinamico
      authStatus: true,
    });
    // se guarda en eln local storage
    localStorage.setItem("token", data.token);
  };
  //
  const verifyingToken = useCallback(async () => {
    const token = localStorage.getItem("token");

    if (token) {
      const resp = await verifyingTokenSerivce();
      localStorage.setItem("token", resp.token);
      setauth({
        id: resp.data.id,
        username: resp.data.username,
        email: resp.data.email,
        password: resp.data.password,
        // bandera para navbar dinamico
        authStatus: true,
      });
    } else {
      localStorage.removeItem("token");
      setauth({
        id: null,
        username: null,
        email: null,
        password: null,
        // bandera para navbar dinamico
        authStatus: false,
      });
    }
  }, []);
  const logout = () => {
    console.log("remueve token");
    localStorage.removeItem("token");
    setauth({
      id: null,
      username: null,
      email: null,
      password: null,
      // bandera para navbar dinamico
      authStatus: false,
    });
  };
  return (
    <AuthContext.Provider
      value={{ auth, login, signup, verifyingToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
