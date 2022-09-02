import React from 'react'
import LabelInput from "./Labels/LabelInput";
const FormSingUp = () => {
  return (
    <>
      <form>
        <LabelInput
          htmlFor="correo"
          label="Correo"
          type="text"
          id="correoFS"
          ariadescribedby="correoHelp"
        />
        <LabelInput
          htmlFor="Usario"
          label="Usuario"
          type="text"
          id="UsarioFS"
          ariadescribedby="usuarioHelp"
        />
        <LabelInput
          htmlFor="Contraseña"
          label="Contraseña"
          type="password"
          id="contraseñaFS"
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
}

export default FormSingUp