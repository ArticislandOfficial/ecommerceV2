import React from "react";
import LabelInput from "./Labels/LabelInput";
const FormSingIn = () => {
  return (
    <>
      <form>
        <LabelInput
          htmlFor="usuario"
          label="Usuario"
          type="text"
          id="usuario"
          ariadescribedby="nameHelp"
        />
        <LabelInput
          htmlFor="contraseña"
          label="Contraseña"
          type="password"
          id="contraseña"
          ariadescribedby="passwordHelp"
        />


        <div className=" text-center">
          <button type="submit" className=" text-center  btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormSingIn;
