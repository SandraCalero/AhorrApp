import React from "react";
import "./Box.css";

function Box(props) {
  return (
    <div className="box">
      <p className="transactionTypeBox">{props.transactionType}</p>
      <p className="totalAmount">{props.amount}</p>
      <span className={props.variant}>{props.icon}</span>
    </div>
  );
}

export { Box };
