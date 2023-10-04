import React from "react";

const Button = ({ buttonText, onClickEvent }) => {
  return <button onClick={onClickEvent}>{buttonText}</button>;
};

export default Button;
