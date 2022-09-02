import React from "react";

const TextArea = (props) => {
  return (
    <>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder={props.placeholder}
          id={props.id}
          defaultValue={props.defaultValue}
        />
        <label htmlFor={props.htmlFor}>{props.contenido}</label>
      </div>
    </>
  );
};

export default TextArea;
