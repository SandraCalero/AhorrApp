import { useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useFormState = () => {
  const location = useLocation();
  //Location data
  const transaction = location.state || {};
  const amountValue = transaction.amount || '';
  const cat = transaction.category || null;
  const transDate = transaction.date || new Date();
  // si local storage o history es vacio
  // pero si tienen valor

  const amount = useRef(amountValue);
  const setAmount = (value) => {
    amount.current = value;
  };
  const [categorySelected, setCategorySelected] = useState(cat);

  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const dateToday =
    monthNames[transDate.getMonth()] +
    ' ' +
    transDate.getDate() +
    '/' +
    transDate.getFullYear();
  const [date, setDate] = useState(dateToday);

  const [dateFormated, setDateFormated] = useState('');

  const [textarea, setTextarea] = useState('');

  const onDateChange = (value) => {
    const dateClicked =
      monthNames[value.getMonth()] +
      ' ' +
      value.getDate() +
      '/' +
      value.getFullYear();
    setDate(dateClicked);
    const dateNewFormat =
      value.getFullYear() +
      '-' +
      (parseInt(value.getMonth()) + 1) +
      '-' +
      value.getDate();
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
    setAmount('');
    setCategorySelected('');
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
