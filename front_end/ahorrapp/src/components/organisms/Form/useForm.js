import React, { useState, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBill,
  faCalendar,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import { useFormState } from '../../../utils/states/useFormState';

function useForm({ isOpenForm, variant }) {
  const wrapperClass = classNames('form', {
    show: isOpenForm,
    [variant]: true,
  });
  const [prevVariantForm, setPrevVariant] = useState('');
  //icons
  const amountIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const categoryIcon = <FontAwesomeIcon icon={faList} />;
  const dateIcon = <FontAwesomeIcon icon={faCalendar} />;
  // formstate
  const {
    amount,
    categorySelected,
    date,
    textarea,
    dateFormated,
    onDateChange,
    onAmoutChange,
    onTextAreaChange,
    onCategoryChange,
    onClearData,
  } = useFormState();
  // states
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  useEffect(() => {
    if (variant !== prevVariantForm) {
      onClearData();
      setPrevVariant(variant);
    }
  }, [variant, onClearData, prevVariantForm]);

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
      method: 'post',
      url: 'https://gorest.co.in/public/v2/users',
      data: {
        amount,
        category: categorySelected.id,
        date: dateFormated,
        textarea,
      },
    })
      .then((response) => {
        console.log(response);
        alert('Transaction added');
        setIsSubmitting(false);
        onClearData();
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to add transaction');
        setIsSubmitting(false);
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
    categorySelected: categorySelected ? categorySelected.name : '',
    date,
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
