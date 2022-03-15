import React from "react";
import "./InputText.css";
import NumberFormat from "react-number-format";

function InputText(props) {
  return (
    <div className="inputText">
      <NumberFormat
        thousandsGroupStyle="thousand"
        placeholder="$ Enter amount"
        value=""
        prefix="$"
        decimalSeparator="."
        displayType="input"
        type="tel"
        thousandSeparator
        allowNegative={true}
        onValueChange={(values) => {
          console.log(values.value);
        }}
      />
    </div>
  );
}

export { InputText };
