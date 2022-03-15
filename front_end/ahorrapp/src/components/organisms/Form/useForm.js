import React, { useRef, useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faCalendar,
  faList,
} from "@fortawesome/free-solid-svg-icons";

function useForm({ isOpenForm, variant }) {
  const wrapperClass = classNames("form", {
    show: isOpenForm,
    [variant]: true,
  });
  //icons
  const amountIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const categoryIcon = <FontAwesomeIcon icon={faList} />;
  const dateIcon = <FontAwesomeIcon icon={faCalendar} />;

  // states
  const amount = useRef("");
  const setAmount = (value) => {
    amount.current = value;
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [categorySelected, setCategorySelected] = useState("");
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
  let dateToday =
    monthNames[today.getMonth()] +
    " " +
    today.getDate() +
    "/" +
    today.getFullYear();
  const [date, setDate] = useState(dateToday);

  const [textarea, setTextarea] = useState("");

  //functions
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const openCalendar = () => {
    setIsOpenCalendar(true);
  };
  const closeCalendar = () => {
    setIsOpenCalendar(false);
  };

  const onClickCategory = (value) => {
    setCategorySelected(value);
    closeModal();
  };

  const onClickDate = (value) => {
    dateToday =
      monthNames[value.getMonth()] +
      " " +
      value.getDate() +
      "/" +
      value.getFullYear();
    setDate(dateToday);
    closeCalendar();
  };

  const onValueChange = (values) => {
    console.log(values.value);
    setAmount(values.value);
  };

  const handleOnBlurTextArea = (event) => {
    setTextarea(event.target.value);
  };

  const handleSubmitForm = () => {
    const data = {
      amount: amount.current,
      category: categorySelected,
      date,
      textarea,
    };
    console.log("aquí va la petición post");
    console.log(
      "hacer que redireccione al dashboard o que renderice la misma pantalla?"
    );
    console.log(data);
  };

  const disabled = !amount.current || !categorySelected || !date;

  return {
    wrapperClass,
    amountIcon,
    categoryIcon,
    amountValue: amount.current,
    dateIcon,
    isOpen,
    categorySelected,
    date,
    isOpenCalendar,
    disabled,
    textarea,
    onValueChange,
    openModal,
    closeModal,
    onClickCategory,
    onClickDate,
    openCalendar,
    closeCalendar,
    handleOnBlurTextArea,
    handleSubmitForm,
  };
}

export { useForm };
