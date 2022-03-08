import React from "react";
import "./Button.css";

function Button(props) {
  return (
    <button className={props.variant}>
      {props.icon && <span>{props.icon}</span>} {props.text}
    </button>
  );
}

export { Button };
