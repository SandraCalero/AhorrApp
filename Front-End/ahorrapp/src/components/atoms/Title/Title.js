import React from "react";
import "./Title.css";

function Title(props) {
  return (
    <section className="titleContainer">
      <h1 className="Title">
        {props.text}
        {props.userName && props.userName}
      </h1>
    </section>
  );
}

export { Title };
