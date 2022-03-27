import { useEffect, useState } from 'react';
import { useDate } from '../formaters/useDate';

export const useFormState = ({ transactionInfo }) => {
  const { formatDateApi, dateToString, currentDate, stringToDate } = useDate();
  // form values
  const [amount, setAmount] = useState('');
  const [categorySelected, setCategorySelected] = useState(null);
  const [date, setDate] = useState(currentDate());
  const [textarea, setTextarea] = useState('');

  const onDateChange = (value) => {
    setDate(value);
  };

  const onAmoutChange = (values) => {
    setAmount(values.value);
  };

  const onTextAreaChange = (event) => {
    setTextarea(event.target.value);
  };
  const onCategoryChange = (value) => {
    setCategorySelected(value);
  };

  const onClearData = () => {
    setAmount('');
    setCategorySelected(null);
    setDate(currentDate());
    setTextarea('');
  };

  const changeInitialData = ({ amount, category, dateDB, description }) => {
    setAmount(amount);
    setCategorySelected(category);
    setDate(stringToDate(dateDB));
    setTextarea(description);
  };

  useEffect(() => {
    if (transactionInfo) {
      const amount = transactionInfo.value;
      const category = {
        id: transactionInfo.category_id,
        name: transactionInfo.category_name
      };
      const dateDB = transactionInfo.date;
      const description = transactionInfo.description;
      changeInitialData({ amount, category, dateDB, description });
    }
  }, [transactionInfo]);

  return {
    amount,
    categorySelected,
    dateToShow: dateToString(date),
    date,
    textarea,
    formatDateApi,
    dateToString,
    onDateChange,
    onAmoutChange,
    onTextAreaChange,
    onClearData,
    onCategoryChange
  };
};
