import React from "react";
import "./DivButtons.css";
import { Button } from "../../atoms/Button/Button";
import { LinkButton } from "../LinkButton/LinkButton";

function DivButtons(props) {
  return (
    <div className="divButtons">
      {props.type === "transaction" && (
        <Button text="Income" variant="btn shadow Income" />
      )}
      {props.type === "transaction" && (
        <Button text="Expense" variant="btn shadow Expense" />
      )}
      {props.type === "action" && (
        <Button text="Add" variant="btn Add" type="button" />
      )}
      {props.type === "action" && (
        <LinkButton
          route="/Dashboard"
          text="Cancel"
          variant="btn Cancel"
          type="reset"
        />
      )}
      {props.type === "confirmation" && (
        <Button text="No" variant="btn confirmation btnNo" />
      )}
      {props.type === "confirmation" && (
        <Button text="Yes" variant="btn confirmation btnYes" />
      )}
    </div>
  );
}

export { DivButtons };
