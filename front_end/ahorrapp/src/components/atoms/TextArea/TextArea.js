import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import "./TextArea.css";

function TextArea(props) {
  const descriptionIcon = <FontAwesomeIcon icon={faFileAlt} />;
  const [textarea, setTextarea] = React.useState("");

  const handleChange = (event) => {
    setTextarea(event.target.value);
    console.log(textarea);
  };
  return (
    <div className="descriptionTextArea">
      <span>
        <span className="iconTextArea">{descriptionIcon}</span>
        <label className="labelTextArea" htmlFor="description">
          {props.label}
        </label>
      </span>
      <textarea
        className="textArea"
        name="description"
        placeholder="Add a description here"
        value={textarea}
        onChange={handleChange}
      ></textarea>
    </div>
  );
}

export { TextArea };
