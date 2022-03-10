import React from "react";
import "./Box.css";

function Box(props) {
  return (
    <div className="box">
      {props.transactionType} {props.amount}{" "}
      <span className={props.variant}>{props.icon}</span>
    </div>
  );
}

export default Box;
