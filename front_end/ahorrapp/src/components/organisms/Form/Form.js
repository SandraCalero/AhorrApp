import React from "react";
import { Input } from "../../molecules/Input/Input";
import { TextArea } from "../../atoms/TextArea/TextArea";
import { DivButtons } from "../../molecules/DivButtons/DivButtons";
import "./Form.css";
import { useForm } from "./useForm";
import { CategoryModal } from "../CategoryModal/CategoryModal";

function Form() {
  const {
    amountIcon,
    categoryIcon,
    dateIcon,
    categoryList,
    isOpen,
    categorySelected,
    openModal,
    closeModal,
    onClickCategory,
  } = useForm();
  return (
    <form
      className="form"
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
      <Input variant="date" icon={dateIcon} text="Date" />
      <TextArea label="Description" />
      <DivButtons type="action" />
      <CategoryModal
        categoryList={categoryList}
        isOpen={isOpen}
        closeModal={closeModal}
        onClick={onClickCategory}
      />
    </form>
  );
}

export { Form };
