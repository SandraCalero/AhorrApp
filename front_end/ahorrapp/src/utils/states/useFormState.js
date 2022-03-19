import { useRef, useState } from 'react';
import { useDate } from '../formaters/useDate';

export const useFormState = () => {
  const amount = useRef('');
  const setAmount = (value) => {
    amount.current = value;
  };
  const [categorySelected, setCategorySelected] = useState(null);

  const { formatDate, dateToString } = useDate();
  const dateToday = dateToString(new Date());

  const [date, setDate] = useState(dateToday);

  const [dateFormated, setDateFormated] = useState(formatDate(date));

  const [textarea, setTextarea] = useState('');

  const onDateChange = (value) => {
    const dateClicked = dateToString(value);
    setDate(dateClicked);
    const dateNewFormat = formatDate(dateClicked);
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
    setTextarea('');
    setDateFormated(formatDate(new Date()));
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
