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
    amountValue,
    textarea,
    disabled,
    onValueChange,
    openModal,
    closeModal,
    onClickCategory,
    onClickDate,
    openCalendar,
    handleOnBlurTextArea,
    handleSubmitForm,
  } = useForm({ isOpenForm });
  return (
    <form
      className={wrapperClass}
      method="post"
      onSubmitCapture={(value) => {
        console.log(value);
      }}
    >
      <Input
        variant="input"
        icon={amountIcon}
        value={amountValue}
        text="Amount"
        name="amount"
        onValueChange={onValueChange}
      />
      <Input
        variant="button"
        icon={categoryIcon}
        text="Category"
        name="category"
        value={categorySelected}
        placeholder="Select category"
        onClick={openModal}
      />
      <Input
        variant="date"
        icon={dateIcon}
        text="Date"
        value={date}
        onClick={openCalendar}
      />
      <TextArea
        label="Description"
        value={textarea}
        handleOnBlurTextArea={handleOnBlurTextArea}
      />
      <DivButtons
        type="action"
        disabledSubmit={disabled}
        handleSubmitForm={handleSubmitForm}
      />
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
