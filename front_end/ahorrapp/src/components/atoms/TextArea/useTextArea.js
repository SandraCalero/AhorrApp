import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

function useTextArea() {
  const descriptionIcon = <FontAwesomeIcon icon={faFileAlt} />;
  const [textarea, setTextarea] = React.useState("");

  const handleOnBlur = (event) => {
    setTextarea(event.target.value);
  };
  return { descriptionIcon, textarea, handleOnBlur };
}

export { useTextArea };
