import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faCalendar,
  faList,
} from "@fortawesome/free-solid-svg-icons";

function useForm() {
  const amountIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const categoryIcon = <FontAwesomeIcon icon={faList} />;
  const dateIcon = <FontAwesomeIcon icon={faCalendar} />;
  const categoryList = ["Rent", "Utilities", "Transport", "Restaurant"];
  const [isOpen, setIsOpen] = useState(false);
  const [categorySelected, setCategorySelected] = useState("Select Category");

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const onClickCategory = (value) => {
    setCategorySelected(value);
    closeModal();
  };

  return {
    amountIcon,
    categoryIcon,
    dateIcon,
    categoryList,
    isOpen,
    categorySelected,
    openModal,
    closeModal,
    onClickCategory,
  };
}

export { useForm };
