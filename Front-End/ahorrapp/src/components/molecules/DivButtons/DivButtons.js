import React from "react";
import "./DivButtons.css";
import { Button } from "../../atoms/Button/Button";

function DivButtons(props) {
  return (
    <div className="divButtons">
      {props.type === "transaction" &&(
        <Button text="Income" variant="btn shadow Income" />
      )}
      {props.type === "transaction" &&(
        <Button text="Expense" variant="btn shadow Expense" />
      )}
      {props.type === "action" && <Button text="Add" variant="btn Add" />}
      {props.type === "action" && <Button text="Cancel" variant="btn Cancel" />}
      {props.type === "confirmation" && <Button text="No" variant="btn confirmation btnNo" />}
      {props.type === "confirmation" && <Button text="Yes" variant="btn confirmation btnYes" />}
    </div>
  );
}

export { DivButtons };
