import React from 'react';
import { Input } from '../../molecules/Input/Input';
import { TextArea } from '../../atoms/TextArea/TextArea';
import { DivButtons } from '../../molecules/DivButtons/DivButtons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMoneyBill,
  faCalendar,
  faList,
} from '@fortawesome/free-solid-svg-icons';
import './Form.css';

function Form() {
  const amountIcon = <FontAwesomeIcon icon={faMoneyBill} />;
  const categoryIcon = <FontAwesomeIcon icon={faList} />;
  const dateIcon = <FontAwesomeIcon icon={faCalendar} />;
  return (
    <form className="form">
      <Input variant="input" icon={amountIcon} text="Amount" isinput="true" />
      <Input
        variant="input"
        icon={categoryIcon}
        text="Category"
        isbutton="true"
      />
      <Input variant="input" icon={dateIcon} text="Date" isdate="true" />
      <TextArea label="Description" />
      <DivButtons type="action" />
    </form>
  );
}

export { Form };
