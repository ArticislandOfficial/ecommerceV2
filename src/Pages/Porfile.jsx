import React from "react";

import LabelInput from "../components/Labels/LabelInput";
import TextArea from "../components/Labels/TextArea";

const Porfile = () => {
  return (
    <>
      <main>
        <h3 className="pb-3 mt-5 pt-5 ">Tu informaciòn personal</h3>
        <div className="row cont-posfotter-abajo pruebaform">
          <section className="col-md-6 ">
            <article>
              <LabelInput
                htmlFor="Tuusuario"
                label="Tu usuario"
                type="text"
                id="Tuusuario"
                ariadescribedby="usuarioHelp"
              />
            </article>
          </section>
          <section className="col-md-6 ">
            <article>
              <LabelInput
                htmlFor="apellido"
                label="Apellido"
                type="text"
                id="apellido"
                ariadescribedby="apellidoHelp"
              />
            </article>
          </section>
          <section className="col-md-12 ">
            <article>
              <LabelInput
                htmlFor="correoPorfile"
                label="Correo"
                type="email"
                id="correoPorfile"
                ariadescribedby="correoPorfileHelp"
              />
            </article>
          </section>
          <section className="col-md-4 ">
            <article>
              <LabelInput
                htmlFor="pais"
                label="Pais"
                type="text"
                id="pais"
                ariadescribedby="paisHelp"
              />
            </article>
          </section>
          <section className="col-md-4 ">
            <article>
              <LabelInput
                htmlFor="ciudad"
                label="ciudad"
                type="text"
                id="ciudad"
                ariadescribedby="ciudadHelp"
              />
            </article>
          </section>
          <section className="col-md-4 ">
            <article>
              <LabelInput
                htmlFor="estado"
                label="Estado/provincia"
                type="text"
                id="estado"
                ariadescribedby="estadoHelp"
              />
            </article>
          </section>
          <section className="col-md-8 mb-3 ">
            <article>
              <TextArea
                placeholder="Describete un poco"
                id="textarea"
                htmlFor="describete"
                contenido="describete..."
              />
            </article>
          </section>
        </div>
        <button type="button" className="col-md-2 mb-3 btn btn-primary">
          Guardar Info
        </button>
      </main>
    </>
  );
};

export default Porfile;
