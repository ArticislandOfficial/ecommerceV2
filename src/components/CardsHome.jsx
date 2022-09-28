import React from "react";
import { NavLink } from "react-router-dom";

const CardsHome = (props) => {
  return (
    <>
      <div key1={props.key} className={props.class}>
        <section className="card estiloextcard  my-3 ">
          <img srcSet={props.src} className="card-img-top" alt={props.alt} />
          <article className="card-body text-center">
            <h5 className="card-title">{props.Cardtitle}</h5>
            <p className="card-text">{props.text}</p>
            <p className="card-text">{props.id}</p>
            {/* <NavLink to={props.to}> */}
            <NavLink to='/product'>
              <button className="btn btn-primary">ver producto</button>
            </NavLink>
          </article>
        </section>
      </div>
    </>
  );
};

export default CardsHome;
// /productos/${:idproduct}