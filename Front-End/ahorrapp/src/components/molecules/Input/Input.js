import React from "react";
import "./Input.css";
import { InputButton } from "../../atoms/InputButton/InputButton";
import { InputText } from "../../atoms/InputText/InputText";

function Input(props) {
  return (
    <div className={props.variant}>
      <span className="iconInput">{props.icon}</span>
      <p className="textInput">{props.text}</p>
      {props.isinput && <InputText />}
      {props.isbutton && <InputButton text="Select Category" />}
      {props.isdate && <InputButton date="yes" />}
    </div>
  );
}

export { Input };
