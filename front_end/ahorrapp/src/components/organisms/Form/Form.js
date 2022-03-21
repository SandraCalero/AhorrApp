import React from "react";
import ReactLoading from "react-loading";
import { Input } from "../../molecules/Input/Input";
import { TextArea } from "../../atoms/TextArea/TextArea";
import { DivButtons } from "../../molecules/DivButtons/DivButtons";
import { useForm } from "./useForm";
import { CategoryModal } from "../CategoryModal/CategoryModal";
import { DateModal } from "../../molecules/DateModal/DateModal";
import "./Form.css";

function Form({
  isOpenForm,
  categoryList,
  variant,
  transactionInfo,
  updateTransactionList,
  url,
  method,
  closeFormModal,
  typeDivButtons = "action",
}) {
  const {
    wrapperClass,
    amountIcon,
    categoryIcon,
    dateIcon,
    isOpen,
    categorySelected,
    dateToShow,
    isOpenCalendar,
    amountValue,
    textarea,
    disabled,
    isSubmitting,
    onValueChange,
    openModal,
    closeModal,
    onClickCategory,
    onClickDate,
    openCalendar,
    handleOnBlurTextArea,
    handleSubmitForm,
  } = useForm({
    isOpenForm,
    variant,
    transactionInfo,
    url,
    method,
    closeFormModal,
    updateTransactionList,
  });

  if (isSubmitting) {
    return (
      <div className={wrapperClass}>
        <ReactLoading
          type="bubbles"
          color="#357EDD"
          width={"100%"}
          height={"100%"}
        />
      </div>
    );
  }

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
        onBlur={onValueChange}
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
        value={dateToShow}
        onClick={openCalendar}
      />
      <TextArea
        label="Description"
        value={textarea}
        handleOnBlurTextArea={handleOnBlurTextArea}
      />
      <DivButtons
        type={typeDivButtons}
        disabledSubmit={disabled}
        handleSubmitForm={handleSubmitForm}
        onCancelClick={closeFormModal}
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
