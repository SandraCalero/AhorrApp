import React from "react";
import "./InputButton.css";

function InputButton(props) {
  let today = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date =
    monthNames[today.getMonth()] +
    " " +
    today.getDate() +
    "/" +
    today.getFullYear();
  return (
    <button className="inputbtn">
      {props.text}
      <span>{props.date && date}</span>
    </button>
  );
}

export { InputButton };
