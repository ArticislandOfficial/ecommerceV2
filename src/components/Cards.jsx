import React from "react";
import { NavLink } from "react-router-dom";

const Cards = (props) => {
  return (
    <>
      <div className={props.class}>
        <section className="card estiloextcard  my-3 ">
          <img srcSet={props.src} className="card-img-top" alt={props.alt} />
          <article className="card-body text-center">
            <h5 className="card-title">
              {props.Cardtitle}
            </h5>
            <p className="card-text">{props.text}</p>
            <p className="card-text">{props.id}</p>
            <NavLink to={props.to}>
              <button className="btn btn-primary">ver producto</button>
            </NavLink>
{/* sE COMENTA BOTON PARA EVITAR QUE CUALQUIER USUARIO BORRE PRODUCTOS */}
            {/* <button className="btn btn-danger" onClick={props.onClick}>
              Eliminar
            </button> */}
          </article>
        </section>
      </div>
    </>
  );
};

export default Cards;
// /productos/${:idproduct}