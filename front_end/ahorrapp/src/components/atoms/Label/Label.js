import React from "react";
import "./Label.css";

function Label(props) {
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
    <label className={props.variant} onClick={props.eventClick}>
      {props.icon && <span>{props.icon}</span>} {props.text}
      {props.variant === "label date" && <span>{date}</span>}
    </label>
  );
}

export { Label };
