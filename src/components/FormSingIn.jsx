// inicia sesion
import React, { useState,useContext } from "react";
import{ AuthContext }  from '../context/AuthContext'
import LabelInput from "./Labels/LabelInput";
const initForm = {
  username: "",
  password: "",
};
const FormSingIn = () => {
  //UseStates-------------------------
  // para obtencion del formulario
  const [form, setform] = useState(initForm);
  // Todo se trase desde el ../context/AuthContext
  const { auth, login } = useContext(AuthContext);
  // ----------------------------------
  // funcion para el submit//////////////////
  const handleform = async (e) => {
    e.preventDefault();
    await login(form);
    // para visualizar el objeto en consola
    console.log(form);
  };
  //////////////////////////////////////////
  const cambio = (e) => {
    // Nombre
    //  console.log(e.target.name);
    // Valor
    //  console.log(e.target.value);
    setform({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <form onSubmit={handleform}>
        <p>{auth.id}</p>
        <LabelInput
          htmlFor="usuario"
          label="Usuario"
          type="text"
          id="usuario"
          onChange={cambio}
          value={form.username}
          name="username"
          // ariadescribedby="nameHelp"
        />
        <LabelInput
          htmlFor="contraseña"
          label="Contraseña"
          type="password"
          id="contraseña"
          onChange={cambio}
          value={form.password}
          name="password"
          // ariadescribedby="passwordHelp"
        />

        <div className=" text-center">
          <button type="submit" className=" text-center  btn btn-primary">
            Inicia Sesion
          </button>
        </div>
      </form>
    </>
  );
};

export default FormSingIn;
