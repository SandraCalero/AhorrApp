import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <h1 className="Title">
      {props.text}
      {props.userName && props.userName}
    </h1>
  );
}

export { Title };
