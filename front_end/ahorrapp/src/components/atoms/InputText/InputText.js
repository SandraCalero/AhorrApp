import React from "react";
import "./InputText.css";

function InputText(props) {
  return (
    <input
      className="inputText"
      name={props.name}
      type="number"
      placeholder="$ Enter amount"
    />
  );
}

export { InputText };
