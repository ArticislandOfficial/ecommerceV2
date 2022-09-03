import React from 'react'

const Cards = (props) => {
  return (
    <>
      <div className="card " style={{ width: "18rem" }}>
        <img
          src={props.src}
          className="card-img-top" //https://picsum.photos/1080
          alt={props.alt}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.Cardtitle}</h5>
          <p className="card-text">{props.text}</p>
          <a href={props.href} className="btn btn-primary">
            {props.textButton}
          </a>
        </div>
      </div>
    </>
  );
}

export default Cards
