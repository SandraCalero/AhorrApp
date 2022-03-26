import { useRef } from 'react';

const useInputText = ({ onBlur }) => {
  const amount = useRef('');
  const setAmount = (value) => {
    amount.current = value;
  };
  const onValueChange = (values) => setAmount(values);
  const onBlurInput = () => {
    onBlur(amount.current);
  };
  return { onBlurInput, onValueChange };
};

export { useInputText };
