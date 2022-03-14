import React from "react";
import "./CategoryModal.css";
import { Title } from "../../atoms/Title/Title";
import { ButtonList } from "../../molecules/ButtonList/ButtonList";
import { Button } from "../../atoms/Button/Button";
import useCategoryModal from "./useCategoryModal";

function CategoryModal({ categoryList, isOpen, closeModal, onClick }) {
  const { wrapperClass } = useCategoryModal({ isOpen });
  return (
    <div className={wrapperClass}>
      <div className="categoryModal">
        <Title text="Categories" />
        <ButtonList categoryList={categoryList} onClick={onClick} />
        <Button
          text="Cancel"
          variant="btn Cancel"
          eventClick={closeModal}
          type="button"
        />
      </div>
    </div>
  );
}

export { CategoryModal };
