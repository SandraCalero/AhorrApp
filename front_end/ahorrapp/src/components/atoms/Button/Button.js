import React from "react";
import "./Button.css";

function Button(props) {
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
    <button className={props.variant} disabled={props.disabled}>
      {props.icon && <span>{props.icon}</span>} {props.text}
      {props.variant === "inputbtn date" && <span>{date}</span>}
    </button>
  );
}

export { Button };
