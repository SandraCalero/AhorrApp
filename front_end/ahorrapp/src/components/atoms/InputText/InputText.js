import React from "react";
import "./InputText.css";
import NumberFormat from "react-number-format";

function InputText({ value, onValueChange }) {
  return (
    <div className="inputText">
      <NumberFormat
        thousandsGroupStyle="thousand"
        placeholder="$ Enter amount"
        value={value}
        prefix="$"
        decimalSeparator="."
        displayType="input"
        type="tel"
        thousandSeparator
        allowNegative={true}
        onValueChange={onValueChange}
      />
    </div>
  );
}

export { InputText };
