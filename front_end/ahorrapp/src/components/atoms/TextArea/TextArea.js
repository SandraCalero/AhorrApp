import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "./TextArea.css";

function TextArea(props) {
  const descriptionIcon = <FontAwesomeIcon icon={faFileAlt} />;
  return (
    <div className="descriptionTextArea">
      <span>
        <span className="iconTextArea">{descriptionIcon}</span>
        <label className="labelTextArea" for="description">
          {props.label}
        </label>
      </span>
      <textarea
        className="textArea"
        name="description"
        placeholder="Add a description here"
      ></textarea>
    </div>
  );
}

export { TextArea };
