import React from "react";
import "../styles/form.css";
import FormSigIn from "../components/FormSingIn";
import FormSigUp from "../components/FormSingUp";

const RegistroInicio = () => {
  return (
    <>
      <main className="container  my-5 py-5">
        <h2 className="text-center mb-5">Vamos registrate o inicia sesion</h2>
        <main className="row pruebaform">
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
        </main>
      </main>
    </>
  );
};

export default RegistroInicio;
