import React from 'react'
import { NavLink } from 'react-router-dom';


const Cards = (props) => {
  return (
    <>
      <div className={props.class}>
        <section className="card estiloextcard  my-3 ">
          <img src={props.src} className="card-img-top" alt={props.alt} />
          <article className="card-body text-center">
            <h5 className="card-title">{props.Cardtitle}</h5>
            <p className="card-text">{props.text}</p>
            <NavLink to="/producto">
              <a href={props.href} className="btn btn-primary">
                {props.textButton}
              </a>
            </NavLink>
          </article>
        </section>
      </div>
    </>
  );
}

export default Cards
