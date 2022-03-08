import React from "react";
import "./LinkButton.css";

export const LinkButton = (props) => {
  return (
    <button className={props.variant}>
      {props.icon && <span>{props.icon}</span>} {props.text}
    </button>
  );
};
