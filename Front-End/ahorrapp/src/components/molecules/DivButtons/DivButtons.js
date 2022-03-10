import React from "react";
import "./DivButtons.css";
import { Button } from "../../atoms/Button/Button";

function DivButtons(props) {
  return (
    <div className="divButtons">
      {props.transactionType && (
        <Button text="Income" variant="btn shadow Income" />
      )}
      {props.transactionType && (
        <Button text="Expense" variant="btn shadow Expense" />
      )}
      {props.action && <Button text="Add" variant="btn Add" />}
      {props.action && <Button text="Cancel" variant="btn Cancel" />}
    </div>
  );
}

export { DivButtons };
