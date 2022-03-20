import React from "react";
import NumberFormat from "react-number-format";
import { useInputText } from "./useInputText";
import "./InputText.css";

function InputText({ value, onBlur }) {
  const { onBlurInput, onValueChange } = useInputText({ onBlur });
  return (
    <div className="inputText" onBlur={onBlurInput}>
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
