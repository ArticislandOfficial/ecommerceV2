import React from "react";
import FormSigIn from "../components/FormSingIn";
// import FormSigUp from "../components/FormSingUp";

const RegistroInicio = () => {
  return (
    <>
      <main className="container mt-5 ">
        <div className="row prop-paracentrar  pruebaform">
          <h1 className="text-center "> Inicia sesion</h1>
          <section className=" col d-flex justify-content-center align-items-center">
            <article className="w-50">
              <FormSigIn />
            </article>
          </section>
          {/* <section className="col-md-12">
            <h4 className="text-center">Registrate</h4>
            <article>
              <FormSigUp />
            </article>
          </section> */}
        </div>
      </main>
    </>
  );
};

export default RegistroInicio;
