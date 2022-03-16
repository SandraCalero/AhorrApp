import { useRef, useState } from "react";
import { useLocation } from "react-router-dom";

export const useFormState = () => {
  const location = useLocation();
  //Location data
  const transaction = location.state || {};
  const amountValue = transaction.amount || "";
  const cat = transaction.category || null;
  const transDate = transaction.date || new Date();
  // si local storage o history es vacio
  // pero si tienen valor

  const amount = useRef(amountValue);
  const setAmount = (value) => {
    amount.current = value;
  };
  const [categorySelected, setCategorySelected] = useState(cat);

  const options = { year: "numeric", month: "short", day: "numeric" };
  const dateToday = transDate.toLocaleDateString("en-US", options);
  const [date, setDate] = useState(dateToday);

  const formatDate = (date) => {
    const dateToDate = new Date(date);
    let month = (dateToDate.getMonth() + 1).toString();
    let day = dateToDate.getDate().toString();
    const year = dateToDate.getFullYear();
    if (month.length < 2) {
      month = "0" + month;
    }
    if (day.length < 2) {
      day = "0" + day;
    }
    return [year, month, day].join("-");
  };

  const [dateFormated, setDateFormated] = useState(formatDate(date));

  const [textarea, setTextarea] = useState("");

  const onDateChange = (value) => {
    const dateClicked = value.toLocaleDateString("en-US", options);
    setDate(dateClicked);
    const dateNewFormat = formatDate(
      value.toLocaleDateString("en-US", options)
    );
    setDateFormated(dateNewFormat);
  };

  const onAmoutChange = (values) => {
    console.log(values.value);
    setAmount(values.value);
  };

  const onTextAreaChange = (event) => {
    setTextarea(event.target.value);
  };
  const onCategoryChange = (value) => {
    console.log(value);
    setCategorySelected(value);
  };

  const onClearData = () => {
    setAmount("");
    setCategorySelected("");
    setDate(dateToday);
  };

  return {
    amount: amount.current,
    categorySelected,
    date,
    textarea,
    dateFormated,
    onDateChange,
    onAmoutChange,
    onTextAreaChange,
    onClearData,
    onCategoryChange,
  };
};
