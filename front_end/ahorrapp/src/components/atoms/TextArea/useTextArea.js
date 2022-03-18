import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function useTextArea() {
  const descriptionIcon = <FontAwesomeIcon icon={faFileAlt} />;

  return { descriptionIcon };
}

export { useTextArea };
