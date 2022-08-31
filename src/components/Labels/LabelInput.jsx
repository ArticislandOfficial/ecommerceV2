import React from "react";

const LabelInput = (prop) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={prop.htmlFor} className="form-label">
         {prop.label}
        </label>
        <input
          type={prop.type}
          className="form-control"
          id={prop.id}
          /*emailHelp */
          aria-describedby={prop.ariadescribedby}
        />
      </div>
    </>
  );
};

export default LabelInput;
