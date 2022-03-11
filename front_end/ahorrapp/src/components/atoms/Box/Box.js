import React from "react";
import "./Box.css";

function Box(props) {
  return (
    <div className="box">
      <div className="text">
        <span className="transactionTypeBox">{props.transactionType}</span>
        <span className="totalAmount">{props.amount}</span>
      </div>
      <span className={props.variant}>{props.icon}</span>
    </div>
  );
}

export { Box };
