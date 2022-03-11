import React from "react";
import "./Input.css";
import { InputText } from "../../atoms/InputText/InputText";
import { Button } from "../../atoms/Button/Button";

function Input(props) {
  return (
    <div className="input">
      <div className="iconText">
        <span className="iconInput">{props.icon}</span>
        <span className="textInput">{props.text}</span>
      </div>
      {props.variant === "input" && <InputText />}
      {props.variant === "button" && (
        <Button variant="inputbtn" text="Select Category" />
      )}
      {props.variant === "date" && <Button variant="inputbtn date" />}
    </div>
  );
}

export { Input };
