import React from "react";
import "./DateModal.css";
import { useDateModal } from "./useDateModal";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function DateModal({ isOpenCalendar, onClickDate }) {
  const { wrapperClass } = useDateModal({ isOpenCalendar });
  return (
    <div className={wrapperClass}>
      <Calendar onChange={onClickDate} />
    </div>
  );
}

export { DateModal };
