import React, { createContext, useState } from "react";
import { loginService } from "../services/authSertvices";

export const AuthContext = createContext({});

// solo se va utilizar par la autentificacion
const initialState = {
  id: null,
  email: null,
  username: null,
  password: null,
};

export const AuthProvider = ({children}) => {
  const [auth, setauth] = useState({ initialState });
  //   para  recibir el formulario
  const  login = async (form)=>{
    const data = await loginService(form);
    setauth({
      id: data.data.id,
      email: data.data.email,
      username: data.data.username,
      password: data.data.password,
    });
    console.log("Iniciando sesion");
 
    localStorage.setItem("token", data.token);
  }
  return <AuthContext.Provider value={{auth , login}}>{children}</AuthContext.Provider>;
}
