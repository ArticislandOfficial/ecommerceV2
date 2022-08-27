import React from "react";
import "../styles/form.css";

const RegistroInicio = () => {
  return (
    <>
      <main className="container  py-5 ">
        <h2 className="text-center mb-5">Vamos registrate o inicia sesion</h2>
        <main className="row pruebaform">
          <section className="col-md-6 ">
            <h4 className="text-center">Form1</h4>
            <article>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <div className=" text-center">
                  <button
                    type="submit"
                    className=" text-center  btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </article>
          </section>
          <section className="col-md-6">
            <h4 className="text-center">Form2</h4>
            <article>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Check me out
                  </label>
                </div>
                <div className=" text-center">
                  <button
                    type="submit"
                    className=" text-center  btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </article>
          </section>
        </main>
      </main>
    </>
  );
};

export default RegistroInicio;
