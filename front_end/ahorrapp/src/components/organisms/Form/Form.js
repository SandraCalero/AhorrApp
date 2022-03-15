import React from "react";
import { Input } from "../../molecules/Input/Input";
import { TextArea } from "../../atoms/TextArea/TextArea";
import { DivButtons } from "../../molecules/DivButtons/DivButtons";
import "./Form.css";
import { useForm } from "./useForm";
import { CategoryModal } from "../CategoryModal/CategoryModal";
import { DateModal } from "../../molecules/DateModal/DateModal";

function Form({ isOpenForm }) {
  const {
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
  } = useForm({ isOpenForm });
  return (
    <form
      className={wrapperClass}
      method="post"
      onSubmitCapture={(value) => {
        console.log(value);
      }}
    >
      <Input variant="input" icon={amountIcon} text="Amount" name="amount" />
      <Input
        variant="button"
        icon={categoryIcon}
        text="Category"
        name="category"
        value={categorySelected}
        onClick={openModal}
      />
      <Input
        variant="date"
        icon={dateIcon}
        text="Date"
        value={date}
        onClick={openCalendar}
      />
      <TextArea label="Description" />
      <DivButtons type="action" />
      <CategoryModal
        categoryList={categoryList}
        isOpen={isOpen}
        closeModal={closeModal}
        onClickCategory={onClickCategory}
      />
      <DateModal isOpenCalendar={isOpenCalendar} onClickDate={onClickDate} />
    </form>
  );
}

export { Form };
