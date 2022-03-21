import React, { useState, useEffect } from "react";
import axios from "axios";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBill,
  faCalendar,
  faList,
} from "@fortawesome/free-solid-svg-icons";
import { useFormState } from "../../../utils/states/useFormState";

function useForm({
  isOpenForm,
  variant,
  transactionInfo = null,
  url,
  method,
  closeFormModal,
}) {
  const wrapperClass = classNames("form", {
    show: isOpenForm,
    [variant]: true,
  });
  const [prevVariantForm, setPrevVariant] = useState("");
  //icons
  const amountIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const categoryIcon = <FontAwesomeIcon icon={faList} />;
  const dateIcon = <FontAwesomeIcon icon={faCalendar} />;
  // formstate
  const {
    amount,
    categorySelected,
    date,
    dateToShow,
    textarea,
    formatDateApi,
    onDateChange,
    onAmoutChange,
    onTextAreaChange,
    onCategoryChange,
    onClearData,
  } = useFormState({ transactionInfo });

  // states
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  useEffect(() => {
    if (variant !== prevVariantForm && !transactionInfo) {
      onClearData();
      setPrevVariant(variant);
    }
  }, [variant, onClearData, prevVariantForm, transactionInfo]);

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

  const onClickDate = (value) => {
    onDateChange(value);
    closeCalendar();
  };

  const onClickCategory = (value) => {
    onCategoryChange(value);
    closeModal();
  };

  const handleSubmitForm = () => {
    setIsSubmitting(true);
    axios({
      method,
      url,
      data: {
        value: amount,
        category_id: categorySelected.id,
        date: formatDateApi(date),
        description: textarea,
      },
    })
      .then((response) => {
        console.log(response.data);
        if (method === "PUT") {
          alert("Transaction updated");
        } else {
          alert("Transaction added");
        }
        closeFormModal && closeFormModal();
        setIsSubmitting(false);
        onClearData();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to add transaction");
        setIsSubmitting(false);
        closeFormModal && closeFormModal();
        onClearData();
      });
  };

  const disabled = !amount || !categorySelected || !date;

  return {
    wrapperClass,
    isSubmitting,
    amountIcon,
    categoryIcon,
    amountValue: amount,
    dateIcon,
    isOpen,
    categorySelected: categorySelected ? categorySelected.name : "",
    dateToShow,
    isOpenCalendar,
    disabled,
    textarea,
    onValueChange: onAmoutChange,
    openModal,
    closeModal,
    onClickCategory,
    onClickDate,
    openCalendar,
    handleOnBlurTextArea: onTextAreaChange,
    handleSubmitForm,
  };
}

export { useForm };
