import React from "react";
import FormSigIn from "../components/FormSingIn";
import FormSigUp from "../components/FormSingUp";

const RegistroInicio = () => {
  return (
    <>
      <main className="container py-5">
        <h2 className="text-center mb-5">Vamos registrate o inicia sesion</h2>
        <div className="row pruebaform">
          <section className="col-md-6 ">
            <h4 className="text-center">Inicia Sesion</h4>
            <article>
              <FormSigIn />
            </article>
          </section>
          <section className="col-md-6">
            <h4 className="text-center">Registrate</h4>
            <article>
              <FormSigUp />
            </article>
          </section>
        </div>
      </main>
    </>
  );
};

export default RegistroInicio;
