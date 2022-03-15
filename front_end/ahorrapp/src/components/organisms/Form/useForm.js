import React, { useState } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faCalendar,
  faList,
} from "@fortawesome/free-solid-svg-icons";

function useForm({ isOpenForm }) {
  const wrapperClass = classNames("form", {
    show: isOpenForm,
  });
  const amountIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const categoryIcon = <FontAwesomeIcon icon={faList} />;
  const dateIcon = <FontAwesomeIcon icon={faCalendar} />;
  const categoryList = ["Rent", "Utilities", "Transport", "Restaurant"];
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);
  const [categorySelected, setCategorySelected] = useState("Select Category");
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

  return {
    wrapperClass,
    amountIcon,
    categoryIcon,
    dateIcon,
    categoryList,
    isOpen,
    categorySelected,
    date,
    isOpenCalendar,
    openModal,
    closeModal,
    onClickCategory,
    onClickDate,
    openCalendar,
    closeCalendar,
  };
}

export { useForm };
