import React from 'react'
import LabelInput from "./Labels/LabelInput";
const FormSingUp = () => {
  return (
    <>
      <form>
        <LabelInput
          htmlFor="Email"
          label="Email"
          type="text"
          id="Email"
          ariadescribedby="emailHelp"
        />
        <LabelInput
          htmlFor="nombre"
          label="Nombre"
          type="text"
          id="nombre"
          ariadescribedby="nameHelp"
        />
        <LabelInput
          htmlFor="password"
          label="Password"
          type="password"
          id="passworde"
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