import React from "react";

const Producto = () => {
  return (
    <>
      <section className=" row">
        <article className=" col-md-4 my-3">
          <img
            // col-md-3 col-sm-3
            className="img-fluid contenedorImg"
            src="https://picsum.photos/1080"
            alt=""
            srcset=""
          />
        </article>

        <section className="col-md-9">
          <h2 className="mb-2">Producto Variable</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
            aliquam assumenda, eaque esse reprehenderit illo nisi. Aut adipisci
            maiores voluptatum consectetur ratione veritatis quasi. Saepe
            impedit veritatis consectetur exercitationem suscipit.
          </p>
        </section>
        <div className="col-md-3">
          <div className="card-body">
            <h5 className="card-title mb-3">Caracteristicas</h5>
            <p className="card-text">Precio : variable</p>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" type="button">
                Button
              </button>
             
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Producto;
