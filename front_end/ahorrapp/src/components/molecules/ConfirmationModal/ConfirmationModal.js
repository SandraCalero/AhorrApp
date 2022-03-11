import React from "react";
import "./ConfirmationModal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWarning } from "@fortawesome/free-solid-svg-icons";
import { DivButtons } from "../../molecules/DivButtons/DivButtons";

function ConfirmationModal() {
  const warningIcon = <FontAwesomeIcon icon={faWarning} />;
  return (
    <div className="confirmationModal">
      <div className="warningTitle">
        <span>{warningIcon}</span>Delete this transaction?
      </div>
      <div>
        <DivButtons type="confirmation" />
      </div>
    </div>
  );
}

export { ConfirmationModal };
