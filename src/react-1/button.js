import React from "react";

const Button = props => {
  return (
    <button onClick={props.click}>
      <h1>{props.text}</h1>
    </button>
  );
};

export default Button;
