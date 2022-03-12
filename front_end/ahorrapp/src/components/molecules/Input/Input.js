import React from "react";
import "./Input.css";
import { InputText } from "../../atoms/InputText/InputText";
import { Label } from "../../atoms/Label/Label";

function Input(props) {
  return (
    <div className="input">
      <div className="iconText">
        <span className="iconInput">{props.icon}</span>
        <span className="textInput">{props.text}</span>
      </div>
      {props.variant === "input" && <InputText />}
      {props.variant === "button" && (
        <Label variant="label" text="Select Category" />
      )}
      {props.variant === "date" && (
        <Label
          variant="label date"
          eventClick={() => {
            alert("Hizo Clicken Date");
          }}
        />
      )}
    </div>
  );
}

export { Input };