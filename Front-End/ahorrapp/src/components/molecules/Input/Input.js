import React from "react";
import "./Input.css";
import { InputText } from "../../atoms/InputText/InputText";
import {Button} from '../../atoms/Button/Button'

function Input(props) {
  return (
    <div className={props.variant}>
      <span className="iconInput">{props.icon}</span>
      <p className="textInput">{props.text}</p>
      {props.isinput && <InputText />}
      {props.isbutton && <Button variant = 'inputbtn' text="Select Category" />}
      {props.isdate && <Button variant='inputbtn date' />}
    </div>
  );
}

export { Input };
