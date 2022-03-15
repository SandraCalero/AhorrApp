import React from "react";
import "./TextArea.css";
import { useTextArea } from "./useTextArea";

function TextArea({ label }) {
  const { descriptionIcon, textarea, handleOnBlur } = useTextArea();

  return (
    <div className="descriptionTextArea">
      <span>
        <span className="iconTextArea">{descriptionIcon}</span>
        <label className="labelTextArea" htmlFor="description">
          {label}
        </label>
      </span>
      <textarea
        className="textArea"
        name="description"
        placeholder="Add a description here"
        defaultValue={textarea}
        onBlur={handleOnBlur}
      ></textarea>
    </div>
  );
}

export { TextArea };
