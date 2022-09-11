import React from "react";
import FormSigIn from "../components/FormSingIn";
import FormSigUp from "../components/FormSingUp";

const RegistroInicio = () => {
  return (
    <>
      <main className="container mt-5 ">
        <div className="row prop-paracentrar cont-posfotter-abajo pruebaform">
          <h2 className="text-center ">Vamos registrate o inicia sesion</h2>
          <section className="col-md-12 border-end ">
            <h4 className="text-center">Inicia Sesion</h4>
            <article className="">
              <FormSigIn />
            </article>
          </section>
          <section className="col-md-12">
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
