import React from "react";
import "./LinkButton.css";

function LinkButton(props) {
  return (
    <button className={props.variant}>
      {props.icon && <span>{props.icon}</span>} {props.text}
    </button>
  );
}

export { LinkButton };
